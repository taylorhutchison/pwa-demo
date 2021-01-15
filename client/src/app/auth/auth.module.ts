import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsalGuard, MsalInterceptor, MsalBroadcastService, MsalInterceptorConfiguration, MsalModule, MsalService, MSAL_GUARD_CONFIG, MSAL_INSTANCE, MSAL_INTERCEPTOR_CONFIG, MsalGuardConfiguration } from '@azure/msal-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MSALGuardConfigFactory, MSALInstanceFactory, MSALInterceptorConfigFactory } from './auth';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [{
    provide: MSAL_INTERCEPTOR_CONFIG,
    useFactory: MSALInterceptorConfigFactory,
  },
  {
    provide: MSAL_GUARD_CONFIG,
    useFactory: MSALGuardConfigFactory,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: MsalInterceptor,
    multi: true,
  },
  {
    provide: MSAL_INSTANCE,
    useFactory: MSALInstanceFactory
  },
    MsalService,
    MsalGuard,
    MsalBroadcastService],
})
export class AuthModule {
}
