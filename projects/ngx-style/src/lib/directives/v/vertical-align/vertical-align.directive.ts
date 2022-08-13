import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[va]'
})
export class VerticalAlignDirective implements OnInit, OnChanges {

  @Input()
  va = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.verticalAlign = this.va;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.verticalAlign = changes['va'].currentValue;
  }
}
