import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[minw]'
})
export class MinWidthDirective implements OnInit, OnChanges {

  @Input()
  minw = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.minWidth = this.minw;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.minWidth = changes['minw'].currentValue;
  }
}
