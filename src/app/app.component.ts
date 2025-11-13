import { Component, HostListener, AfterViewInit } from '@angular/core';
import { fakeContent, ContentItem } from './data';  // Make sure data.ts exists

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  featured: ContentItem = fakeContent[0];
  categories: string[] = ['Popular', 'Trending', 'New'];

  getItemsByCategory(category: string): ContentItem[] {
    return fakeContent.filter(item => item.category === category);
  }

  // ⬇️ D-Pad navigation support
  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    const focusable = Array.from(
      document.querySelectorAll('a, button, input, .card, [tabindex]:not([tabindex="-1"])')
    ) as HTMLElement[];

    if (!focusable.length) return;
    const current = document.activeElement as HTMLElement;
    const currentIndex = focusable.indexOf(current);
    let nextIndex = currentIndex;

    switch (event.key) {
      case 'ArrowUp':
        nextIndex = currentIndex - 5; // adjust depending on number of items per row
        break;
      case 'ArrowDown':
        nextIndex = currentIndex + 5;
        break;
      case 'ArrowLeft':
        nextIndex = currentIndex - 1;
        break;
      case 'ArrowRight':
        nextIndex = currentIndex + 1;
        break;
      case 'Enter':
        current?.click();
        return;
      case 'Backspace':
      case 'Escape':
        history.back();
        return;
      default:
        return;
    }

    // Clamp focus index
    nextIndex = Math.max(0, Math.min(nextIndex, focusable.length - 1));

    // Move focus to new element
    const nextEl = focusable[nextIndex];
    if (nextEl) {
      nextEl.focus();
      nextEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }

  ngAfterViewInit() {
    // Focus the first focusable element once the UI has rendered
    setTimeout(() => {
      const first = document.querySelector('[tabindex]') as HTMLElement;
      if (first) first.focus();
    }, 500);
  }
}
