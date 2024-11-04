import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-modal',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './edit-modal.component.html',
  styleUrl: './edit-modal.component.css'
})
export class EditModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
