import { Component } from '@angular/core';
import { fakeContent, ContentItem } from './data';  // Ensure data.ts exists in the same folder with the fake data

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  featured: ContentItem = fakeContent[0];  // Featured item for hero banner
  categories: string[] = ['Popular', 'Trending', 'New'];  // List of categories for rows

  getItemsByCategory(category: string): ContentItem[] {
    return fakeContent.filter(item => item.category === category);  // Filter items by category
  }
}