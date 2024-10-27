import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {
  @Input() background: string = 'rgb(182,18,53)';
  @Input() hoverBackground: string = 'rgb(124,13,37)';
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.background = this.background;
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.background = this.hoverBackground;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.background = this.background;
  }

}
