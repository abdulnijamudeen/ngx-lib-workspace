import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[mys]'
})
export class MarginBlockStartDirective implements OnInit, OnChanges {

  @Input()
  mys = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.marginBlockStart = this.mys;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.marginBlockStart = changes['mys'].currentValue;
  }
}
