import { Component } from '@angular/core';
// Angular material imports
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
// Import da interface
import { Products } from '../../interface/Products.interface';

const PRODUCT_DATA: Products[] = [
  {
    id: '12315d4sadasdad',
    sku: '1.0079',
    product: 'H',
    stock: 12,
    cost: 124,
    price: 26,
  },
];

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  displayedColumns: string[] = [
    'action',
    'sku',
    'product',
    'stock',
    'cost',
    'price',
  ];
  dataSource = PRODUCT_DATA;
}
