import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[fntf]'
})
export class FontFamilyDirective implements OnInit, OnChanges {

  @Input()
  fntf = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.fontFamily = this.fntf;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.fontFamily = changes['fntf'].currentValue;
  }
}
