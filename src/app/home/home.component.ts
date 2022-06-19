import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'imdb-home',
  templateUrl: './home.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
