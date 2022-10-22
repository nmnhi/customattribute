import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]',
})
export class BetterhighlightDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @Input() defaultColor: string = 'transparent';
  @Input('appBetterhighlight') highlightColor: string = 'pink';

  @HostBinding('style.backgroundColor') background: string = 'transparent';
  @HostBinding('style.border') border: string = 'none';

  ngOnInit() {
    this.background = this.defaultColor;
  }

  @HostListener('mouseenter') mouseenter() {
    this.background = this.highlightColor;
    this.border = 'red 2px solid';
  }
  @HostListener('mouseleave') mouseleave() {
    this.background = this.defaultColor;
    this.border = 'none';
  }
}
