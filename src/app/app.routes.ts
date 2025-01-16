import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './core/guards/auth.guard';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ProfileComponent } from './features/profile/profile.component';
import { LevelsComponent } from './features/levels/levels.component';
import { features } from 'process';
import { profile } from 'console';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: 'dashboard',
        loadComponent: () => import ('./features/dashboard/dashboard.component').then(m => m.DashboardComponent),
        canActivate: [AuthGuard]
    }, 
    {
        path: 'profile',
        loadComponent: () => import('./features/profile/profile.component').then(m => m.ProfileComponent),
            canActivate: [AuthGuard]
    },
    {
        path: 'levels/:id',
        loadComponent: () => import('./features/levels/levels.component').then(m => m.LevelsComponent),
        canActivate: [AuthGuard]
    },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: '/dashboard' }
];

@Component ({
    selector: 'app-app-routing',
    standalone: true,
    imports: [RouterModule],
    template: '<router-outlet></router-outlet>'
})
export class AppRoutngComponent {}