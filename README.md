consulate-scopes-env [![Build Status](https://travis-ci.org/consulate/consulate-scopes-env.png?branch=master)](https://travis-ci.org/consulate/consulate-scopes-env)
====================

Load scopes for [consulate](https://github.com/consulate/consulate) from a `process.env` value

Usage
-----

Just register `consulate-scopes-env` as a plugin with your [consulate](https://github.com/consulate/consulate) server:

```js
var consulate = require('consulate')
  , scopes = require('consulate-scopes-env');

var app = consulate();

app.plugin(scopes({
  name: 'MY_SCOPES_VAR', // defaults to 'SCOPES'
  placeholder: '_', // defaults to 'null'
  separator: '|' // defaults to ','
}));
```

Before starting the server, set the environment variable:

```sh
$ MY_SCOPES_VAR='emails|users|_|sales' node app
```

The scopes will be parsed into an array:

```js
[
  'emails',
  'users',
  null,
  'sales'
]
```

Tests
-----

```sh
$ npm test
```
