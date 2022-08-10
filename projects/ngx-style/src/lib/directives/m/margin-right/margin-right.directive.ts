import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[mr]'
})
export class MarginRightDirective implements OnInit, OnChanges {

  @Input()
  mr = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.marginRight = this.mr;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.marginRight = changes['mr'].currentValue;
  }
}
