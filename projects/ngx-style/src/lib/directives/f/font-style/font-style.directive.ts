import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[fntstl]'
})
export class FontStyleDirective implements OnInit, OnChanges {

  @Input()
  fntstl = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.fontStyle = this.fntstl;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.fontStyle = changes['fntstl'].currentValue;
  }
}
