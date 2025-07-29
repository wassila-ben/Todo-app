import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './add-list.html',
  styleUrls: ['./add-list.scss']
})
export class AddListComponent {
  title = '';
  description = '';

  constructor(private router: Router) {}

  submit() {
    if (!this.title.trim()) {
      alert("Le nom de la liste est requis.");
      return;
    }

    // TODO : appeler un vrai service HTTP vers le backend
    console.log('Liste créée :', this.title, this.description);

    alert('Liste créée avec succès');
    this.router.navigate(['/lists']);
  }
}
