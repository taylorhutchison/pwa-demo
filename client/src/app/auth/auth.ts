import { IPublicClientApplication, PublicClientApplication, InteractionType, BrowserCacheLocation } from '@azure/msal-browser';
import { MsalInterceptorConfiguration, MsalGuardConfiguration } from '@azure/msal-angular';
import { environment } from '../../environments/environment';

const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;

export function MSALInstanceFactory(): IPublicClientApplication {
    return new PublicClientApplication({
        auth: {
            clientId: environment.clientId,
            authority: environment.authority,
            redirectUri: 'http://localhost:4200',
            postLogoutRedirectUri: 'http://localhost:4200'
        },
        cache: {
            cacheLocation: BrowserCacheLocation.LocalStorage,
            storeAuthStateInCookie: isIE, // set to true for IE 11. Remove this line to use Angular Universal
        },
    });
}

export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
    const protectedResourceMap = new Map<string, Array<string>>();
    protectedResourceMap.set('https://graph.microsoft.com/v1.0/me', ['user.read']);
    protectedResourceMap.set('https://graph.microsoft.com/v1.0/users/*', ['user.read']);

    return {
        interactionType: InteractionType.Redirect,
        protectedResourceMap
    };
}

export function MSALGuardConfigFactory(): MsalGuardConfiguration {
    return {
        interactionType: InteractionType.Redirect,
        loginFailedRoute: '/login-failed'
    };
}