import { importProvidersFrom } from "@angular/core";
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';

export const appConfig = () => [
  importProvidersFrom(HttpClientModule),
  provideFirebaseApp (() =>
  initializeApp(environment.firebase)),
  provideAuth (() => getAuth ()),
];
