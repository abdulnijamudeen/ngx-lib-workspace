import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[bxs]'
})
export class BoxShadowDirective implements OnInit, OnChanges {

  @Input()
  bxs = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.boxShadow = this.bxs;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.boxShadow = changes['bxs'].currentValue;
  }
}
