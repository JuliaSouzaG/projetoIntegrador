import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Local } from '../../../model/locais';
import { RouterLink } from '@angular/router';
import { CadModalComponent } from './cad-modal/cad-modal.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { DeletModalComponent } from './delet-modal/delet-modal.component';
import { MatMenuModule } from '@angular/material/menu';
import { LocalService } from '../../../service/local/local.service';


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
export class CadLocalComponent implements OnInit {

  constructor(public dialog: MatDialog, private localService: LocalService) {}

  locais!: Local[]

  ngOnInit(): void {
    this.localService.listar().subscribe({
      next: (data) => {
        this.locais = data.locais
      }
    })
  }

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

   displayedColumns: string[] = ['id', 'nome', 'descricao', 'acoes'];
}
