# panto-transformer-markdown
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url] [![Coverage Status][coveralls-image]][coveralls-url]

Markdown transformer for panto based on [markdown-it](http://npmjs.org/markdown-it).

```js
panto.loadTransformer('markdown');

panto.$('**/*.md').read().markdown({
    markdownOptions: {}
});
```

## options
 - markdownOptions: Object, see <https://markdown-it.github.io/markdown-it/#MarkdownIt.new>

[npm-url]: https://npmjs.org/package/panto-transformer-markdown
[downloads-image]: http://img.shields.io/npm/dm/panto-transformer-markdown.svg
[npm-image]: http://img.shields.io/npm/v/panto-transformer-markdown.svg
[travis-url]: https://travis-ci.org/pantojs/panto-transformer-markdown
[travis-image]: http://img.shields.io/travis/pantojs/panto-transformer-markdown.svg
[david-dm-url]:https://david-dm.org/pantojs/panto-transformer-markdown
[david-dm-image]:https://david-dm.org/pantojs/panto-transformer-markdown.svg
[david-dm-dev-url]:https://david-dm.org/pantojs/panto-transformer-markdown#type=dev
[david-dm-dev-image]:https://david-dm.org/pantojs/panto-transformer-markdown/dev-status.svg
[coveralls-image]:https://coveralls.io/repos/github/pantojs/panto-transformer-markdown/badge.svg?branch=master
[coveralls-url]:https://coveralls.io/github/pantojs/panto-transformer-markdown?branch=master
