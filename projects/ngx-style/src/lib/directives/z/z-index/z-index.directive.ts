import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[zi]'
})
export class ZIndexDirective implements OnInit, OnChanges {

  @Input()
  zi = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.zIndex = this.zi;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.zIndex = changes['zi'].currentValue;
  }
}
