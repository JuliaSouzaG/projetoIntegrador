import { Component, computed, Input, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export type MenuItems = {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-custom-sidebar',
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './custom-sidebar.component.html',
  styleUrl: './custom-sidebar.component.css'
})
export class CustomSidebarComponent {
  sidenavCollapsed = signal(false)
  @Input() set collapsed(val: boolean) {
    this.sidenavCollapsed.set(val)
  }

  menuItems = signal<MenuItems[]>([
    {
      icon: 'map',
      label: 'Local',
      route: 'local'
    },
    // {
    //   icon: 'map',
    //   label: 'Mapa',
    //   route: 'mapa'
    // },
    {
      icon: 'supervisor_account',
      label: 'Gerenciar Usuários',
      route: 'cadastrar-administrador'
    },
    {
      icon: 'person',
      label: 'Meu Perfil',
      route: 'meu-perfil'
    },
    {
      icon: 'cancel',
      label: 'Logout',
      route: 'login'
    },
  ])

  profilePicSize = computed(() => this.sidenavCollapsed() ? '53' : '100')

}
