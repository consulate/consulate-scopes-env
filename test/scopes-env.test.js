/**
 * Module dependencies
 */
var should = require('should')
  , scopes = require('..');

describe('consulate-scopes-env', function() {

  var app, list;

  beforeEach(function() {
    app = {
      scopes: function(fn) {
        list = fn;
      }
    };
  });

  it('should load scopes from `process.env.SCOPES`', function(done) {
    scopes()(app);
    list(function(err, actualScopes) {
      actualScopes.should.eql(['1','2',null,'4','5']);
      done();
    });
  });

  it('should be configurable', function(done) {
    scopes({
      name: 'SCOPES2',
      separator: '|',
      placeholder: '_'
    })(app);
    list(function(err, actualScopes) {
      actualScopes.should.eql(['6',null,'7','8']);
      done();
    });
  });
});
