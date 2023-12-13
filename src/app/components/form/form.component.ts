import { Component } from '@angular/core';
// Angular materials
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
// Imports para forms
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  firstFormGroup = this.formBuilder.group({
    sku: [null, Validators.required],
    product: [null, Validators.required],
  });
  secondFormGroup = this.formBuilder.group({
    stock: [null],
    cost: [null, Validators.required],
    price: [null, Validators.required],
  });
  isLinear: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  saveProduct(): void {}

  updateProduct(): void {}
}
