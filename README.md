# hexo-stop-tag-plugins

[![Build Status](https://travis-ci.org/think-in-universe/hexo-stop-tag-plugins.svg?branch=master)](https://travis-ci.org/think-in-universe/hexo-stop-tag-plugins)
[![NPM version](https://badge.fury.io/js/hexo-stop-tag-plugins.svg)](https://www.npmjs.com/package/hexo-stop-tag-plugins)
[![Coverage Status](https://img.shields.io/coveralls/think-in-universe/hexo-stop-tag-plugins.svg)](https://coveralls.io/r/think-in-universe/hexo-stop-tag-plugins?branch=master)
[![NPM Dependencies](https://david-dm.org/think-in-universe/hexo-stop-tag-plugins.svg)](https://david-dm.org/think-in-universe/hexo-stop-tag-plugins)
[![NPM DevDependencies](https://david-dm.org/think-in-universe/hexo-stop-tag-plugins/dev-status.svg)](https://david-dm.org/think-in-universe/hexo-stop-tag-plugins?type=dev)

For Markdown rendering, disable the [tag plugins](https://hexo.io/docs/tag-plugins), if you don't want hexo to process the markdown with [nunjucks syntax](https://mozilla.github.io/nunjucks/templating.html), which is used by default.

## Installation

``` bash
$ npm install hexo-stop-tag-plugins --save
```

- Hexo version >= 3.9.0 are recommended, which includes the fix of [disableNunjucks property issue](https://github.com/hexojs/hexo/pull/3573)
- If you use hexo version < 3.9.0, hexo may not render the markdown code blocks correctly due to the above issue


## How to use

1. confirm the package order

After installation, make sure the `hexo-stop-tag-plugins` package appear after all the renderers plugins. In most case, the order should be already correct with alphabetical order.

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
    "hexo-generator-archive": "^0.1.4",
    "hexo-generator-category": "^0.1.3",
    "hexo-generator-index": "^0.2.0",
    "hexo-generator-json-content": "^2.2.0",
    "hexo-generator-tag": "^0.2.0",
    "hexo-renderer-ejs": "^0.3.1",
    "hexo-renderer-marked": "^0.2.10",
    "hexo-renderer-stylus": "^0.3.1",
    "hexo-server": "^0.2.0",
    "hexo-stop-tag-plugins": "^0.1.5",
    "uglify-es": "^3.3.9"
  }
}
```

2. how to disable this plugin

If you want to enabling the tag plugins, you can either uninstall this pacakge, or set the `stop_tag_plugins` configuration to `false` in `_config.yml`:

```yaml
stop_tag_plugins: false
```


[Hexo]: https://hexo.io

