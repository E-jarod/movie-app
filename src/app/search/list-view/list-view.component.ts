import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import type { IMovie } from '@shared/models/movie';

@Component({
  selector: 'imdb-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListViewComponent {
  @Input() movies: IMovie[] = [];
}
