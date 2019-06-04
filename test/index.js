'use strict';

var should = require('chai').should(); // eslint-disable-line
var util = require('hexo-util');

describe('Disable tag plugins', function() {
  var ctx = {
    config: {
      disable_tag_plugins: {}
    }
  };

  var r = require('../lib/renderer').bind(ctx);


});
