import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { jsonArray } from './data';

import type { IMovie } from '@shared/models/movie';
import type { PageEvent } from '@angular/material/paginator';

type SearchViewMode = 'list' | 'thumbnail';
type NumberOfItemsOptions = 5 | 10 | 20 | 30 | 50;

@Component({
  selector: 'imdb-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {
  zeroBasedCurrentPage = 0;
  viewMode: SearchViewMode = 'list';
  numberOfItems: NumberOfItemsOptions = 10;
  numberOfItemsOptions: NumberOfItemsOptions[] = [5, 10, 20, 30, 50];

  private readonly _allMovies: IMovie[] = jsonArray.map((movie) => ({
    ...movie,
    titleType: movie.titleType as 'short' | 'movie',
    isAdult: movie.isAdult === '0' ? false : true,
    runtimeMinutes: parseInt(movie.runtimeMinutes),
    genres: movie.genres.split(','),
  }));

  movies: IMovie[] = [];

  get isList(): boolean {
    return this.viewMode === 'list';
  }

  get numberOfMovies(): number {
    return this._allMovies.length;
  }

  ngOnInit(): void {
    if (this._allMovies?.length) {
      this.updateList({
        pageIndex: this.zeroBasedCurrentPage,
        pageSize: this.numberOfItems,
        length: this.numberOfMovies,
      });
    }
  }

  toggleViewMode(): void {
    const isList = this.viewMode === 'list';
    this.viewMode = isList ? 'thumbnail' : 'list';
  }

  updateList(newPageEvent: PageEvent): void {
    this.updateCurrentPage(newPageEvent.pageIndex);
    this.updateNumberOfItems(
      newPageEvent.pageSize as NumberOfItemsOptions,
    );
    this.updateMovies();
  }

  updateCurrentPage(currentPage: number): void {
    this.zeroBasedCurrentPage = currentPage;
  }

  updateNumberOfItems(currentPage: NumberOfItemsOptions): void {
    this.numberOfItems = currentPage;
  }

  updateMovies(): void {
    const start = this.zeroBasedCurrentPage * this.numberOfItems;
    const end = start + this.numberOfItems;
    const paginatedMovies = this._allMovies.slice(start, end);

    this.movies = paginatedMovies;
  }
}
