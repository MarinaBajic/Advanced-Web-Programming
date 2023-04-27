import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Comand below is used to bootstrap the application (define what is the root module)
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
