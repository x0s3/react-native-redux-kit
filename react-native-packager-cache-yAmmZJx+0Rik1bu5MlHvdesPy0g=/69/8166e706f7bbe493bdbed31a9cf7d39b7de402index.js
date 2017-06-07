Object.defineProperty(exports, "__esModule", {
	value: true
});
var _jsxFileName = '/root/WebstormProjects/xoseRedux/node_modules/react-native-smartbar/index.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _item = require('./item');

var _item2 = babelHelpers.interopRequireDefault(_item);

var Tabbar = function (_Component) {
	babelHelpers.inherits(Tabbar, _Component);

	function Tabbar(props) {
		babelHelpers.classCallCheck(this, Tabbar);

		var _this = babelHelpers.possibleConstructorReturn(this, (Tabbar.__proto__ || Object.getPrototypeOf(Tabbar)).call(this, props));

		_this.state = {
			content: _this.props.children,
			contentActive: _this.props.index ? _this.props.index : 0,
			contentHeight: _this.props.height ? _this.props.height : 45,
			textActive: _this.props.activeColor ? _this.props.activeColor : '#FE985B',
			footerMarginBottom: new _reactNative.Animated.Value(0)
		};
		return _this;
	}

	babelHelpers.createClass(Tabbar, [{
		key: 'footerBar',
		value: function footerBar(children) {
			var _this2 = this;

			var pressHandle = function pressHandle(done, index) {
				_this2.setState({
					contentActive: index
				});
				done && done();
			};

			var textBox = function textBox() {};
			return children.map(function (item, index) {
				var active = _this2.state.contentActive == index;
				var selected = item.props.selectedIcon ? item.props.selectedIcon : item.props.icon;
				var box = function box(text, icon) {
					if (!text) {
						return _react2.default.createElement(
							_reactNative.View,
							{ style: styles.box, __source: {
									fileName: _jsxFileName,
									lineNumber: 57
								}
							},
							_react2.default.createElement(_reactNative.Image, babelHelpers.extends({ source: active ? selected : item.props.icon,
								style: styles.onlyIcon
							}, item.props.iconStyle, {
								__source: {
									fileName: _jsxFileName,
									lineNumber: 58
								}
							}))
						);
					}
					if (!icon) {
						return _react2.default.createElement(
							_reactNative.View,
							{ style: styles.box, __source: {
									fileName: _jsxFileName,
									lineNumber: 67
								}
							},
							_react2.default.createElement(
								_reactNative.Text,
								{ style: [styles.onlyText, active && { color: _this2.state.textActive }, babelHelpers.extends({}, item.props.textStyle)],
									__source: {
										fileName: _jsxFileName,
										lineNumber: 68
									}
								},
								text
							)
						);
					}
					return _react2.default.createElement(
						_reactNative.View,
						{ style: styles.box, __source: {
								fileName: _jsxFileName,
								lineNumber: 76
							}
						},
						_react2.default.createElement(_reactNative.Image, babelHelpers.extends({ source: icon,
							style: styles.icon
						}, item.props.iconStyle, {
							__source: {
								fileName: _jsxFileName,
								lineNumber: 77
							}
						})),
						_react2.default.createElement(
							_reactNative.Text,
							{ style: [styles.text, active && { color: _this2.state.textActive }, babelHelpers.extends({}, item.props.textStyle)],
								__source: {
									fileName: _jsxFileName,
									lineNumber: 81
								}
							},
							text
						)
					);
				};
				return _react2.default.createElement(
					_reactNative.TouchableHighlight,
					{ key: 'tabbar-item' + index,
						style: styles.footerButton,
						onPress: function onPress() {
							return pressHandle(item.props.onPress, index);
						},
						underlayColor: 'transparent',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 89
						}
					},
					box(item.props.text, active ? selected : item.props.icon)
				);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_reactNative.View,
				{ style: styles.body, __source: {
						fileName: _jsxFileName,
						lineNumber: 102
					}
				},
				_react2.default.createElement(
					_reactNative.View,
					{ style: styles.content, __source: {
							fileName: _jsxFileName,
							lineNumber: 103
						}
					},
					this.state.content[this.state.contentActive].props.children
				),
				_react2.default.createElement(
					_reactNative.Animated.View,
					babelHelpers.extends({ style: [styles.footer, { marginBottom: this.state.footerMarginBottom }, { height: this.state.contentHeight }]
					}, this.props.style, {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 106
						}
					}),
					this.footerBar(this.props.children)
				)
			);
		}
	}, {
		key: 'toggleBar',
		value: function toggleBar() {
			var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.footerMarginBottom._value == 0;

			_reactNative.Animated.timing(this.state.footerMarginBottom, {
				toValue: t ? -85 : 0,
				duration: 190,
				easing: _reactNative.Easing.linear
			}).start();
		}
	}, {
		key: 'jumpToIndex',
		value: function jumpToIndex(index) {
			this.setState({
				contentActive: index
			});
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.index != undefined) this.jumpToIndex(nextProps.index);
			if (nextProps.toggleBar != undefined) this.toggleBar(!nextProps.toggleBar);
		}
	}]);
	return Tabbar;
}(_react.Component);

Tabbar.propTypes = babelHelpers.extends({}, _reactNative.View.propTypes, {
	style: _reactNative.View.propTypes.style,
	activeColor: _react2.default.PropTypes.string,
	height: _react2.default.PropTypes.number
});
Tabbar.Item = _item2.default;
exports.default = Tabbar;

var _Dimensions$get = _reactNative.Dimensions.get('window'),
    width = _Dimensions$get.width,
    height = _Dimensions$get.height;

var styles = _reactNative.StyleSheet.create({
	body: {
		flexGrow: 1,
		width: width,
		overflow: 'hidden',
		height: height,
		flexDirection: 'column'
	},
	content: {
		flex: 1
	},
	box: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	footer: {
		width: width,
		flexDirection: 'row',
		backgroundColor: '#fff',
		borderTopWidth: 1,
		borderTopColor: '#E5E5E5'
	},
	footerButton: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 5,
		paddingBottom: 5
	},
	icon: {
		width: _reactNative.Platform.OS == 'ios' ? 22 : 18,
		height: _reactNative.Platform.OS == 'ios' ? 22 : 18,
		alignItems: 'center'
	},
	onlyIcon: {
		width: 27,
		height: 27,
		alignItems: 'center',
		marginTop: 5,
		marginBottom: 5
	},
	text: {
		fontSize: 12,
		color: '#9B9DB0',
		paddingTop: 3,
		textAlign: 'center'
	},
	onlyText: {
		fontSize: 16,
		color: '#9B9DB0',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 8,
		marginBottom: 8
	}
});