import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[fntw]'
})
export class FontWeightDirective implements OnInit, OnChanges {

  @Input()
  fntw = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.fontWeight = this.fntw;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.fontWeight = changes['fntw'].currentValue;
  }
}
