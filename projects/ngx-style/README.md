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
