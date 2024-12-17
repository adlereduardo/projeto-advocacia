import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { RegisterComponent } from './pages/register/register.component';
import { NgModule } from '@angular/core';
import { CrudComponent } from './pages/crud/crud.component';
import { AuthGuard} from './autenticacao/auth.guard';

export const routes: Routes = [

    {
        path: '',
        component: InicioComponent
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
        path: 'crud',
        component: CrudComponent,
        canActivate: [AuthGuard]
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
