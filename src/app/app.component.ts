import { Component } from '@angular/core';
import { TokenService} from './shared';
import { OAuthService } from 'angular-oauth2-oidc';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ADFS test-app';

   constructor(private oauthService: OAuthService, private tokenService: TokenService) {  
  }
  
}
