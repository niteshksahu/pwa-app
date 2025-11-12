import { Component, Input } from '@angular/core';
import { ContentItem } from '../data';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.css']
})
export class HeroBannerComponent {
  @Input() item!: ContentItem;
}