import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/auth', pathMatch: 'full' },
    { path: 'auth', loadChildren: () => import('./module/content/auth/auth.module').then(m => m.AuthModule) },
    { path: 'main', loadChildren: () => import('./module/content/main/main.module').then(m => m.MainModule) }
];
