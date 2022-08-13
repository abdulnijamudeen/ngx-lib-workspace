import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[fxd]'
})
export class FlexDirectionDirective implements OnInit, OnChanges {

  @Input()
  fxd = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.flexDirection = this.fxd;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.flexDirection = changes['fxd'].currentValue;
  }
}
