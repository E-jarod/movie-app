import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'imdb-thumbnail-item',
  templateUrl: './thumbnail-item.component.html',
  styleUrls: ['./thumbnail-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThumbnailItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
