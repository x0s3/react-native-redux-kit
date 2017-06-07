Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ACTION_HANDLERS;

exports.aumentar3 = aumentar3;
exports.disminuir3 = disminuir3;
exports.default = counterReducer3;
var COUNTER_INCREMENT3 = exports.COUNTER_INCREMENT3 = 'COUNTER_INCREMENT3';
var COUNTER_DECREMENT3 = exports.COUNTER_DECREMENT3 = 'COUNTER_DECREMENT3';

function aumentar3() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    return {
        type: COUNTER_INCREMENT3,
        payload: value
    };
}

function disminuir3() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    return {
        type: COUNTER_DECREMENT3,
        payload: value
    };
}

var actions = exports.actions = {
    aumentar3: aumentar3,
    disminuir3: disminuir3
};

var ACTION_HANDLERS = (_ACTION_HANDLERS = {}, babelHelpers.defineProperty(_ACTION_HANDLERS, COUNTER_INCREMENT3, function (state, action) {
    return state + action.payload;
}), babelHelpers.defineProperty(_ACTION_HANDLERS, COUNTER_DECREMENT3, function (state, action) {
    return state - action.payload;
}), _ACTION_HANDLERS);

var initialState = 0;
function counterReducer3() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    var handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}