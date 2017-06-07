Object.defineProperty(exports, "__esModule", {
	value: true
});
var _jsxFileName = '/root/WebstormProjects/xoseRedux/node_modules/react-native-smartbar/item.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var TabbarItem = function (_Component) {
	babelHelpers.inherits(TabbarItem, _Component);

	function TabbarItem(props) {
		babelHelpers.classCallCheck(this, TabbarItem);

		var _this = babelHelpers.possibleConstructorReturn(this, (TabbarItem.__proto__ || Object.getPrototypeOf(TabbarItem)).call(this, props));

		_this.state = {};
		return _this;
	}

	babelHelpers.createClass(TabbarItem, [{
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
				this.props.children
			);
		}
	}]);
	return TabbarItem;
}(_react.Component);

exports.default = TabbarItem;