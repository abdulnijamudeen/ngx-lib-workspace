import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[td]'
})
export class TextDecorationDirective implements OnInit, OnChanges {

  @Input()
  td = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.textDecoration = this.td;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.textDecoration = changes['td'].currentValue;
  }
}
