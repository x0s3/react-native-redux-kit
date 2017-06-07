Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _counter = require('./reducer/counter');

var _counter2 = babelHelpers.interopRequireDefault(_counter);

exports.default = (0, _redux.combineReducers)({
  contador3: _counter2.default
});