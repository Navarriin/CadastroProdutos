import { Component } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormComponent, MatCardModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {}
