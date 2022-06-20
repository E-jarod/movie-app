import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TheHeaderComponent } from './the-header/the-header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TheHeaderComponent],
  exports: [TheHeaderComponent],
})
export class LayoutsModule {}
