import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'job',
        pathMatch: 'full'
    },
    {
        path: 'job',
        loadChildren: '../app/job/job.module#JobModule'
    },
    {
        path: '**',
        redirectTo: 'job',
        pathMatch: 'full'
    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: false });
export class AppRoutingModule { }
