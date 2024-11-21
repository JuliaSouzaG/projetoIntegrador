import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Usuario } from '../../../model/Usuario';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { CadModalComponent } from './cad-modal/cad-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { DeletModalComponent } from './delet-modal/delet-modal.component';
import { UsuarioService } from '../../../service/usuario/usuario.service';

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
    MatMenuModule,
    MatTableModule],
  templateUrl: './cad-adm.component.html',
  styleUrl: './cad-adm.component.css'
})

export class CadAdmComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private usuarioService: UsuarioService
) {}

usuarios!: Usuario[]

ngOnInit(): void {

  this.usuarioService.listar().subscribe({
    next: (data) => {
      this.usuarios = data.usuarios;
    }
  })

}

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

   displayedColumns: string[] = ['id', 'nome', 'email', 'acoes'];

}
