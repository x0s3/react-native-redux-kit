Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/root/WebstormProjects/xoseRedux/src/rutas/Contador/componentes/Contador2.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var Contador2 = function (_Component) {
    babelHelpers.inherits(Contador2, _Component);

    function Contador2() {
        babelHelpers.classCallCheck(this, Contador2);
        return babelHelpers.possibleConstructorReturn(this, (Contador2.__proto__ || Object.getPrototypeOf(Contador2)).apply(this, arguments));
    }

    babelHelpers.createClass(Contador2, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                contador2 = _props.contador2,
                aumentar = _props.aumentar,
                disminuir = _props.disminuir;

            return _react2.default.createElement(
                _reactNative.View,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 13
                    }
                },
                _react2.default.createElement(
                    _reactNative.Text,
                    { style: style.contador, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 14
                        }
                    },
                    'Contador 2: ',
                    contador2
                ),
                _react2.default.createElement(_reactNative.Button, { title: 'Aumentar contador', onPress: function onPress() {
                        return aumentar();
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 15
                    }
                }),
                _react2.default.createElement(_reactNative.Button, { title: 'Disminuar contador', onPress: function onPress() {
                        return disminuir();
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 16
                    }
                })
            );
        }
    }]);
    return Contador2;
}(_react.Component);

var style = _reactNative.StyleSheet.create({
    contador: {
        fontSize: 20,
        color: 'blue'
    }
});

Contador2.propTypes = {
    contador2: _propTypes2.default.number.isRequired,
    aumentar: _propTypes2.default.func.isRequired,
    disminuir: _propTypes2.default.func.isRequired
};

exports.default = Contador2;