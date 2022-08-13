import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[fxb]'
})
export class FlexBasisDirective implements OnInit, OnChanges {

  @Input()
  fxb = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.flexBasis = this.fxb;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.flexBasis = changes['fxb'].currentValue;
  }
}
