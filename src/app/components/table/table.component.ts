import { Component } from '@angular/core';
// Angular material imports
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
// Import da interface
import { Products } from '../../interface/Products.interface';
// Meu service
import { ProductsApiService } from '../../services/products-api.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatDividerModule, MatIconModule],
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

  updateProduct(body: Products): void {}

  deleteProduct(id: string): void {
    this.productsApi.delete(id).subscribe(() => this.getProducts());
  }
}
