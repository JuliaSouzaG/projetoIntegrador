import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cad-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './cad-modal.component.html',
  styleUrl: './cad-modal.component.css'
})
export class CadModalComponent {

}
