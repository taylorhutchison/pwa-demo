import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { APP_CONFIGURATION } from './app/app.configuration';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('/api/AuthConfiguration');
  const configuration = response.json;
  platformBrowserDynamic([{ provide: APP_CONFIGURATION, useValue: configuration }])
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
});
