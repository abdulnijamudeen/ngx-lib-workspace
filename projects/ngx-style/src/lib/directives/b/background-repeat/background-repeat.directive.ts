import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[bgr]'
})
export class BackgroundRepeatDirective implements OnInit, OnChanges {

  @Input()
  bgr = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.backgroundRepeat = this.bgr;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.backgroundRepeat = changes['bgr'].currentValue;
  }
}
