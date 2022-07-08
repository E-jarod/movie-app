import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { SearchService } from '@shared/services/search/search.service';

@Component({
  selector: 'imdb-the-header',
  templateUrl: './the-header.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TheHeaderComponent implements OnInit {
  searchText = new FormControl('');

  constructor(private readonly _searchService: SearchService) {}

  ngOnInit(): void {
    this.searchText.valueChanges.subscribe(() => {
      this._searchService.searchText = this.searchText.value ?? '';
    });
  }
}
