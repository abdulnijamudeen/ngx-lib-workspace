import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[jc]'
})
export class JustifyContentDirective implements OnInit, OnChanges {

  @Input()
  jc = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.justifyContent = this.jc;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.justifyContent = changes['jc'].currentValue;
  }
}
