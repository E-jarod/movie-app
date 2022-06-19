import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'imdb-error',
  templateUrl: './error.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
