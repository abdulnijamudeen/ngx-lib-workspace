import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[js]'
})
export class JustifySelfDirective implements OnInit, OnChanges {

  @Input()
  js = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.justifySelf = this.js;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.justifySelf = changes['js'].currentValue;
  }
}
