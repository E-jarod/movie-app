import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchService } from '@shared/services/search/search.service';

import { TheHeaderComponent } from './the-header/the-header.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [TheHeaderComponent],
  providers: [SearchService],
  exports: [TheHeaderComponent],
})
export class LayoutsModule {}
