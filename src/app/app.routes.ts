import { Routes } from '@angular/router';
import { LoginComponent } from './components/adm/login/login.component';
import { ForgtpasswdComponent } from './components/adm/forgtpasswd/forgtpasswd.component';
import { CadstroadmComponent } from './components/adm/cadstroadm/cadstroadm.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'esqueceu-a-senha', component: ForgtpasswdComponent },
    { path: 'cadastro-administrador', component: CadstroadmComponent }
];
