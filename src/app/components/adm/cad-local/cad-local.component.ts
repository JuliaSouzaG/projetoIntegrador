import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Local } from '../../../model/locais';
import { RouterLink } from '@angular/router';
import { CadModalComponent } from './cad-modal/cad-modal.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { DeletModalComponent } from './delet-modal/delet-modal.component';
import {MatMenuModule} from '@angular/material/menu';

const locais: Local[] = [
  {
   id: 1,
   nome: "Senac",
   descricao: "predio administrativo",
  },
  {
   id: 2,
   nome: "Senac Centro",
   descricao: "faculdade",
  }
 ]


@Component({
  selector: 'app-cad-local',
  standalone: true,
  imports: [
    MatIconModule, 
    CommonModule, 
    MatDialogModule, 
    MatButtonModule, 
    MatTableModule,
    RouterLink,
    CadModalComponent,
    EditModalComponent,
    MatMenuModule,
    DeletModalComponent
  ],
  templateUrl: './cad-local.component.html',
  styleUrl: './cad-local.component.css'
})
export class CadLocalComponent {

  constructor(public dialog: MatDialog) {}

  openEditDialog(local: Local) {
    this.dialog.open(EditModalComponent, {
      data: {local: local},
      width: '600px',
    });
  }

  openCadDialog() {
    this.dialog.open(CadModalComponent, {
      width: '600px'
    });
  }

  openDeletDialog(local: Local) {
    this.dialog.open(DeletModalComponent, {
      data: {local: local}
    });
  }

  id!: number;
  nome!: string;
  email!: string;
  senha!: string;

   displayedColumns: string[] = ['id', 'nome', 'descricao', 'acoes'];
   dataSource = locais

}
