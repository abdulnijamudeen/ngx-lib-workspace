import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[w]'
})
export class WidthDirective implements OnInit {

  @Input()
  w = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.style.width = this.w;
  }

}
