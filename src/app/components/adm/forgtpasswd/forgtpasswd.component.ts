import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forgtpasswd',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './forgtpasswd.component.html',
  styleUrl: './forgtpasswd.component.css'
})
export class ForgtpasswdComponent {
  constructor(private fb: FormBuilder) { }

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern('.*\\..*')
      ])]
    })
  }

  onSubmit() {
    console.log(this.form.value);
    this.form.reset();
  }
}
