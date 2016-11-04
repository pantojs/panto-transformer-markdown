/**
 * Copyright (C) 2016 pantojs.xyz
 * index.js
 *
 * changelog
 * 2016-11-04[11:14:18]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
const Transformer = require('panto-transformer');

const MarkdownIt = require('markdown-it');

class MarkdownTransformer extends Transformer {
    _transform(file) {
        return new Promise(resolve => {
            const md = MarkdownIt(this.options.markdownOptions || {});
            const result = md.render(file.content);
            resolve(panto._.extend(file, {
                content: result
            }));
        });
    }
    isTorrential() {
        return false;
    }
}

module.exports = MarkdownTransformer;
