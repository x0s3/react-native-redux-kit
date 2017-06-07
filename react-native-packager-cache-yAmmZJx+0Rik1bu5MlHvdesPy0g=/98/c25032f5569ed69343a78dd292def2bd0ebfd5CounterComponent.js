Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/root/WebstormProjects/xoseRedux/src/routes/Counter/components/CounterComponent.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var Contador3 = function (_Component) {
    babelHelpers.inherits(Contador3, _Component);

    function Contador3() {
        babelHelpers.classCallCheck(this, Contador3);
        return babelHelpers.possibleConstructorReturn(this, (Contador3.__proto__ || Object.getPrototypeOf(Contador3)).apply(this, arguments));
    }

    babelHelpers.createClass(Contador3, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _reactNative.View,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 11
                    }
                },
                _react2.default.createElement(
                    _reactNative.Text,
                    { style: style.contador, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 12
                        }
                    },
                    'Contador 2: ',
                    this.props.contador3
                ),
                _react2.default.createElement(_reactNative.Button, { title: 'Aumentar contador', onPress: function onPress() {
                        return _this2.props.aumentar3();
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 13
                    }
                }),
                _react2.default.createElement(_reactNative.Button, { title: 'Disminuar contador', onPress: function onPress() {
                        return _this2.props.disminuir3();
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 14
                    }
                })
            );
        }
    }]);
    return Contador3;
}(_react.Component);

var style = _reactNative.StyleSheet.create({
    contador: {
        fontSize: 20,
        color: 'blue'
    }
});

exports.default = Contador3;