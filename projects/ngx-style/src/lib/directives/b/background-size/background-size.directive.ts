import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[bgs]'
})
export class BackgroundSizeDirective implements OnInit, OnChanges {

  @Input()
  bgs = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.backgroundSize = this.bgs;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.backgroundSize = changes['bgs'].currentValue;
  }
}
