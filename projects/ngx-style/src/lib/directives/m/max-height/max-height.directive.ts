import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[maxh]'
})
export class MaxHeightDirective implements OnInit, OnChanges {

  @Input()
  maxh = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.maxHeight = this.maxh;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.maxHeight = changes['maxh'].currentValue;
  }
}
