import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { projectRouting } from './project.routing';
import { ProjectsListComponent } from './projects-list.component';
import { ProjectDetailComponent } from './project-detail.component';
import { ProjectFilterPipe } from './project-filter.pipe';
import { ProjectService } from './project.service';

@NgModule({
  imports: [
    FormsModule,
    SharedModule,
    projectRouting
  ],
  declarations: [
    ProjectsListComponent,
    ProjectDetailComponent,
    ProjectFilterPipe
  ],
  providers: [
    ProjectService
  ]
})
export class ProductModule {}
