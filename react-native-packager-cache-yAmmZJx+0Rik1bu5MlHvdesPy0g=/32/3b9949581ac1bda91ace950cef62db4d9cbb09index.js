Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _superheroesReducer = require('./Home/reducer/superheroesReducer');

var _superheroesReducer2 = babelHelpers.interopRequireDefault(_superheroesReducer);

var _contadorReducer = require('./Counter/reducer/contadorReducer');

var _contadorReducer2 = babelHelpers.interopRequireDefault(_contadorReducer);

exports.default = (0, _redux.combineReducers)({
  superheroes: _superheroesReducer2.default,
  contador: _contadorReducer2.default
});