import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[my]'
})
export class MarginBlockDirective implements OnInit, OnChanges {

  @Input()
  my = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.marginBlock = this.my;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.marginBlock = changes['my'].currentValue;
  }
}
