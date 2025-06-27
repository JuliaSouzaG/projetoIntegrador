import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LocalService } from '../../../../service/local/local.service';

@Component({
  selector: 'app-edit-modal',
  standalone: true,
  imports: [
    MatDialogModule, 
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './edit-modal.component.html',
  styleUrl: './edit-modal.component.css'
})
export class EditModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private localService: LocalService
  ) {}

  form!: FormGroup

  ngOnInit(): void {
    this.form = this.fb.group({
      titulo: [this.data.local.titulo, Validators.required],
      descricao: [this.data.local.descricao, Validators.required],
      localizacao: [this.data.local.localizacao, Validators.required],
      zona: [this.data.local.zona, Validators.required],
      tipo_local: [this.data.local.tipo_local, Validators.required]
    })
  }

  selectedImage!: File;

  onFileChange(event: any, tipo: string) {
      const file = event.target.files[0];
      if (file) {
        if (tipo === 'imagem') this.selectedImage = file;
      }
    }

  onSubmit() {

    if (this.form.valid) {

      const formData = new FormData();
      formData.append('imagem', this.selectedImage);
      formData.append('titulo', this.form.get('titulo')?.value);
      formData.append('descricao', this.form.get('descricao')?.value);
      formData.append('zona', this.form.get('zona')?.value);
      formData.append('tipo_local', this.form.get('tipo_local')?.value);
      formData.append('localizacao', this.form.get('localizacao')?.value);   

      this.localService.editar(this.data.local.idlocal_visitacao, this.form.value).subscribe({
        next: () => {
          location.reload()
        }
      })
    }

  }

}
