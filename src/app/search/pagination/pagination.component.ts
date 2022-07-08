// import type { SimpleChanges, OnChanges } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'imdb-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  @Output() updateCurrentPageEvent = new EventEmitter<number>();

  private _currentPage = 1;
  private _pages = [1];
  private _max!: number;

  @Input() min = 1;
  @Input() maxPages = 0;

  get max(): number {
    return this._max;
  }
  @Input() set max(max: number) {
    this._max = max;
    this._pages = [...new Array(max).keys()].map((_, i) => i + 1);
  }

  get currentPage(): number {
    return this._currentPage;
  }
  @Input() set currentPage(inputPage: number) {
    const isInRange = inputPage >= 1 && inputPage <= this._max;

    if (!isInRange) {
      // eslint-disable-next-line no-console
      // console.error(isInRange);
      return;
    }

    this._currentPage = inputPage;
    this.updateCurrentPageEvent.emit(inputPage);
  }

  get pages(): number[] {
    return this._pages;
  }

  updateCurrentPage(clickedPage: number): void {
    this.currentPage = clickedPage;
  }
}
