import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../../../service/usuario/usuario.service';

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
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) {}

  form!: FormGroup

  ngOnInit(): void {

    this.form = this.fb.group({
      nomeusuario: [this.data.user.nomeusuario, Validators.required],
      emailusuario: [this.data.user.emailusuario, Validators.compose([Validators.required, Validators.email])],
      senhausuario: [this.data.user.senhausuario, Validators.required]
    })

  }

  onSubmit() {

    this.usuarioService.editar(this.data.user.idusuario, this.form.value).subscribe({
      next: (data) => {
        console.log(data)
        location.reload()
      }
    })

  }

}
