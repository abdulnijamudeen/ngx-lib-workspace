import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[brr]'
})
export class BorderRightDirective implements OnInit, OnChanges {

  @Input()
  brr = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.borderRight = this.brr;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.borderRight = changes['brr'].currentValue;
  }
}
