import { MarginTopDirective } from './directives/m/margin-top/margin-top.directive';
import { MarginRightDirective } from './directives/m/margin-right/margin-right.directive';
import { MarginLeftDirective } from './directives/m/margin-left/margin-left.directive';
import { MarginInlineStartDirective } from './directives/m/margin-inline-start/margin-inline-start.directive';
import { MarginInlineDirective } from './directives/m/margin-inline/margin-inline.directive';
import { MarginBottomDirective } from './directives/m/margin-bottom/margin-bottom.directive';
import { MarginBlockStartDirective } from './directives/m/margin-block-start/margin-block-start.directive';
import { MarginBlockEndDirective } from './directives/m/margin-block-end/margin-block-end.directive';
import { MarginBlockDirective } from './directives/m/margin-block/margin-block.directive';
import { PaddingDirective } from './directives/p/padding/padding.directive';
import { MarginDirective } from './directives/m/margin/margin.directive';
import { HeightDirective } from './directives/h/height/height.directive';
import { NgModule } from '@angular/core';
import { WidthDirective } from './directives/w/width/width.directive';
import { MarginInlineEndDirective } from './directives/m/margin-inline-end/margin-inline-end.directive';

const STYLE_DIRECTIVE = [
  HeightDirective,
  MarginDirective,
  MarginBlockDirective,
  MarginBlockEndDirective,
  MarginBlockStartDirective,
  MarginBottomDirective,
  MarginInlineDirective,
  MarginInlineEndDirective,
  MarginInlineStartDirective,
  MarginLeftDirective,
  MarginRightDirective,
  MarginTopDirective,
  PaddingDirective,
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
