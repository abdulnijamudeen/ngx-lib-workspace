import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[bgi]'
})
export class BackgroundImageDirective implements OnInit, OnChanges {

  @Input()
  bgi = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.backgroundImage = this.bgi;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.backgroundImage = changes['bgi'].currentValue;
  }
}
