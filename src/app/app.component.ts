import { Component } from '@angular/core';

@Component({
    selector: 'cm-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand' [routerLink]="['/']">{{appTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/projects']">Projects List</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
     `
})
export class AppComponent {
    appTitle: string = 'Coverage Monitoring';
}
