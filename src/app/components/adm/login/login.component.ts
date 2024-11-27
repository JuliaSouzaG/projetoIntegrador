import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private fb: FormBuilder, private router: Router) {}

  form!: FormGroup;

  ngOnInit(): void {
      this.form = this.fb.group({
        email: ['', Validators.compose([Validators.required, Validators.email, Validators.pattern('.*\\..*')])],
        senha: ['', Validators.required]
      });
  }

  onSubmit() {
    console.log(this.form.value)
    this.form.reset();
    this.router.navigate(['/inicio/local'])
  }



}
