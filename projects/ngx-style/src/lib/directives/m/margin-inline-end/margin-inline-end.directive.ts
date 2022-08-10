import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[mxe]'
})
export class MarginInlineEndDirective implements OnInit, OnChanges {

  @Input()
  mxe = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.marginInlineEnd = this.mxe;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.marginInlineEnd = changes['mxe'].currentValue;
  }
}
