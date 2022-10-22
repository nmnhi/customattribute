import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[setBackground]',
})
export class SetBackgroundDirective {
  constructor(private element: ElementRef) {
    // element.nativeElement.style.backgroundColor = '#C8E6C9';
    this.element = element;
  }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = '#C8E6C9';
  }
}
