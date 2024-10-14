import { Routes } from '@angular/router';
import { LoginComponent } from './components/adm/login/login.component';
import { ForgtpasswdComponent } from './components/adm/forgtpasswd/forgtpasswd.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'esqueceu-a-senha', component: ForgtpasswdComponent }
];
