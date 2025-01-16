import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service/auth.sevice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
   
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      if (email != null && email !== undefined && password != null && password !== undefined) {
        this. authService.login(email,password)
        .then (() => {
            this.router.navigate(['/dashboard']);
        })
        .catch(error => {
            console.error('Erro no loin:', error);
        });
      } else {
        console.error('Email ou senha inválios');
      } 
    } else {
        console.error('Formulário inválido');
    }
  }
}
