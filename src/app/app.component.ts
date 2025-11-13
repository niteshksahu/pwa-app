import { Component, HostListener, AfterViewInit } from '@angular/core';
import { fakeContent, ContentItem } from './data';

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

  // ✅ single listener for D-pad + debug
  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    console.log('KEY PRESSED:', event.key);
    alert('Pressed: ' + event.key); // for testing on TV

    const focusable = Array.from(
      document.querySelectorAll('a, button, input, .card, [tabindex]:not([tabindex="-1"])')
    ) as HTMLElement[];

    if (!focusable.length) return;

    const current = document.activeElement as HTMLElement;
    const currentIndex = focusable.indexOf(current);
    let nextIndex = currentIndex;

    switch (event.key) {
      case 'ArrowUp':
        nextIndex = currentIndex - 5; // adjust per your layout
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

    nextIndex = Math.max(0, Math.min(nextIndex, focusable.length - 1));
    const nextEl = focusable[nextIndex];
    if (nextEl) {
      nextEl.focus();
      nextEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }

  ngAfterViewInit() {
    // give initial focus after render
    setTimeout(() => {
      const first = document.querySelector('[tabindex]') as HTMLElement;
      if (first) first.focus();
    }, 500);
  }
}
