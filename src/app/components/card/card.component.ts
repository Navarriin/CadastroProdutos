import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// Meus components
import { TableComponent } from '../table/table.component';
import { FormComponent } from '../form/form.component';
// Angular Material components
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
// Modulo para rotear
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    TableComponent,
    FormComponent,
    RouterLink,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {}
