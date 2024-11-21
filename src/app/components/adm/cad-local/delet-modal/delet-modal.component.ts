import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { LocalService } from '../../../../service/local/local.service';

@Component({
  selector: 'app-delet-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './delet-modal.component.html',
  styleUrl: './delet-modal.component.css',
  host: { 'hostID': crypto.randomUUID().toString() }
})
export class DeletModalComponent {
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private localService: LocalService
) {}

deletar(id: number) {
  this.localService.deletar(id).subscribe({
    next: () => {
      location.reload()
    }
  })
}

}
