import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import type { IMovie } from '@shared/models/movie';

@Component({
  selector: 'imdb-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent {
  @Input() movie!: IMovie;

  get movieDateRange(): string {
    const { startYear, endYear } = this.movie;

    return endYear === '\\N' ? startYear : `${startYear} - ${endYear}`;
  }
}
