import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[brs]'
})
export class BorderStyleDirective implements OnInit, OnChanges {

  @Input()
  brs = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.borderStyle = this.brs;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.borderStyle = changes['brs'].currentValue;
  }
}
