import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from './auth-config';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    public claims: ReplaySubject<object>;

    constructor(private oauthService: OAuthService) {
        this.claims = new ReplaySubject();
        this.oauthService.configure(authConfig);
        this.oauthService.tokenValidationHandler = new JwksValidationHandler();
        this.oauthService.loadDiscoveryDocumentAndTryLogin()
            .then(() => {
                // console.log('oauthService')
                // console.log(this.oauthService)

                this.claims.next(this.parseJwt(this.oauthService.getAccessToken()));
                //this.oauthService.initImplicitFlow();
                //  });
            })
            .catch(err => {
                console.log('ERROR :: TokenService');
                console.log(err);
            });
    }

    login() {
        this.oauthService.initImplicitFlow()
    }

    logout() {
        this.oauthService.logOut();
    }

    // Get claims and information from JWT access token
    private parseJwt(token) {
        if (token) {
            let base64Url = token.split('.')[1],
                base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'),
                jsonPayload = decodeURIComponent(atob(base64)
                    .split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
            return JSON.parse(jsonPayload);
        }
    };

}