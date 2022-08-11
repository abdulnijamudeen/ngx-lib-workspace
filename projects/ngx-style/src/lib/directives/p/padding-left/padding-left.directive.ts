import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[pl]'
})
export class PaddingLeftDirective implements OnInit, OnChanges {

  @Input()
  pl = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.paddingLeft = this.pl;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.paddingLeft = changes['pl'].currentValue;
  }
}
