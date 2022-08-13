import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[minh]'
})
export class MinHeightDirective implements OnInit, OnChanges {

  @Input()
  minh = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.minHeight = this.minh;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.minHeight = changes['minh'].currentValue;
  }
}
