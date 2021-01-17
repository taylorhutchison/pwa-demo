import { IPublicClientApplication, PublicClientApplication, InteractionType, BrowserCacheLocation } from '@azure/msal-browser';
import { MsalInterceptorConfiguration, MsalGuardConfiguration } from '@azure/msal-angular';
import { ConfigurationService } from '../configuration.service';

const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;

export function MSALInstanceFactory(configurationService: ConfigurationService): PublicClientApplication {
    const config = configurationService.config
    return new PublicClientApplication({
        auth: { ...config },
        // auth: {
        //     clientId: '33ee156e-f6de-406f-9533-3c402ced099a',
        //     authority: 'https://login.microsoftonline.com/f167129d-f0b9-4fdf-b4c0-8aa79fa09893',
        //     redirectUri: window.location.origin,
        //     postLogoutRedirectUri: window.location.origin
        // },
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