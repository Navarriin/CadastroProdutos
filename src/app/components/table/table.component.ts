import { Component } from '@angular/core';
// Angular material imports
import { MatTableModule } from '@angular/material/table';

export interface Products {
  acao: string;
  sku: number;
  produto: string;
  estoque: number;
  custo: number;
  preco: number;
}

const PRODUCT_DATA: Products[] = [
  {
    acao: 'Hydrogen',
    sku: 1.0079,
    produto: 'H',
    estoque: 12,
    custo: 124,
    preco: 26,
  },
  {
    acao: 'Hydrogen',
    sku: 1.0079,
    produto: 'H',
    estoque: 12,
    custo: 124,
    preco: 26,
  },
  {
    acao: 'Hydrogen',
    sku: 1.0079,
    produto: 'H',
    estoque: 12,
    custo: 124,
    preco: 26,
  },
];

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule],
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
