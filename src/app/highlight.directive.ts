import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private element: ElementRef) {
    this.element.nativeElement.classList.add('highlighted');
  }

  @HostListener('click')
  toggle() {
    this.element.nativeElement.classList.toggle('highlighted');
  }
}
