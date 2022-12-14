# NgxStyle

NgxStyle is an Angular component library that gives you CSS directives for your application

## Install

```
npm install ngx-style --save
```

## Import

```typescript
...
import { NgxStyleModule } from 'ngx-style';
...

@NgModule({
  ...
  imports: [
    ...
    NgxStyleModule,
  ],
  ...
})
export class AppModule { }

```

## Usage

```html
<div [w]="'20%'">
  <p>content goes here.</p>
</div>
```

```html
<div w="50rem">
  <p>content goes here.</p>
  <div [w]="'40%'" ml="50px">
    <p>content goes here.</p>
  </div>
</div>
```

```html
<div m="2rem 20% 32px auto">
  <p>content goes here.</p>
  <div ml="3em">
    <p>content goes here.</p>
  </div>
</div>
```

## CSS Directives

| CSS Properties          | Directives|
| ---------------         |:---------:|
| align-content           | ac        |
| align-items             | ai        |
| align-self              | as        |
| background              | bg        |
| background-attachment   | bgatt     |
| background-color        | bgc       |
| background-image        | bgi       |
| background-position     | bgp       |
| background-repeat       | bgr       |
| background-size         | bgs       |
| border                  | br        |
| border-bottom           | brb       |
| border-color            | brc       |
| border-left             | brl       |
| border-radius           | brrad     |
| border-right            | brr       |
| border-style            | brs       |
| border-top              | brt       |
| border-width            | brw       |
| bottom                  | b         |
| box-shadow              | bxs       |
| color                   | c         |
| cursor                  | cr        |
| display                 | d         |
| flex                    | fx        |
| flex-basis              | fxb       |
| flex-direction          | fxd       |
| flex-flow               | fxf       |
| flex-grow               | fxg       |
| flex-shrink             | fxs       |
| flex-wrap               | fxw       |
| float                   | flt       |
| font                    | fnt       |
| font-family             | fntf      |
| font-size               | fnts      |
| font-style              | fntstl    |
| font-weight             | fntw      |
| height                  | h         |
| justify-content         | jc        |
| justify-items           | ji        |
| justify-self            | js        |
| left                    | l         |
| margin                  | m         |
| margin-block            | my        |
| margin-block-end        | mye       |
| margin-block-start      | mys       |
| margin-bottom           | mb        |
| margin-inline           | mx        |
| margin-inline-end       | mxe       |
| margin-inline-start     | mxs       |
| margin-left             | ml        |
| margin-right            | mr        |
| margin-top              | mt        |
| max-height              | maxh      |
| max-width               | maxw      |
| min-height              | minh      |
| min-width               | minw      |
| overflow                | of        |
| overflow-x              | ofx       |
| overflow-y              | ofy       |
| padding                 | p         |
| padding-block           | py        |
| padding-block-end       | pye       |
| padding-block-start     | pys       |
| padding-bottom          | pb        |
| padding-inline          | px        |
| padding-inline-end      | pxe       |
| padding-inline-start    | pxs       |
| padding-left            | pl        |
| padding-right           | pr        |
| padding-top             | pt        |
| position                | pos       |
| right                   | r         |
| text-align              | ta        |
| text-decoration         | td        |
| text-shadow             | ts        |
| top                     | t         |
| vertical-align          | va        |
| width                   | w         |
| writing-mode            | wm        |
| z-index                 | zi        |


## License

Uses MIT licensed code from [Angular](https://github.com/angular/angular)

MIT License

Copyright 2022 Mohideen Nizamudeen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
