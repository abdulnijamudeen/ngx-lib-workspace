import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[fxg]'
})
export class FlexGrowDirective implements OnInit, OnChanges {

  @Input()
  fxg = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.flexGrow = this.fxg;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.flexGrow = changes['fxg'].currentValue;
  }
}
