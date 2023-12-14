import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// Meus components
import { TableComponent } from '../table/table.component';
import { FormComponent } from '../form/form.component';
// Angular Material components
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Products } from '../../interface/Products.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    TableComponent,
    FormComponent,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent extends FormComponent {
  search: boolean = false;

  toggleSearch(): void {
    this.search = !this.search;
  }

  teste(body: Products) {
    this.editProduct(body);
  }
}
