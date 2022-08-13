import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[ai]'
})
export class AlignItemsDirective implements OnInit, OnChanges {

  @Input()
  ai = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.alignItems = this.ai;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.alignItems = changes['ai'].currentValue;
  }
}
