import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import("./modules/dashboard/pages/dashboard.component").then(c => c.DashboardComponent),
    children: [
      {
        path: 'home',
        loadComponent: () => import("./modules/dashboard/components/home/home.component").then(c => c.HomeComponent)
      },
    ]
  },
  {
    path: '', pathMatch: 'full', redirectTo: '/dashboard'
  }
];
