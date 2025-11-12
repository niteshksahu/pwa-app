import { Component, Input } from '@angular/core';
import { ContentItem } from '../data';

@Component({
  selector: 'app-content-row',
  templateUrl: './content-row.component.html',
  styleUrls: ['./content-row.component.css']
})
export class ContentRowComponent {
  @Input() items: ContentItem[] = [];
}