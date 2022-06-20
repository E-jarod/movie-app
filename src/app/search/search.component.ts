import {
  ChangeDetectionStrategy,
  Component,
  type OnInit,
} from '@angular/core';

@Component({
  selector: 'imdb-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {
  ngOnInit(): void {}
}
