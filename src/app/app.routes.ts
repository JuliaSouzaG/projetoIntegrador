import { Routes } from '@angular/router';
import { LoginComponent } from './components/adm/login/login.component';
import { ForgtpasswdComponent } from './components/adm/forgtpasswd/forgtpasswd.component';
import { CadAdmComponent } from './components/adm/cad-adm/cad-adm.component';
import { MeuPerfilComponent } from './components/adm/meu-perfil/meu-perfil.component';
import { InicioComponent } from './components/adm/inicio/inicio.component';
import { CadLocalComponent } from './components/adm/cad-local/cad-local.component';
import { CadPontoComponent } from './components/adm/cad-ponto/cad-ponto.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent, title: 'Login de Usuário' },
    { path: 'esqueceu-a-senha', component: ForgtpasswdComponent, title: 'Esqueceu a senha' },
    { path: 'inicio', component: InicioComponent,
        children: [
            { path: 'cadastrar-administrador', component: CadAdmComponent},
            { path: 'meu-perfil', component: MeuPerfilComponent},
            { path: 'local', component: CadLocalComponent},
            { path: 'ponto', component: CadPontoComponent},
        ]
     },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
