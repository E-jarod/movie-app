import { ChangeDetectionStrategy, Component } from '@angular/core';

import { jsonArray } from './data';

import type { IMovie } from '@shared/models/movie';

type SearchViewMode = 'list' | 'thumbnail';

@Component({
  selector: 'imdb-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  viewMode: SearchViewMode = 'list';

  // readonly movies: IMovie[] = [
  //   {
  //     tconst: 'tt0000001',
  //     titleType: 'short',
  //     primaryTitle: 'Carmencita',
  //     originalTitle: 'Carmencita',
  //     isAdult: false,
  //     startYear: '1894',
  //     endYear: '\\N',
  //     runtimeMinutes: 1,
  //     genres: ['Documentary', 'Short'],
  //   },
  //   {
  //     tconst: 'tt0000013',
  //     titleType: 'short',
  //     primaryTitle: 'The Photographical Congress Arrives in Lyon',
  //     originalTitle: 'Le débarquement du congrès de photographie à Lyon',
  //     isAdult: false,
  //     startYear: '1895',
  //     endYear: '\\N',
  //     runtimeMinutes: 1,
  //     genres: ['Documentary', 'Short'],
  //   },
  // ];

  readonly movies: IMovie[] = jsonArray.map((e) => ({
    ...e,
    titleType: e.titleType as 'short' | 'movie',
    isAdult: e.isAdult === '0' ? false : true,
    runtimeMinutes: parseInt(e.runtimeMinutes),
    genres: e.genres.split(','),
  }));

  get isList(): boolean {
    return this.viewMode === 'list';
  }

  toggleViewMode(): void {
    this.viewMode = this.viewMode === 'list' ? 'thumbnail' : 'list';
  }
}
