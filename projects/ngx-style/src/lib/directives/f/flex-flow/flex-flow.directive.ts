import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[fxf]'
})
export class FlexFlowDirective implements OnInit, OnChanges {

  @Input()
  fxf = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.flexFlow = this.fxf;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.flexFlow = changes['fxf'].currentValue;
  }
}
