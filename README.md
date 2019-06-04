# hexo-renderer-disable-tag-plugins

[![Build Status](https://travis-ci.org/think-in-universe/hexo-renderer-disable-tag-plugins.svg?branch=master)](https://travis-ci.org/think-in-universe/hexo-renderer-disable-tag-plugins)
[![NPM version](https://badge.fury.io/js/hexo-renderer-disable-tag-plugins.svg)](https://www.npmjs.com/package/hexo-renderer-disable-tag-plugins)
[![Coverage Status](https://img.shields.io/coveralls/think-in-universe/hexo-renderer-disable-tag-plugins.svg)](https://coveralls.io/r/think-in-universe/hexo-renderer-disable-tag-plugins?branch=master)
[![NPM Dependencies](https://david-dm.org/think-in-universe/hexo-renderer-disable-tag-plugins.svg)](https://david-dm.org/think-in-universe/hexo-renderer-disable-tag-plugins)
[![NPM DevDependencies](https://david-dm.org/think-in-universe/hexo-renderer-disable-tag-plugins/dev-status.svg)](https://david-dm.org/think-in-universe/hexo-renderer-disable-tag-plugins?type=dev)

For Markdown rendering, disable the [tag plugins](https://hexo.io/docs/tag-plugins), in case you don't want hexo to process the markdown with [nunjucks syntax](https://mozilla.github.io/nunjucks/templating.html), which is used by default.

## Installation

``` bash
$ npm install hexo-renderer-disable-tag-plugins --save
```

- Hexo 3: >= 0.2
- Hexo 2: 0.1.x


## How to use

After installation, make sure to put the package at the end of all the renderers.

`package.json`:
```json
{
  "name": "xxxxx",
  "version": "0.0.0",
  "private": true,
  "hexo": {
    "version": "3.8.0"
  },
  "dependencies": {
    "clean-css": "^4.2.1",
    "hexo": "^3.8.0",
    "hexo-all-minifier": "^0.5.3",
    "hexo-deployer-git": "^0.3.1",
    "hexo-filter-github-emojis": "^2.0.0",
    "hexo-generator-archive": "^0.1.4",
    "hexo-generator-category": "^0.1.3",
    "hexo-generator-index": "^0.2.0",
    "hexo-generator-json-content": "^2.2.0",
    "hexo-generator-tag": "^0.2.0",
    "hexo-renderer-ejs": "^0.3.1",
    "hexo-renderer-marked": "^0.2.10",
    "hexo-renderer-stylus": "^0.3.1",
    "hexo-renderer-disable-tag-plugins": "^0.1.1",
    "hexo-server": "^0.2.0",
    "uglify-es": "^3.3.9"
  }
}
```

and if you want to stop disabling the tag plugins, you can uninstall this pacakge, or add the below parameter in `_config.yml`:

```yaml
disable_tag_plugins: false
```


[Hexo]: https://hexo.io

