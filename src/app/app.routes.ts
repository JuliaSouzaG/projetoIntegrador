import { Routes } from '@angular/router';
import { LoginComponent } from './components/adm/login/login.component';
import { ForgtpasswdComponent } from './components/adm/forgtpasswd/forgtpasswd.component';
import { CadAdmComponent } from './components/adm/cad-adm/cad-adm.component';
import { MeuPerfilComponent } from './components/adm/meu-perfil/meu-perfil.component';
import { InicioComponent } from './components/adm/inicio/inicio.component';
import { CadLocalComponent } from './components/adm/cad-local/cad-local.component';
import { CadPontoComponent } from './components/adm/cad-ponto/cad-ponto.component';
import { MapComponent } from './components/adm/map/map.component';
import { HomeComponent } from './components/home/home.component';
import { ViewPontosComponent } from './components/view-pontos/view-pontos.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent, title: 'Login de Usuário' },
    { path: 'esqueceu-a-senha', component: ForgtpasswdComponent, title: 'Esqueceu a senha' },
    { path: 'home', component: HomeComponent, title: 'Guia Virtual' },
    { path: 'view-pontos', component: ViewPontosComponent, title: 'Pontos' },
    { path: 'inicio', component: InicioComponent,
        children: [
            { path: 'cadastrar-administrador', component: CadAdmComponent},
            { path: 'meu-perfil', component: MeuPerfilComponent},
            { path: 'local', component: CadLocalComponent },
            { path: 'ponto', component: CadPontoComponent },
            { path: 'mapa', component: MapComponent },
        ]
     },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
