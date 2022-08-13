import { FontWeightDirective } from './directives/f/font-weight/font-weight.directive';
import { FontStyleDirective } from './directives/f/font-style/font-style.directive';
import { FontSizeDirective } from './directives/f/font-size/font-size.directive';
import { FontFamilyDirective } from './directives/f/font-family/font-family.directive';
import { FontDirective } from './directives/f/font/font.directive';
import { FlexWrapDirective } from './directives/f/flex-wrap/flex-wrap.directive';
import { FlexShrinkDirective } from './directives/f/flex-shrink/flex-shrink.directive';
import { FlexGrowDirective } from './directives/f/flex-grow/flex-grow.directive';
import { FlexFlowDirective } from './directives/f/flex-flow/flex-flow.directive';
import { FlexDirectionDirective } from './directives/f/flex-direction/flex-direction.directive';
import { FlexBasisDirective } from './directives/f/flex-basis/flex-basis.directive';
import { FlexDirective } from './directives/f/flex/flex.directive';
import { ZIndexDirective } from './directives/z/z-index/z-index.directive';
import { PaddingTopDirective } from './directives/p/padding-top/padding-top.directive';
import { PaddingRightDirective } from './directives/p/padding-right/padding-right.directive';
import { PaddingLeftDirective } from './directives/p/padding-left/padding-left.directive';
import { PaddingInlineStartDirective } from './directives/p/padding-inline-start/padding-inline-start.directive';
import { PaddingInlineEndDirective } from './directives/p/padding-inline-end/padding-inline-end.directive';
import { PaddingInlineDirective } from './directives/p/padding-inline/padding-inline.directive';
import { PaddingBottomDirective } from './directives/p/padding-bottom/padding-bottom.directive';
import { PaddingBlockStartDirective } from './directives/p/padding-block-start/padding-block-start.directive';
import { PaddingBlockEndDirective } from './directives/p/padding-block-end/padding-block-end.directive';
import { PaddingBlockDirective } from './directives/p/padding-block/padding-block.directive';
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
  FlexDirective,
  FlexBasisDirective,
  FlexDirectionDirective,
  FlexFlowDirective,
  FlexGrowDirective,
  FlexShrinkDirective,
  FlexWrapDirective,
  FontDirective,
  FontFamilyDirective,
  FontSizeDirective,
  FontStyleDirective,
  FontWeightDirective,
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
  PaddingBlockDirective,
  PaddingBlockEndDirective,
  PaddingBlockStartDirective,
  PaddingBottomDirective,
  PaddingInlineDirective,
  PaddingInlineEndDirective,
  PaddingInlineStartDirective,
  PaddingLeftDirective,
  PaddingRightDirective,
  PaddingTopDirective,
  WidthDirective,
  ZIndexDirective
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
