import { Component, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { CommonModule, NgFor } from '@angular/common';
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
  menuItems = signal<MenuItems[]>([
    {
      icon: 'map',
      label: 'Local',
      route: '../inicio'
    },
    {
      icon: 'place',
      label: 'Ponto',
      route: '../inicio'
    },
    {
      icon: 'supervisor_account',
      label: 'Gerenciar Usuários',
      route: 'cadastrar-administrador'
    },
  ])
}
