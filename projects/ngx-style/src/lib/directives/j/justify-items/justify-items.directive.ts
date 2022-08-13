import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[ji]'
})
export class JustifyItemsDirective implements OnInit, OnChanges {

  @Input()
  ji = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.justifyItems = this.ji;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.justifyItems = changes['ji'].currentValue;
  }
}
