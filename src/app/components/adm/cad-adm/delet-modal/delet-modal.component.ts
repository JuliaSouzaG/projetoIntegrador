import { Component, Inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuarioService } from '../../../../service/usuario/usuario.service';

@Component({
  selector: 'app-delet-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './delet-modal.component.html',
  styleUrl: './delet-modal.component.css'
})
export class DeletModalComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private usuarioService: UsuarioService
  ) {}

  deletar(id: number) {
    this.usuarioService.deletar(id).subscribe({
      next: (data) => {
        location.reload()
      }
    })
  }

}
