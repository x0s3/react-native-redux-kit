Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/root/WebstormProjects/xoseRedux/src/views/contador.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _contadorReducer = require('../routes/contadorReducer');

var Contador = function (_Component) {
    babelHelpers.inherits(Contador, _Component);

    function Contador() {
        babelHelpers.classCallCheck(this, Contador);
        return babelHelpers.possibleConstructorReturn(this, (Contador.__proto__ || Object.getPrototypeOf(Contador)).apply(this, arguments));
    }

    babelHelpers.createClass(Contador, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                contador = _props.contador,
                aumentar = _props.aumentar,
                disminuir = _props.disminuir;

            return _react2.default.createElement(
                _reactNative.View,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 14
                    }
                },
                _react2.default.createElement(
                    _reactNative.Text,
                    { style: style.contador, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 15
                        }
                    },
                    'Contador 2: ',
                    contador
                ),
                _react2.default.createElement(_reactNative.Button, { title: 'Aumentar contador', onPress: function onPress() {
                        return aumentar();
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 16
                    }
                }),
                _react2.default.createElement(_reactNative.Button, { title: 'Disminuar contador', onPress: function onPress() {
                        return disminuir();
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17
                    }
                })
            );
        }
    }]);
    return Contador;
}(_react.Component);

var mapDispatchToProps = {
    aumentar: function aumentar() {
        return (0, _contadorReducer.aumentar)(1);
    },
    disminuir: function disminuir() {
        return (0, _contadorReducer.disminuir)(1);
    }
};

var style = _reactNative.StyleSheet.create({
    contador: {
        fontSize: 20,
        color: 'blue'
    }
});

var mapStateToProps = function mapStateToProps(state) {
    return {
        contador: state.contador.contador
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Contador);