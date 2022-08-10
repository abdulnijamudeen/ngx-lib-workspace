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
<div w="10rem">
  <p>content goes here.</p>
</div>
```

```html
<div [w]="'20%'">
  <p>content goes here.</p>
</div>
```

## CSS Directives

| CSS Properties      | Directives|
| ---------------     |:---------:|
| height              | h         |
| margin              | m         |
| margin-block        | my        |
| margin-block-end    | mye       |
| margin-block-start  | mys       |
| margin-bottom       | mb        |
| margin-inline       | mx        |
| margin-inline-end   | mxe       |
| margin-inline-start | mxs       |
| margin-left         | ml        |
| margin-right        | mr        |
| margin-top          | mt        |
| padding             | p         |
| width               | w         |

## License

Uses MIT licensed code from [Angular](https://github.com/angular/angular)

MIT License

Copyright 2022 Mohideen Nizamudeen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
