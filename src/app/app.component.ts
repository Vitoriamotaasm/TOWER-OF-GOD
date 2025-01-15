import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './auth/auth.service/auth.sevice';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, HeaderComponent, FooterComponent,RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})

export class AppComponent {
  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthService) {
    this, this.isLoggedIn$ =
    this.authService.getUser().pipe(map(user => !!user));
  }
}
