import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[py]'
})
export class PaddingBlockDirective implements OnInit, OnChanges {

  @Input()
  py = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.paddingBlock = this.py;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.paddingBlock = changes['py'].currentValue;
  }
}
