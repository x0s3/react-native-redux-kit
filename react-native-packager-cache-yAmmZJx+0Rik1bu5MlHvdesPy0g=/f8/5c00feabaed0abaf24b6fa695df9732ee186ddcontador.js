Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ACTION_HANDLERS;

exports.aumentar = aumentar;
exports.disminuir = disminuir;
exports.default = counterReducer;
var COUNTER_INCREMENT = exports.COUNTER_INCREMENT = 'COUNTER_INCREMENT';
var COUNTER_DECREMENT = exports.COUNTER_DECREMENT = 'COUNTER_DECREMENT';

function aumentar() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    return {
        type: COUNTER_INCREMENT,
        payload: value
    };
}

function disminuir() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    return {
        type: COUNTER_DECREMENT,
        payload: value
    };
}

var actions = exports.actions = {
    aumentar: aumentar,
    disminuir: disminuir
};

var ACTION_HANDLERS = (_ACTION_HANDLERS = {}, babelHelpers.defineProperty(_ACTION_HANDLERS, COUNTER_INCREMENT, function (state, action) {
    return babelHelpers.extends({}, state, { contador: state.contador + action.payload });
}), babelHelpers.defineProperty(_ACTION_HANDLERS, COUNTER_DECREMENT, function (state, action) {
    return babelHelpers.extends({}, state, { contador: state.contador - action.payload });
}), _ACTION_HANDLERS);

var initialState = { contador: 0 };
function counterReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    var handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}