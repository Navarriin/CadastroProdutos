import { Component, EventEmitter, Output } from '@angular/core';
// Angular materials
import { MatInputModule } from '@angular/material/input';
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
import { ProductsApiService } from '../../services/products-api.service';
import { TableComponent } from '../table/table.component';
import { Products } from '../../interface/Products.interface';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent extends TableComponent {
  @Output() toggle: EventEmitter<void> = new EventEmitter();
  isLinear: boolean = false;

  formGroup: FormGroup = new FormGroup({
    id: new FormControl(null),
    sku: new FormControl(null, Validators.required),
    product: new FormControl(null, Validators.required),
    stock: new FormControl(null),
    cost: new FormControl(null, Validators.required),
    price: new FormControl(null, Validators.required),
  });

  constructor(productsApi: ProductsApiService) {
    super(productsApi);
  }

  saveProduct(): void {
    if (this.formGroup.valid) {
      let products = this.formGroup.value as Products;

      this.postProduct(products);
      this.toggle.emit();
    } else {
      this.formGroup.markAllAsTouched();
      this.formGroup.updateValueAndValidity();
    }
  }
}
