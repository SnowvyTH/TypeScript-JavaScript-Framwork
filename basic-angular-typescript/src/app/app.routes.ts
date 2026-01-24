import { Routes } from '@angular/router';
// import { HomeComponent } from './features/home/home.component';
// import { AboutComponent } from './features/about/about.component';
// import { ContactComponent } from './features/contact/contact.component';
// import { LoginComponent } from './features/login/login.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./shared/components/layouts/front-layout/front-layout.component').then(m => m.FrontLayoutComponent),
        children: [
            {
                path: '',
                // component: HomeComponent
                loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
            },
            {
                path: 'about',
                // component: AboutComponent
                loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent)
            },
            {
                path: 'contact',
                // component: ContactComponent
                loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent)
            },
        ]
    },
    {
        path: 'login',
        // component: LoginComponent
        loadComponent: () => import('./features/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: '**',
        loadComponent: () => import('./shared/components/not-found/not-found/not-found.component').then(m => m.NotFoundComponent)
    }
];
