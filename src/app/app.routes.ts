import { Routes } from '@angular/router';
import { LoginComponent } from './components/adm/login/login.component';
import { ForgtpasswdComponent } from './components/adm/forgtpasswd/forgtpasswd.component';
import { CadAdmComponent } from './components/adm/cad-adm/cad-adm.component';
import { InicioComponent } from './components/adm/inicio/inicio.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent, title: 'Login de Usuário' },
    { path: 'esqueceu-a-senha', component: ForgtpasswdComponent, title: 'Esqueceu a senha' },
    { path: 'inicio', component: InicioComponent, 
        children: [
            { path: 'cadastrar-administrador', component: CadAdmComponent},
        ]
     },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
