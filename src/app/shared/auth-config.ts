import{ AuthConfig } from 'angular-oauth2-oidc';


export const authConfig: AuthConfig = {

    // Resource Owner : the user
    // Client : The application

    // Url of the Identity Provider 
    //  issuer: 'https://steyer-identity-server.azurewebsites.net/identity',
    
    issuer: 'https://server2.samlab.com/adfs',

    // URL of the SPA to redirect the user to after login 
    // redirectUri: window.location.origin + '/index.html',
    redirectUri: window.location.origin, // + '/index.html',
    
    // The SPA's id. The SPA is registerd with this id at  the auth-server 
    //  clientId: 'spa-demo',
    //clientId: 'f3b36f84-991e-4578-be2d-3633f73fe6b4',
    clientId: 'adauthdev',
    //clientId: 'adauthdevwbwa',
    
    // set the scope for the permissions the client should request 
    // The first three are defined by OIDC. The 4th is a usecase-specific one 
    // scope: 'openid profile email voucher',
    scope: 'openid profile email',
    

    requireHttps: false,    
    //loginUrl: 'https://server2.samlab.com/adfs/oauth2/authorize',	      
    responseType: 'id_token token',	      
    //oidc: false,	      
    // logoutUrl: 'https://server2.samlab.com/adfs/ls/?wa=wsignoutcleanup1.0&wreply=' + 
    //             location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : ''),

    // postLogoutRedirectUri: location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '')

}  


export const authConfig0: AuthConfig = {

    // Url of the Identity Provider
    issuer: 'https://steyer-identity-server.azurewebsites.net/identity',
  
    // URL of the SPA to redirect the user to after login
    redirectUri: window.location.origin + '/index.html',
  
    // The SPA's id. The SPA is registerd with this id at the auth-server
    clientId: 'spa-demo',
  
    // set the scope for the permissions the client should request
    // The first three are defined by OIDC. The 4th is a usecase-specific one
    scope: 'openid profile email voucher',
  }