import { Component } from '@angular/core';
// Meus components
import { TableComponent } from '../table/table.component';
// Angular Material components
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormComponent } from '../form/form.component';
import { CommonModule } from '@angular/common';

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
export class CardComponent {
  search: boolean = false;

  toggleSearch(): void {
    this.search = !this.search;
  }
}
