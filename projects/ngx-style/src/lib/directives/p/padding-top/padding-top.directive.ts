import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[pt]'
})
export class PaddingTopDirective implements OnInit, OnChanges {

  @Input()
  pt = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.paddingTop = this.pt;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.paddingTop = changes['pt'].currentValue;
  }
}
