Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _superheroesReducer = require('./superheroesReducer');

var _superheroesReducer2 = babelHelpers.interopRequireDefault(_superheroesReducer);

var _contador = require('./contador');

var _contador2 = babelHelpers.interopRequireDefault(_contador);

exports.default = (0, _redux.combineReducers)({
  superheroes: _superheroesReducer2.default,
  contador: _contador2.default
});