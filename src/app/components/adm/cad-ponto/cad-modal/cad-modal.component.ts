import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { PontoService } from '../../../../service/ponto/ponto.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cad-modal',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, ReactiveFormsModule, FormsModule],
  templateUrl: './cad-modal.component.html',
  styleUrl: './cad-modal.component.css'
})
export class CadModalComponent {

    constructor(
      private fb: FormBuilder,
      private pontoService: PontoService,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private location: Location
    ) {}

    form!: FormGroup;

    ngOnInit(): void {
        
        this.form = this.fb.group({
          nome: ['', Validators.required],
          descricao: ['', Validators.required], 
        });
    
    }

    selectedImage!: File;
    selectedMapa!: File;
    selectedAudio!: File;

    onFileChange(event: any, tipo: string) {
      const file = event.target.files[0];
      if (file) {
        if (tipo === 'imagem') this.selectedImage = file;
        if (tipo === 'mapa') this.selectedMapa = file;
        if (tipo === 'audio') this.selectedAudio = file;
      }
    }
    
    onSubmit() {
      if (this.form.valid && this.selectedImage && this.selectedMapa && this.selectedAudio) {
        const formData = new FormData();
        formData.append('nome', this.form.get('nome')?.value);
        formData.append('descricao', this.form.get('descricao')?.value);
        formData.append('imagem', this.selectedImage);
        formData.append('mapa', this.selectedMapa);
        formData.append('audio', this.selectedAudio);
        formData.append('idlocal_visitacao', this.data.id); // você pode ajustar isso conforme sua lógica

        this.pontoService.criar(formData).subscribe({
          next: (res) => {
            alert(res.message || 'Ponto criado com sucesso!');
            location.reload();
          },
          error: (err) => {
            console.error(err);
            alert('Erro ao criar ponto: ' + err);
          }
        });
      } else {
        alert('Preencha todos os campos e selecione todos os arquivos.');
      }
    }


}
