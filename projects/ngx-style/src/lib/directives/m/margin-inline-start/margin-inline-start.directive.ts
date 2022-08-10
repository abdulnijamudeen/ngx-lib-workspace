import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[mxs]'
})
export class MarginInlineStartDirective implements OnInit, OnChanges {

  @Input()
  mxs = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.marginInlineStart = this.mxs;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.marginInlineStart = changes['mxs'].currentValue;
  }
}
