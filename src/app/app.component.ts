import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'imdb-root',
  templateUrl: './app.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'movie-app';
}
