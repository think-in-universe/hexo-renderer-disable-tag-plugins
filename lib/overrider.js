/*
  The module is created to disable the tag plugins (https://hexo.io/docs/tag-plugins)
  and nunjucks syntax, which causes troubles in parsing markdown often
*/

'use strict';

const extensions = ['md', 'markdown', 'mkd', 'mkdn', 'mdwn', 'mdtxt', 'mdtext'];

module.exports = function(hexo) {

  let stop_tag_plugins = true;

  if (hexo.config.stop_tag_plugins === undefined || hexo.config.stop_tag_plugins === true ) {
    stop_tag_plugins = true;
  } else {
    stop_tag_plugins = false;
  }
  for (let ext of extensions) {
    let renderer = hexo.render.renderer.get(ext);
    if (renderer) {
      renderer.disableNunjucks = stop_tag_plugins;
      hexo.extend.renderer.register(ext, 'html', renderer);
    }
  }

};
