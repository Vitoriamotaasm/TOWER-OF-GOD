import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './app/environments/environment';
import { appConfig } from './app/app.config';
import { RouterModule } from '@angular/router';

if (environment.production) {
 enableProdMode();
}
bootstrapApplication(AppComponent, {
 providers: [
   ...appConfig.providers,
 importProvidersFrom(RouterModule)
 ]
})
 .catch(err => console.error(err));