import { Component } from '@angular/core';
import {DragDropModule, CdkDragHandle, CdkDragEnd} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-map',
  standalone: true,
  imports: [DragDropModule, CdkDragHandle, CommonModule, FormsModule  ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
editing = true  
  mapaUrl: string | ArrayBuffer | null = null;
  imagemFile!: File;
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
];
  localSelecionadoId: number | null = null;
  imagemMapa: string | null = null;

  pontosDoLocal: any[] = [];
  posicoes: Record<number, { x: number; y: number }> = {};

  carregarLocal() {
    const local = this.locais.find(l => l.id == this.localSelecionadoId);
    if (local) {
      this.imagemMapa = local.imagem;
      this.pontosDoLocal = this.pontos.filter(p => p.idLocal === local.id);

      const salvo = localStorage.getItem(`posicoes-local-${local.id}`);
      this.posicoes = salvo ? JSON.parse(salvo) : {};
    }
  }

onDragEnded(event: CdkDragEnd, pontoId: number) {
  const pos = event.source.getFreeDragPosition();
  const container = document.querySelector('.mapa-base') as HTMLImageElement;

  if (container) {
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    const xPercent = (pos.x / width) * 100;
    const yPercent = (pos.y / height) * 100;

    this.posicoes[pontoId] = {
      x: xPercent,
      y: yPercent
    };
  }
}

  salvarPosicoes() {
    if (this.localSelecionadoId) {
      localStorage.setItem(
        `posicoes-local-${this.localSelecionadoId}`,
        JSON.stringify(this.posicoes)
      );
      console.log(this.posicoes)
      alert('Posições salvas com sucesso!');
    }
  }

}
