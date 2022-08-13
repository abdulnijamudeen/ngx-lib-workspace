import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[ac]'
})
export class AlignContentDirective implements OnInit, OnChanges {

  @Input()
  ac = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.alignContent = this.ac;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.alignContent = changes['ac'].currentValue;
  }
}
