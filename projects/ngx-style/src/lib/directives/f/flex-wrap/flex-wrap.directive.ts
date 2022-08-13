import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[fxw]'
})
export class FlexWrapDirective implements OnInit, OnChanges {

  @Input()
  fxw = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.flexWrap = this.fxw;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.flexWrap = changes['fxw'].currentValue;
  }
}
