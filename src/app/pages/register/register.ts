import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './register.html',
})
export class RegisterComponent {
  email = '';
  password = '';
  confirmPassword = '';

  constructor(private auth: AuthService, private router: Router) {}

  submit() {
    if (this.password !== this.confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }

    this.auth.register(this.email, this.password).subscribe({
      next: () => {
        alert("Compte créé, vous pouvez vous connecter.");
        this.router.navigate(['/login']);
      },
      error: (err: any) => {
        console.error(err);
        alert("Erreur lors de l'inscription.");
      }
    });
  }
}
