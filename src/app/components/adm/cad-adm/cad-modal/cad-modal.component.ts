import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { UsuarioService } from '../../../../service/usuario/usuario.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Usuario } from '../../../../model/Usuario';

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
    private usuarioService: UsuarioService,
    private fb: FormBuilder
  ) {}

  form!: FormGroup;

  ngOnInit(): void {

    this.form = this.fb.group({
      nomeUsuario: ['', Validators.required],
      emailUsuario: ['', Validators.required],
      senhaUsuario: ['', Validators.required],
    });

  }

  onSubmit() {

    if(this.form.valid) {
      console.log(this.form.value)
      this.usuarioService.criar(this.form.value).subscribe({
        next: (data) => {
          console.log(data)
          location.reload()
        }
      })
    } 
    
  }

}
