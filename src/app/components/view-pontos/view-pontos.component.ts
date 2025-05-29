import { Component, OnInit } from '@angular/core';
import { PontoService } from '../../service/ponto/ponto.service';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-view-pontos',
  standalone: true,
  imports: [MatTableModule, MatSidenavModule],
  templateUrl: './view-pontos.component.html',
  styleUrl: './view-pontos.component.css'
})
export class ViewPontosComponent {

  constructor(private route: ActivatedRoute, private pontoService: PontoService ) {}

}
