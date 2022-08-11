import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[pys]'
})
export class PaddingBlockStartDirective implements OnInit, OnChanges {

  @Input()
  pys = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.paddingBlockStart = this.pys;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.paddingBlockStart = changes['pys'].currentValue;
  }
}
