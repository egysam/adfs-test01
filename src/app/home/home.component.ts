import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { TokenService } from '../shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  public identityClaims: object;

  constructor(private tokenService: TokenService) {
    this.tokenService.claims.subscribe(claims => {
      this.identityClaims = claims;

      console.log('claims')
      console.log(claims)
    });
  }

  login() {
    this.tokenService.login();
  }

  logout() {
    this.tokenService.logout();
  }

  get firstName() {
    return this.identityClaims ? this.identityClaims['given_name'] : null;
  }

  get lastName() {
    return this.identityClaims ? this.identityClaims['family_name'] : null;
  }

  get email() {
    return this.identityClaims ? this.identityClaims['email'] : null;
  }

}
