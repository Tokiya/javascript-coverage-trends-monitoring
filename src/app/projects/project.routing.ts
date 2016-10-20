import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { ProjectsListComponent } from './projects-list.component';
import { ProjectDetailComponent } from './project-detail.component';

export const projectRoutes: Routes = [
  { path: '', component: ProjectsListComponent },
  { path: 'projects',
    children: [
      { path: '', component: ProjectsListComponent },
      { path: ':id', component: ProjectDetailComponent }
    ] },
];

export const projectRouting: ModuleWithProviders =
                RouterModule.forChild(projectRoutes);
