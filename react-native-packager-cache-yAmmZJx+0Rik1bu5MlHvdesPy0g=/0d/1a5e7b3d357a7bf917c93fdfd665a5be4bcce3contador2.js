Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/root/WebstormProjects/xoseRedux/src/views/contador.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _contador = require('../reducers/contador2');

var Contador2 = function (_Component) {
    babelHelpers.inherits(Contador2, _Component);

    function Contador2() {
        babelHelpers.classCallCheck(this, Contador2);
        return babelHelpers.possibleConstructorReturn(this, (Contador2.__proto__ || Object.getPrototypeOf(Contador2)).apply(this, arguments));
    }

    babelHelpers.createClass(Contador2, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

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
                    this.props.contador2
                ),
                _react2.default.createElement(_reactNative.Button, { title: 'Aumentar contador', onPress: function onPress() {
                        return _this2.props.aumentar2();
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 15
                    }
                }),
                _react2.default.createElement(_reactNative.Button, { title: 'Disminuar contador', onPress: function onPress() {
                        return _this2.props.disminuir2();
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

var mapDispatchToProps = {
    aumentar2: function aumentar2() {
        return (0, _contador.aumentar2)(1);
    },
    disminuir2: function disminuir2() {
        return (0, _contador.disminuir2)(1);
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
        contador2: state.contador2.contador2
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Contador2);