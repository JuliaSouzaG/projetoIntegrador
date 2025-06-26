import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { LocalService } from '../../service/local/local.service';
import { Local } from '../../model/locais';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    MatTableModule, 
    RouterLink,
    FormsModule,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private localService: LocalService) {}

  locaiss!: Local[]

  locaisTeste = [
    {
      idlocal_visitacao: 1,
      nome: 'INPA',
      descricao: 'Instituto Nacional de Pesquisa Amazonas',
    },
    {
      idlocal_visitacao: 2,
      nome: 'MUSA',
      descricao: 'Museu da Amazônia',
    },
    {
      idlocal_visitacao: 3,
      nome: 'Teatro do Amazonas',
      descricao: 'Instituto Nacional de Pesquisa Amazonas',
    }
  ]

  ngOnInit(): void {
    this.localService.listar().subscribe({
      next: (data) => {
        this.locaiss = data.locais
      }
    })
  }

  displayedColumns: string[] = ['nome', 'descricao', 'view'];

    pontos = [
  { id: 1, idLocal: 1, nome: 'Borboletário' },
  { id: 2, idLocal: 1, nome: 'Trilha Suspensa' },
  { id: 3, idLocal: 2, nome: 'Viveiro Aracnídeos' }
  ]

   locais = [
  {
    id: 1,
    nome: 'Bosque da Ciência',
    imagem: '../../../../assets/img/inpa/map.png'
  },
  {
    id: 2,
    nome: 'MUSA - Viveiro',
    imagem: '../../../../assets/img/inpa/map.png'
  }
   ]
  localSelecionadoId: number | null = null;

  imagemMapa: string | null = null;
  pontosDoLocal: any[] = [];
  posicoes: Record<number, { x: number; y: number }> = {};

  carregarMapa() {
    const local = this.locais.find(l => l.id == this.localSelecionadoId);
    if (local) {
      this.imagemMapa = local.imagem;
      this.pontosDoLocal = this.pontos.filter(p => p.idLocal === local.id);

      const posSalvas = localStorage.getItem(`posicoes-local-${local.id}`);
      this.posicoes = posSalvas ? JSON.parse(posSalvas) : {};
    }
  }

  abrirDetalhes(ponto: any) {
    alert(`Ponto: ${ponto.nome}`);
  }

}
