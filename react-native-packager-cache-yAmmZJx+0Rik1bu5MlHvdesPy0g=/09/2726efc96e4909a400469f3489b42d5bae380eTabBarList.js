Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/root/WebstormProjects/xoseRedux/src/TabBarList.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _superheroesList = require('./views/superheroesList');

var _superheroesList2 = babelHelpers.interopRequireDefault(_superheroesList);

var _contador = require('./views/contador');

var _contador2 = babelHelpers.interopRequireDefault(_contador);

var _reactNativeSmartbar = require('react-native-smartbar');

var _reactNativeSmartbar2 = babelHelpers.interopRequireDefault(_reactNativeSmartbar);

var TabBarList = function (_Component) {
    babelHelpers.inherits(TabBarList, _Component);

    function TabBarList(props) {
        babelHelpers.classCallCheck(this, TabBarList);

        var _this = babelHelpers.possibleConstructorReturn(this, (TabBarList.__proto__ || Object.getPrototypeOf(TabBarList)).call(this, props));

        _this.state = {
            toggle: true,
            index: 0
        };
        return _this;
    }

    babelHelpers.createClass(TabBarList, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _reactNativeSmartbar2.default,
                {
                    activeColor: '#FE985B',
                    height: 150,
                    toggle: this.state.toggle,
                    ref: function ref(tabbar) {
                        return _this2.tabbar = tabbar;
                    },
                    index: this.state.index,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                    }
                },
                _react2.default.createElement(
                    _reactNativeSmartbar2.default.Item,
                    {
                        icon: require('../src/views/teamwork.png'),
                        selectedIcon: require('../src/views/teamwork.png'),
                        text: 'Home',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 25
                        }
                    },
                    _react2.default.createElement(_superheroesList2.default, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 30
                        }
                    })
                ),
                _react2.default.createElement(
                    _reactNativeSmartbar2.default.Item,
                    {
                        icon: require('../src/views/teamwork.png'),
                        selectedIcon: require('../src/views/teamwork.png'),
                        text: 'Contador',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 33
                        }
                    },
                    _react2.default.createElement(_contador2.default, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 38
                        }
                    })
                )
            );
        }
    }]);
    return TabBarList;
}(_react.Component);

exports.default = TabBarList;