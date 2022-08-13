import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[maxw]'
})
export class MaxWidthDirective implements OnInit, OnChanges {

  @Input()
  maxw = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.maxWidth = this.maxw;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.maxWidth = changes['maxw'].currentValue;
  }
}
