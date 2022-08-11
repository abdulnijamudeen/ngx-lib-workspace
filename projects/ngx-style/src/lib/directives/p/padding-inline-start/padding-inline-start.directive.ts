import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[pxs]'
})
export class PaddingInlineStartDirective implements OnInit, OnChanges {

  @Input()
  pxs = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.paddingInlineStart = this.pxs;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.paddingInlineStart = changes['pxs'].currentValue;
  }
}
