import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[mye]'
})
export class MarginBlockEndDirective implements OnInit, OnChanges {

  @Input()
  mye = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.marginBlockEnd = this.mye;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.marginBlockEnd = changes['mye'].currentValue;
  }
}
