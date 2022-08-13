import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[fxs]'
})
export class FlexShrinkDirective implements OnInit, OnChanges {

  @Input()
  fxs = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.width = this.fxs;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.width = changes['fxs'].currentValue;
  }
}
