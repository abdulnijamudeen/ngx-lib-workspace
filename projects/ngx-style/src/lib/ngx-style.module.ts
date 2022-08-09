import { NgModule } from '@angular/core';
import { WidthDirective } from './directives/w/width/width.directive';

const STYLE_DIRECTIVE = [
  WidthDirective
];

@NgModule({
  declarations: [
    ...STYLE_DIRECTIVE
  ],
  exports: [
    ...STYLE_DIRECTIVE
  ]
})
export class NgxStyleModule { }
