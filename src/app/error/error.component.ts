import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'imdb-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
