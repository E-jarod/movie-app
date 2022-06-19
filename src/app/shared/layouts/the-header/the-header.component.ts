import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'imdb-the-header',
  templateUrl: './the-header.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TheHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
