import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'imdb-view-toggler',
  templateUrl: './view-toggler.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewTogglerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
