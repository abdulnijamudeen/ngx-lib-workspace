import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[brw]'
})
export class BorderWidthDirective implements OnInit, OnChanges {

  @Input()
  brw = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.borderWidth = this.brw;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.borderWidth = changes['brw'].currentValue;
  }
}
