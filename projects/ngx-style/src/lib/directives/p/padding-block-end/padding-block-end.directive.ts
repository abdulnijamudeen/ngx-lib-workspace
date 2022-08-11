import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[pye]'
})
export class PaddingBlockEndDirective implements OnInit, OnChanges {

  @Input()
  pye = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.paddingBlockEnd = this.pye;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.paddingBlockEnd = changes['pye'].currentValue;
  }
}
