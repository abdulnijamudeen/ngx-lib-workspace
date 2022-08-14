import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[bgp]'
})
export class BackgroundPositionDirective implements OnInit, OnChanges {

  @Input()
  bgp = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.backgroundPosition = this.bgp;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.backgroundPosition = changes['bgp'].currentValue;
  }
}
