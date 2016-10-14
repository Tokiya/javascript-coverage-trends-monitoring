import {  PipeTransform, Pipe } from '@angular/core';
import { IProject } from './project';

@Pipe({
    name: 'projectFilter'
})
export class ProjectFilterPipe implements PipeTransform {

    transform(value: IProject[], filter: string): IProject[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((project: IProject) =>
            project.projectName.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}
