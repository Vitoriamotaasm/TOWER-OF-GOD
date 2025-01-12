import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from
'@angular/forms';
import { AuthService } from '../auth.sevice';
import { Router } from '@angular/router';
@Component({
 selector: 'app-login',
 standalone: true,
 imports: [CommonModule, ReactiveFormsModule],
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 loginForm = this.fb.group({
 email: ['', [Validators.required, Validators.email]],
 password: ['', Validators.required]
 });
 constructor(
 private fb: FormBuilder,
 private authService: AuthService,
 private router: Router
 ) {}
 onSubmit() {
 if (this.loginForm.valid) {
 const { email, password } = this.loginForm.value;
 this.authService.login(email, password)
 .then(() => this.router.navigate(['/dashboard']))
 .catch(error => console.error(error));
 }
 }
}