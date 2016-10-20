import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'cm-coverage-pill',
    templateUrl: 'app/shared/coverage.pill.component.html',
    styleUrls: ['app/shared/coverage.pill.component.css']
})
export class CoveragePillComponent implements OnChanges{
    @Input() percent: number;
    colorClass: string;
    
    ngOnChanges(): void {
        this.colorClass = this.matchColorRule(this.percent);
    }

    private statusColorsRules = [
        { condition: ((p:number) => p >= 70), colorClass: 'high' },
        { condition: ((p:number) => p >= 30 && p < 70), colorClass: 'medium' },
        { condition: ((p:number) => p >   0 && p < 30), colorClass: 'low' },
        { condition: ((p:number) => p === 0), colorClass: 'none' }
    ];

    matchColorRule(percent: number): string {
        return this.statusColorsRules
            .filter(rule => rule.condition(percent))
            [0].colorClass;
    }
}
