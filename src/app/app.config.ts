import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Importe 'withFetch'
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCkLSfy2HAVhTKFCONwSmUisX5NR2O_82U",
  authDomain: "auth-advocacia.firebaseapp.com",
  databaseURL: "https://auth-advocacia-default-rtdb.firebaseio.com",
  projectId: "auth-advocacia",
  storageBucket: "auth-advocacia.firebasestorage.app",
  messagingSenderId: "334890534790",
  appId: "1:334890534790:web:f0f7e8b56b32618b8c8e07"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()), // Configuração para usar 'fetch' no HttpClient
    // Não usa importProvidersFrom, mas agora passa diretamente os provedores
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth())
  ],
};