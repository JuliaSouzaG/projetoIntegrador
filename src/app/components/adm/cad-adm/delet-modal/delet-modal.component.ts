import { Component, Inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delet-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './delet-modal.component.html',
  styleUrl: './delet-modal.component.css'
})
export class DeletModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

}
