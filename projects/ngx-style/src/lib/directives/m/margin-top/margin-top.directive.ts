import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[mt]'
})
export class MarginTopDirective implements OnInit, OnChanges {

  @Input()
  mt = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.marginTop = this.mt;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.marginTop = changes['mt'].currentValue;
  }
}
