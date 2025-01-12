import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingComponent } from './app/app.routes';
import { environment } from './app/environments/environments.component';
import { appConfig } from './app/app.config';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

if (environment.production) {
 enableProdMode();
}
bootstrapApplication(AppRoutingComponent, {
 providers: [
 ...appConfig(),
 ]
})
 .catch(err => console.error(err));