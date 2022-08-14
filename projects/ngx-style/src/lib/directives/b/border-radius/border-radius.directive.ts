import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[brrad]'
})
export class BorderRadiusDirective implements OnInit, OnChanges {

  @Input()
  brrad = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.borderRadius = this.brrad;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.borderRadius = changes['brrad'].currentValue;
  }
}
