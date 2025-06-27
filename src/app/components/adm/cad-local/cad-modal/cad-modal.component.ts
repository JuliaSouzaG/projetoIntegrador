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
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      localizacao: ['', Validators.required],
      zona: ['', Validators.required],
      tipo_local: ['', Validators.required]
    });

  }

  selectedImage!: File;

  onFileChange(event: any, tipo: string) {
      const file = event.target.files[0];
      if (file) {
        if (tipo === 'imagem') this.selectedImage = file;
      }
    }

  onSubmit() {
    if (this.form.valid && this.selectedImage) {
      const formData = new FormData();
      formData.append('imagem', this.selectedImage);
      formData.append('titulo', this.form.get('titulo')?.value);
      formData.append('descricao', this.form.get('descricao')?.value);
      formData.append('zona', this.form.get('zona')?.value);
      formData.append('tipo_local', this.form.get('tipo_local')?.value);
      formData.append('localizacao', this.form.get('localizacao')?.value);

      console.log(this.form.value);
      this.localService.criar(formData).subscribe({
        next: (data) => {
          console.log(data)
          location.reload()
        }
      })
    } else {
        alert('Preencha todos os campos e selecione todos os arquivos.');
    }
  }

}
