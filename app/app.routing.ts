import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from './components/start/start.component';
import { SetupComponent } from './components/setup/setup.component';


const appRoutes: Routes = [
    {path:'', component:StartComponent},
    {path:'setup/:id', component: SetupComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
