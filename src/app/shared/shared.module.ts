import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarComponent } from './star.component';
import { CoveragePillComponent } from './coverage.pill.component';

@NgModule({
  imports: [ CommonModule ],
  exports : [
    CommonModule
    , StarComponent
    , CoveragePillComponent
  ],
  declarations: [
    StarComponent
    , CoveragePillComponent
  ],
})
export class SharedModule { }
