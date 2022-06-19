import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TheHeaderComponent } from './the-header/the-header.component';
import { ViewTogglerComponent } from './view-toggler/view-toggler.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TheHeaderComponent, ViewTogglerComponent],
  exports: [TheHeaderComponent, ViewTogglerComponent],
})
export class LayoutsModule {}
