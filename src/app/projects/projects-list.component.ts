import { Component, OnInit }  from '@angular/core';

import { IProject } from './project';
import { ProjectService } from './project.service';

interface IProjectListItem extends IProject {
    showDetails :boolean;
}

@Component({
    templateUrl: 'app/projects/projects-list.component.html',
    styleUrls: ['app/projects/projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
    pageTitle: string = 'Projects List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    listFilter: string = '';
    errorMessage: string;
    projects: IProject[];

    constructor(private _projectService: ProjectService) {

    }

    toggleDetails(project: IProjectListItem): void {
        project.showDetails = !project.showDetails;
    }

    ngOnInit(): void {
           this._projectService.getProjects()
                     .subscribe(
                       projects => this.projects = <IProjectListItem[]>projects,
                       error =>  this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Projects List: ' + message;
    }
}
