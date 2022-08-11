import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[pxe]'
})
export class PaddingInlineEndDirective implements OnInit, OnChanges {

  @Input()
  pxe = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.paddingInlineEnd = this.pxe;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.paddingInlineEnd = changes['pxe'].currentValue;
  }
}
