# Webpack 5 react stylus router template [WIP]

### issues:
- https://github.com/webpack-contrib/css-loader/issues/1246
- https://github.com/johnagan/clean-webpack-plugin/issues/194
- https://github.com/tomchentw/unused-files-webpack-plugin/issues/39
- https://github.com/jantimon/html-webpack-plugin/issues/1527
- https://github.com/webpack/webpack-dev-server/issues/2758 (hot reload + browserslist)

Don't forget change next meta tags value, cuz it's just example.
```js
    <title>Web-application</title>
    <meta name="description" content="Web-application boilerplate without state-managers and middlewares">
    <meta property="og:title" content="Web-application" />
    <meta property="og:description" content="Web-application boilerplate without state-managers and middlewares" />
    <meta property="og:locale" content="ru_RU" />
    <meta property="og:image" content="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
    <link rel="canonical" href="https://www.google.com" />
```
Example of font loading (not google fonts):

**1) html**

```html
<link
    rel="preload"
    href="https://linkToFont.com/YourFontNameHere-medium.woff2"
    as="font"
    type="font/woff2"
    crossorigin
>
<link
    rel="preload"
    href="https://linkToFont.com/YourFontNameHere-regular.woff2"
    as="font"
    type="font/woff2"
    crossorigin
>
```
**2) stylus**
```stylus
@font-face
  font-family 'YourFontNameHere'
  src url('https://linkToFont.com/YourFontNameHere-medium.woff2') format('woff2')
  font-weight 500
  font-style normal
  font-display swap // @stylint ignore

@font-face
  font-family 'YourFontNameHere'
  src url('https://linkToFont.com/YourFontNameHere-regular.woff2') format('woff2')
  font-weight 400
  font-style normal
  font-display swap // @stylint ignore
```

### for questions use telegram: @jquery_dlya_slabih
