import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[mb]'
})
export class MarginBottomDirective implements OnInit, OnChanges {

  @Input()
  mb = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.marginBottom = this.mb;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.marginBottom = changes['mb'].currentValue;
  }
}
