import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { RegisterComponent } from './pages/register/register.component';
import { NgModule } from '@angular/core';
import { CrudComponent } from './pages/crud/crud.component';
import { AuthGuard } from './autenticacao/auth.guard';
import { PoliticasComponent } from './pages/politicas/politicas.component';
import { AssociadosComponent } from './pages/associados/associados.component';

export const routes: Routes = [

    {
        path: '',
        component: InicioComponent
    },

    {
        path: 'crud',
        component: CrudComponent,
        canActivate: [AuthGuard]
    },

    {
        path: 'login',
        component: LoginComponent
    },
    
    {
        path: 'contato',
        component: ContactFormComponent
    },

    {
        path: 'register',
        component: RegisterComponent
    },

    {
        path: 'politicas',
        component: PoliticasComponent
    },

    {
        path: 'associados',
        component: AssociadosComponent
    },

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
