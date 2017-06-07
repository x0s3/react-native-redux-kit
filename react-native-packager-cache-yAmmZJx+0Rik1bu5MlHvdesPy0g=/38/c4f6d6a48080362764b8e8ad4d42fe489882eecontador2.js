Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ACTION_HANDLERS;

exports.aumentar2 = aumentar2;
exports.disminuir2 = disminuir2;
exports.default = counterReducer2;
var COUNTER_INCREMENT2 = exports.COUNTER_INCREMENT2 = 'COUNTER_INCREMENT2';
var COUNTER_DECREMENT2 = exports.COUNTER_DECREMENT2 = 'COUNTER_DECREMENT2';

function aumentar2() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    return {
        type: COUNTER_INCREMENT2,
        payload: value
    };
}

function disminuir2() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    return {
        type: COUNTER_DECREMENT2,
        payload: value
    };
}

var actions = exports.actions = {
    aumentar2: aumentar2,
    disminuir2: disminuir2
};

var ACTION_HANDLERS = (_ACTION_HANDLERS = {}, babelHelpers.defineProperty(_ACTION_HANDLERS, COUNTER_INCREMENT2, function (state, action) {
    return babelHelpers.extends({}, state, { contador2: state.contador2 + action.payload });
}), babelHelpers.defineProperty(_ACTION_HANDLERS, COUNTER_DECREMENT2, function (state, action) {
    return babelHelpers.extends({}, state, { contador2: state.contador2 - action.payload });
}), _ACTION_HANDLERS);

var initialState = { contador2: 0 };
function counterReducer2() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    var handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}