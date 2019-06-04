'use strict';

const should = require('chai').should(); // eslint-disable-line
const fixture = require('./fixtures');

describe('Stop tag plugins', function() {

  const Hexo = require('hexo');
  const hexo = new Hexo();
  const Post = hexo.model('Post');
  const Page = hexo.model('Page');
  const renderPost = require('hexo/lib/plugins/filter/before_generate/render_post').bind(hexo);
  const overrider = require('../lib/overrider');

  before(() => hexo.init().then(() => hexo.loadPlugin(require.resolve('hexo-renderer-marked'))));

  it('render post with tag plugins by default', () => {
    let id;

    return Post.insert({
      source: 'foo.md',
      slug: 'foo',
      _content: fixture.content
    }).then(post => {
      id = post._id;
      return renderPost();
    }).then(() => {
      const post = Post.findById(id);
      post.content.trim().should.eql(fixture.expected_with_tag_plugins);

      return post.remove();
    });
  });

  it('render page with tag plugins by default', () => {
    let id;

    return Page.insert({
      source: 'foo.md',
      path: 'foo.html',
      _content: fixture.content
    }).then(page => {
      id = page._id;
      return renderPost();
    }).then(() => {
      const page = Page.findById(id);
      page.content.trim().should.eql(fixture.expected_with_tag_plugins);

      return page.remove();
    });
  });

  it('overide the default markdown renderer', () => {
    overrider(hexo);
  });

  it('render post without tag plugins', () => {
    let id;

    return Post.insert({
      source: 'foo.md',
      slug: 'foo',
      _content: fixture.content
    }).then(post => {
      id = post._id;
      return renderPost();
    }).then(() => {
      const post = Post.findById(id);
      post.content.trim().should.eql(fixture.expected_without_tag_plugins);

      return post.remove();
    });
  });

  it('render page without tag plugins', () => {
    let id;

    return Page.insert({
      source: 'foo.md',
      path: 'foo.html',
      _content: fixture.content
    }).then(page => {
      id = page._id;
      return renderPost();
    }).then(() => {
      const page = Page.findById(id);
      page.content.trim().should.eql(fixture.expected_without_tag_plugins);

      return page.remove();
    });
  });

  it('set the stop_tag_plugins to false', () => {
    hexo.config.stop_tag_plugins = false;
    overrider(hexo);
  });

  it('render post after enabling tag plugins', () => {
    let id;

    return Post.insert({
      source: 'foo.md',
      slug: 'foo',
      _content: fixture.content
    }).then(post => {
      id = post._id;
      return renderPost();
    }).then(() => {
      const post = Post.findById(id);
      post.content.trim().should.eql(fixture.expected_with_tag_plugins);

      return post.remove();
    });
  });

  it('render page after enabling tag plugins', () => {
    let id;

    return Page.insert({
      source: 'foo.md',
      path: 'foo.html',
      _content: fixture.content
    }).then(page => {
      id = page._id;
      return renderPost();
    }).then(() => {
      const page = Page.findById(id);
      page.content.trim().should.eql(fixture.expected_with_tag_plugins);

      return page.remove();
    });
  });

  it('set the stop_tag_plugins to true', () => {
    hexo.config.stop_tag_plugins = true;
    overrider(hexo);
  });


  it('render post without tag plugins', () => {
    let id;

    return Post.insert({
      source: 'foo.md',
      slug: 'foo',
      _content: fixture.content
    }).then(post => {
      id = post._id;
      return renderPost();
    }).then(() => {
      const post = Post.findById(id);
      post.content.trim().should.eql(fixture.expected_without_tag_plugins);

      return post.remove();
    });
  });

  it('render page without tag plugins', () => {
    let id;

    return Page.insert({
      source: 'foo.md',
      path: 'foo.html',
      _content: fixture.content
    }).then(page => {
      id = page._id;
      return renderPost();
    }).then(() => {
      const page = Page.findById(id);
      page.content.trim().should.eql(fixture.expected_without_tag_plugins);

      return page.remove();
    });
  });

});
