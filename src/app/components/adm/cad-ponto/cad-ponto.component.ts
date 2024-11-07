import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Ponto } from '../../../model/ponto';
import { CadModalComponent } from './cad-modal/cad-modal.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { DeletModalComponent } from './delet-modal/delet-modal.component';

const pontos: Ponto[] = [
  {
   id: 1,
   nome: "Sala 1",
   imagem: "Img1",
   audio: "audio1",
   texto: "Lore Ipson"
  },
  {
   id: 2,
   nome: "Auditorio",
   imagem: "Img2",
   audio: "audio2",
   texto: "Lore Ipson"
  }
 ]


@Component({
  selector: 'app-cad-ponto',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    CadModalComponent,
    EditModalComponent,
    DeletModalComponent,
  ],
  templateUrl: './cad-ponto.component.html',
  styleUrl: './cad-ponto.component.css'
})
export class CadPontoComponent {

  nome!: string;
  descricao!: string;

  constructor(private route: ActivatedRoute, public dialog: MatDialog) {
    this.route.queryParams.subscribe(params => {
      console.log(params['nome']);
      this.nome = params['nome'];
      this.descricao = params['descricao'];
    });
  }

  openEditDialog(ponto: Ponto) {
    this.dialog.open(EditModalComponent, {
      data: {ponto: ponto},
      width: '600px',
    });
  }

  openCadDialog() {
    this.dialog.open(CadModalComponent, {
      width: '600px'
    });
  }

  openDeletDialog(ponto: Ponto) {
    this.dialog.open(DeletModalComponent, {
      data: {ponto: ponto}
    });
  }

   displayedColumns: string[] = ['id', 'nome', 'imagem', 'audio', 'texto', 'acoes'];
   dataSource = pontos

}
