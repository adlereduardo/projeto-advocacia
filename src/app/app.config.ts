import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Importe 'withFetch'
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAEu3-TTv7pI9uAHnr36I_huhcr1Ej0T4g",
  authDomain: "advocacia-d22bd.firebaseapp.com",
  projectId: "advocacia-d22bd",
  storageBucket: "advocacia-d22bd.firebasestorage.app",
  messagingSenderId: "846268920432",
  appId: "1:846268920432:web:b9463058d5b4e4be9dfab5",
  measurementId: "G-W7RL0LQX9H"
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