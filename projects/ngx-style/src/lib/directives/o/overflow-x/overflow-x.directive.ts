import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[ofx]'
})
export class OverflowXDirective implements OnInit, OnChanges {

  @Input()
  ofx = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.overflowX = this.ofx;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.overflowX = changes['ofx'].currentValue;
  }
}
