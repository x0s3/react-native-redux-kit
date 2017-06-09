Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/root/WebstormProjects/xoseRedux/src/app.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _routes = require('./routes');

var _routes2 = babelHelpers.interopRequireDefault(_routes);

var _TabBarList = require('./routes/TabBarList');

var _TabBarList2 = babelHelpers.interopRequireDefault(_TabBarList);

var App = function App() {
    return _react2.default.createElement(
        _reactRedux.Provider,
        { store: (0, _redux.createStore)(_routes2.default), __source: {
                fileName: _jsxFileName,
                lineNumber: 12
            }
        },
        _react2.default.createElement(
            _reactNative.View,
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            },
            _react2.default.createElement(_TabBarList2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            })
        )
    );
};

exports.default = App;