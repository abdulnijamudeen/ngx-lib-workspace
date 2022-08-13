import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[as]'
})
export class AlignSelfDirective implements OnInit, OnChanges {

  @Input()
  as = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.alignSelf = this.as;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.alignSelf = changes['as'].currentValue;
  }
}
