import { Component, computed, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CustomSidebarComponent } from './custom-sidebar/custom-sidebar.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    CustomSidebarComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  constructor(private breakpointObserver: BreakpointObserver) {
    // Observar mudanças no tamanho da tela
    this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet])
      .subscribe(result => {
        if (result.matches) {
          this.collapsed.set(true);  // Colapsa quando é dispositivo móvel ou tablet
        } else {
          this.collapsed.set(false);  // Expande novamente para desktop
        }
      });
  }

  collapsed = signal(false)

  logout() {
    localStorage.clear();
  }

  sidenavWidth = computed(() => this.collapsed() ? '65px' : '250px')
  
}
