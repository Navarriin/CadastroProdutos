import { Component, EventEmitter, Output } from '@angular/core';
// Angular materials
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
// Imports para forms
import {
  Validators,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
} from '@angular/forms';
// Meus imports(API, TableComponent e interface)
import { TableComponent } from '../table/table.component';
import { Products } from '../../interface/Products.interface';
import { RouterLink } from '@angular/router';
import { ProductsApiService } from '../../services/products-api.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterLink,
    MatCardModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  isLinear: boolean = false;

  formGroup: FormGroup = new FormGroup({
    id: new FormControl(''),
    sku: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    product: new FormControl('', Validators.required),
    stock: new FormControl(null, Validators.min(0)),
    cost: new FormControl(null, [Validators.required, Validators.min(0)]),
    price: new FormControl(null, [Validators.required, Validators.min(0)]),
  });

  constructor(private productsApi: ProductsApiService) {}

  saveProduct(): void {
    let products = this.formGroup.value as Products;

    this.productsApi.post(products).subscribe(() => {
      this.productsApi.getAll();
    });
  }
}
