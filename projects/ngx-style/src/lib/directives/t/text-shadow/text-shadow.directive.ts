import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[ts]'
})
export class TextShadowDirective implements OnInit, OnChanges {

  @Input()
  ts = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.textShadow = this.ts;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.textShadow = changes['ts'].currentValue;
  }
}
