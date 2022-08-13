import { VerticalAlignDirective } from './directives/v/vertical-align/vertical-align.directive';
import { MinWidthDirective } from './directives/m/min-width/min-width.directive';
import { MinHeightDirective } from './directives/m/min-height/min-height.directive';
import { MaxWidthDirective } from './directives/m/max-width/max-width.directive';
import { MaxHeightDirective } from './directives/m/max-height/max-height.directive';
import { CursorDirective } from './directives/c/cursor/cursor.directive';
import { ColorDirective } from './directives/c/color/color.directive';
import { TextShadowDirective } from './directives/t/text-shadow/text-shadow.directive';
import { TextDecorationDirective } from './directives/t/text-decoration/text-decoration.directive';
import { TextAlignDirective } from './directives/t/text-align/text-align.directive';
import { PositionDirective } from './directives/p/position/position.directive';
import { OverflowYDirective } from './directives/o/overflow-y/overflow-y.directive';
import { OverflowXDirective } from './directives/o/overflow-x/overflow-x.directive';
import { OverflowDirective } from './directives/o/overflow/overflow.directive';
import { FloatDirective } from './directives/f/float/float.directive';
import { WritingModeDirective } from './directives/w/writing-mode/writing-mode.directive';
import { DisplayDirective } from './directives/d/display/display.directive';
import { JustifySelfDirective } from './directives/j/justify-self/justify-self.directive';
import { JustifyContentDirective } from './directives/j/justify-content/justify-content.directive';
import { AlignSelfDirective } from './directives/a/align-self/align-self.directive';
import { AlignItemsDirective } from './directives/a/align-items/align-items.directive';
import { AlignContentDirective } from './directives/a/align-content/align-content.directive';
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
import { JustifyItemsDirective } from './directives/j/justify-items/justify-items.directive';

const STYLE_DIRECTIVE = [
  AlignContentDirective,
  AlignItemsDirective,
  AlignSelfDirective,
  ColorDirective,
  CursorDirective,
  DisplayDirective,
  FlexDirective,
  FlexBasisDirective,
  FlexDirectionDirective,
  FlexFlowDirective,
  FlexGrowDirective,
  FlexShrinkDirective,
  FlexWrapDirective,
  FloatDirective,
  FontDirective,
  FontFamilyDirective,
  FontSizeDirective,
  FontStyleDirective,
  FontWeightDirective,
  HeightDirective,
  JustifyContentDirective,
  JustifyItemsDirective,
  JustifySelfDirective,
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
  MaxHeightDirective,
  MaxWidthDirective,
  MinHeightDirective,
  MinWidthDirective,
  OverflowDirective,
  OverflowXDirective,
  OverflowYDirective,
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
  PositionDirective,
  TextAlignDirective,
  TextDecorationDirective,
  TextShadowDirective,
  VerticalAlignDirective,
  WidthDirective,
  WritingModeDirective,
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
