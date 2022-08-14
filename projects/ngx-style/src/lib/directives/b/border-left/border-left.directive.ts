import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[brl]'
})
export class BorderLeftDirective implements OnInit, OnChanges {

  @Input()
  brl = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.borderLeft = this.brl;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.borderLeft = changes['brl'].currentValue;
  }
}
