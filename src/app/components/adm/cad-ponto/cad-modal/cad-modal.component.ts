import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-cad-modal',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './cad-modal.component.html',
  styleUrl: './cad-modal.component.css'
})
export class CadModalComponent {

}
