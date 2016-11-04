/**
 * Copyright (C) 2016 pantojs.xyz
 * test.js
 *
 * changelog
 * 2016-11-04[11:14:18]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
const assert = require('assert');
const panto = require('panto');
const MarkdownTransformer = require('../');

describe('panto-transformer-markdown', () => {
    describe('#transform', () => {
        it('should compile to html', done => {
            new MarkdownTransformer({
                markdownOptions: {
                    html: true,
                    xhtmlOut: true,
                    breaks: true,
                    linkify: true
                }
            }).transform({
                filename: 'test',
                content: '# title'
            }).then(file => {
                assert.ok(file.content.indexOf('<h1>') > -1);
            }).then(() => done(), done);
        });
        it('plugins should work', done => {
            new MarkdownTransformer({
                markdownOptions: {
                    html: true
                },
                markdownPlugins: [
                    [require('markdown-it-sanitizer'), {
                        imageClass: 'my-img',
                        removeUnbalanced: false,
                        removeUnknown: false
                    }]
                ]
            }).transform({
                filename: 'test',
                content: '<u><img src="http://example.com/image.png" alt="image" title="example">'
            }).then(file => {
                assert.ok(file.content.indexOf('<u>') === -1);
                assert.ok(file.content.indexOf('my-img') > -1);
            }).then(() => done(), done);
        });
    });
});
