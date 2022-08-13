import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[ofy]'
})
export class OverflowYDirective implements OnInit, OnChanges {

  @Input()
  ofy = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.overflowY = this.ofy;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.overflowY = changes['ofy'].currentValue;
  }
}
