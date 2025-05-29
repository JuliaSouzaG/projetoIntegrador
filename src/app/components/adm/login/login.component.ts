import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../service/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {}

  form!: FormGroup;

  ngOnInit(): void {
      this.form = this.fb.group({
        emailUsuario: ['', Validators.compose([Validators.required, Validators.email, Validators.pattern('.*\\..*')])],
        senhaUsuario: ['', Validators.required]
      });
  }

  onSubmit() {
  if (this.form.valid) {
    console.log(this.form.value);
    this.authService.login(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/inicio/local']);
      },
      error: (err) => {
        console.error('Erro no login:', err);
        alert('Usuário ou senha inválidos. Por favor, tente novamente.');
      }
    });
  }
}

}
