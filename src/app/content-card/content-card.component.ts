import { Component, Input } from '@angular/core';
import { ContentItem } from '../data';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent {
  @Input() item!: ContentItem;
}