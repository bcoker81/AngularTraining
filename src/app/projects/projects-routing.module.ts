import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent } from '../home/home-container/home-container.component';
import { ProjectsContainerComponent } from './projects-container/projects-container.component';
import { ProjectDetailContainerComponent } from './project-detail-container/project-detail-container.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeContainerComponent },
  { path: 'projects', component: ProjectsContainerComponent },
  { path: 'projects/:id', component: ProjectDetailContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {}
