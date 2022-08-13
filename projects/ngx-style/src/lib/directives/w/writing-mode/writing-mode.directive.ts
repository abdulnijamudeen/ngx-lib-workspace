import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[wm]'
})
export class WritingModeDirective implements OnInit, OnChanges {

  @Input()
  wm = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.writingMode = this.wm;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.writingMode = changes['wm'].currentValue;
  }
}
