import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';

import { LayoutsModule } from '@shared/layouts/layouts.module';
import { SearchService } from '@shared/services/search/search.service';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { ListViewComponent } from './list-view/list-view.component';
import { ThumbnailViewComponent } from './thumbnail-view/thumbnail-view.component';
import { ThumbnailItemComponent } from './thumbnail-item/thumbnail-item.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    LayoutsModule,
    MatPaginatorModule,
  ],
  declarations: [
    SearchComponent,
    ListViewComponent,
    ThumbnailViewComponent,
    ThumbnailItemComponent,
    ListItemComponent,
  ],
  providers: [SearchService],
})
export class SearchModule {}
