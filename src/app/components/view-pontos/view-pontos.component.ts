import { Component, OnInit } from '@angular/core';
import { PontoService } from '../../service/ponto/ponto.service';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Ponto } from '../../model/ponto';

@Component({
  selector: 'app-view-pontos',
  standalone: true,
  imports: [MatTableModule, MatSidenavModule, CommonModule],
  templateUrl: './view-pontos.component.html',
  styleUrl: './view-pontos.component.css'
})
export class ViewPontosComponent {

  constructor(private route: ActivatedRoute, private pontoService: PontoService, private http: HttpClient, private location: Location ) {}

  //   pontos = [
  //   {
  //     nome: 'Borboletário',
  //     mapa: 'assets/img/musa-maps.jpg',
  //     imagem: 'assets/img/inpa/borboleta.png',
  //     titulo: 'Borboletário',
  //     descricao: 'Exposição de Borboletas, com espécies da região amazônica. Ideal para quem gosta de natureza e biodiversidade.'
  //   },
  //   {
  //     nome: 'Jardim Sensoral',
  //     mapa: 'assets/img/mock/jardin_sensorial.png',
  //     imagem: 'assets/img/inpa/fungo.png',
  //     titulo: 'Fungário',
  //     descricao: 'O Fungário possui uma coleção de fungos amazônicos, mostrando sua importância ecológica e econômica.'
  //   },
  //   {
  //     nome: 'Aquario',
  //     mapa: 'assets/img/mock/aquario.png',
  //     imagem: 'assets/img/inpa/fungo.png',
  //     titulo: 'Aquário',
  //     descricao: 'O Aquário possui uma coleção de fungos amazônicos, mostrando sua importância ecológica e econômica.'
  //   }
  // ];

  data!: any
  local!: any
  localId!: number
  pontos!: Ponto[]

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.localId = Number(params.get('id'));
      this.http.get(`http://localhost:3000/view_pontos/?id=${this.localId}`).subscribe(data => {
        this.local = data;
        this.data = this.local[0]
      });

    });
    this.pontoService.listar(this.localId).subscribe({
      next: (data) => {
        this.pontos = data.pontos
      }
    })
  }

  // Ponto atualmente selecionado
  pontoSelecionado = this.pontos[0]; // Começa com o primeiro (Borboletário)

  // Método chamado ao clicar no botão
  selecionarPonto(ponto: any) {
    this.pontoSelecionado = ponto;
  }

  // Ação para o audioguia (exemplo simples)
  handleAudioAction() {
    const msg = new SpeechSynthesisUtterance(this.pontoSelecionado.descricao);
    window.speechSynthesis.speak(msg);
  }

}
