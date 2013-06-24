/**
 * Module dependencies
 */

var env = require('envs')
  , debug = require('simple-debug')('consulate-scopes-env');

/**
 * Load scopes for consulate from a process.env value
 *
 * @param {String} name
 * @param {String} placeholder
 * @return {ConsulatePlugin}
 * @api public
 */

module.exports = function(options) {
  // Set some defaults
  options = options || {};
  var name = options.name || 'SCOPES'
    , separator = options.separator || ','
    , placeholder = options.placeholder || 'null';

  var scopes = env(name, '')
    .split(separator)
    .map(function(scope) { return scope === placeholder ? null : scope });

  return function(app) {
    app.scopes(function(done) {
      debug('ns=consulate-scopes-env at=app.scopes scopes-list='+JSON.stringify(JSON.stringify(scopes)));
      done(null, scopes);
    });
  };
};
