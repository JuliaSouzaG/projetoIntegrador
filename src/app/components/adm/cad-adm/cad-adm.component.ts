import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Usuario } from '../../../model/Usuario';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { CadModalComponent } from './cad-modal/cad-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { DeletModalComponent } from './delet-modal/delet-modal.component';

const usuarios: Usuario[] = [
  {
   id: 1,
   nome: "Pedro",
   email: "pedro@hotmail.com",
   senha: "123"
  },
  {
   id: 2,
   nome: "Manuela",
   email: "manuela@hotmail.com",
   senha: "321"
  }
 ]

@Component({
  selector: 'app-cad-adm',
  standalone: true,
  imports: [
    MatIconModule, 
    CommonModule, 
    MatDialogModule, 
    EditModalComponent, 
    MatButtonModule, 
    CadModalComponent, 
    DeletModalComponent, 
    MatTableModule],
  templateUrl: './cad-adm.component.html',
  styleUrl: './cad-adm.component.css'
})

export class CadAdmComponent {

  constructor(public dialog: MatDialog) {}

  openEditDialog(user: Usuario) {
    this.dialog.open(EditModalComponent, {
      data: {user: user},
      width: '600px',
    });
  }

  openCadDialog() {
    this.dialog.open(CadModalComponent, {
      width: '600px'
    });
  }

  openDeletDialog(user: Usuario) {
    this.dialog.open(DeletModalComponent, {
      data: {user: user}
    });
  }

  id!: number;
  nome!: string;
  email!: string;
  senha!: string;

   displayedColumns: string[] = ['id', 'nome', 'email', 'acoes'];
   dataSource = usuarios

}
