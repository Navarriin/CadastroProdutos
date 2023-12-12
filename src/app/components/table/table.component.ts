import { Component } from '@angular/core';
// Angular material imports
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

export interface Products {
  id?: string;
  sku: string;
  produto: string;
  estoque: number;
  custo: number;
  preco: number;
}

const PRODUCT_DATA: Products[] = [
  {
    id: '12315d4sadasdad',
    sku: '1.0079',
    produto: 'H',
    estoque: 12,
    custo: 124,
    preco: 26,
  },
  {
    id: '12efsav6dfdnjsa',
    sku: '1.0079',
    produto: 'H',
    estoque: 12,
    custo: 124,
    preco: 26,
  },
  {
    id: 'ndanybusafas9er43',
    sku: '1.0079',
    produto: 'H',
    estoque: 12,
    custo: 124,
    preco: 26,
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
    'acao',
    'sku',
    'produto',
    'estoque',
    'custo',
    'preco',
  ];
  dataSource = PRODUCT_DATA;
}
