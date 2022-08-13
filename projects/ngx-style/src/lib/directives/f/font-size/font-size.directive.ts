import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[fnts]'
})
export class FontSizeDirective implements OnInit, OnChanges {

  @Input()
  fnts = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.fontSize = this.fnts;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.fontSize = changes['fnts'].currentValue;
  }
}
