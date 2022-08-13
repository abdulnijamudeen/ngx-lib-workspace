import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[ta]'
})
export class TextAlignDirective implements OnInit, OnChanges {

  @Input()
  ta = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.textAlign = this.ta;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.textAlign = changes['ta'].currentValue;
  }
}
