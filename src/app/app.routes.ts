import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [

    {path: '', 
    component: InicioComponent},

    {path: 'login',
    component: LoginComponent},

    {path: 'contato',
        component: ContactFormComponent},

    {path: 'register',
        component: RegisterComponent},

    


    
];
