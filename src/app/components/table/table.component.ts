import { Component, EventEmitter, Output } from '@angular/core';
// Angular material imports
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
// Import da interface
import { Products } from '../../interface/Products.interface';
// Meu service
import { ProductsApiService } from '../../services/products-api.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  protected data!: Products[];
  displayedColumns: string[] = [
    'action',
    'sku',
    'product',
    'stock',
    'cost',
    'price',
  ];

  show: boolean = false;

  formGroupUpdate: FormGroup = new FormGroup({
    id: new FormControl(''),
    sku: new FormControl('', Validators.required),
    product: new FormControl('', Validators.required),
    stock: new FormControl(null),
    cost: new FormControl(null, Validators.required),
    price: new FormControl(null, Validators.required),
  });

  constructor(private productsApi: ProductsApiService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productsApi.get().subscribe((data) => (this.data = data));
  }

  postProduct(body: Products): void {
    this.productsApi.post(body).subscribe(() => this.getProducts());
  }

  putProduct(body: Products): void {
    this.productsApi.update(body).subscribe(() => this.getProducts());
    this.show = false;
  }

  deleteProduct(id: string): void {
    this.productsApi.delete(id).subscribe(() => this.getProducts());
    this.show = false;
    this.formGroupUpdate.reset();
  }

  fillingOutTheForm(body: Products): void {
    this.formGroupUpdate.patchValue(body);
    this.show = true;
  }
}
