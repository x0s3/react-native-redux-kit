Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/root/WebstormProjects/xoseRedux/src/views/superheroesList.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var SuperheroesList = function (_Component) {
    babelHelpers.inherits(SuperheroesList, _Component);

    function SuperheroesList() {
        babelHelpers.classCallCheck(this, SuperheroesList);
        return babelHelpers.possibleConstructorReturn(this, (SuperheroesList.__proto__ || Object.getPrototypeOf(SuperheroesList)).apply(this, arguments));
    }

    babelHelpers.createClass(SuperheroesList, [{
        key: 'getSuperHeroes',
        value: function getSuperHeroes() {
            var superheroes = this.props.superheroes;

            return superheroesData = superheroes.map(function (heroe, i) {
                return _react2.default.createElement(
                    _reactNative.Text,
                    { key: i, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 12
                        }
                    },
                    heroe.nombre
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactNative.View,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                    }
                },
                _react2.default.createElement(
                    _reactNative.Text,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 19
                        }
                    },
                    'Lista de Super Heroes'
                ),
                this.getSuperHeroes()
            );
        }
    }]);
    return SuperheroesList;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return { superheroes: state.superheroes };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SuperheroesList);