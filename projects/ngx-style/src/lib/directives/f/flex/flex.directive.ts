import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[fx]'
})
export class FlexDirective implements OnInit, OnChanges {

  @Input()
  fx = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.flex = this.fx;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.flex = changes['fx'].currentValue;
  }
}
