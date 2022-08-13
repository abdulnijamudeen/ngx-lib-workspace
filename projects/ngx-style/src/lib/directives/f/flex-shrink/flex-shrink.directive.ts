import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[fxs]'
})
export class FlexShrinkDirective implements OnInit, OnChanges {

  @Input()
  fxs = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.flexShrink = this.fxs;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.flexShrink = changes['fxs'].currentValue;
  }
}
