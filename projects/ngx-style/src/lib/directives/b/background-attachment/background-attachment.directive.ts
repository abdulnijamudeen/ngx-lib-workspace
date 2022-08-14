import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[bgatt]'
})
export class BackgroundAttachmentDirective implements OnInit, OnChanges {

  @Input()
  bgatt = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.backgroundAttachment = this.bgatt;
  }

  ngOnChanges(changes: SimpleChanges): void {
    (this.el.nativeElement as HTMLElement).style.backgroundAttachment = changes['bgatt'].currentValue;
  }
}
