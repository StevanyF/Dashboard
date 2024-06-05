import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'budget-planner', loadChildren:()=> import('./bugget-planner/bugget-planner.module').then(m=>m.BuggetPlannerModule)}
];
