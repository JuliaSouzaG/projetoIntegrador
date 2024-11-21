import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { LocalService } from '../../../../service/local/local.service';

@Component({
  selector: 'app-cad-modal',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './cad-modal.component.html',
  styleUrl: './cad-modal.component.css'
})
export class CadModalComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private localService: LocalService
  ) {}

  form!: FormGroup

  ngOnInit(): void {
    
    this.form = this.fb.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required]
    });

  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.localService.criar(this.form.value).subscribe({
        next: (data) => {
          console.log(data)
          location.reload()
        }
      })
    }
  }

}
