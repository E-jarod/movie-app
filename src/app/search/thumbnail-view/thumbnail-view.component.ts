import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import type { IMovie } from '@shared/models/movie';

@Component({
  selector: 'imdb-thumbnail-view',
  templateUrl: './thumbnail-view.component.html',
  styleUrls: ['./thumbnail-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThumbnailViewComponent {
  @Input() movies: IMovie[] = [];
}
