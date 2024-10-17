import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadstroadm',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cadstroadm.component.html',
  styleUrl: './cadstroadm.component.css'
})
export class CadstroadmComponent {

  constructor(private fb: FormBuilder) {}
  
  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      senha: ['', Validators.required]
    });
  }

  onSubmit(): void {
    console.log(this.form.value)
  }

}
