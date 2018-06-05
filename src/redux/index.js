import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk"

export const addSecond = () => {
    return dispatch => {
        dispatch({
            type: "ADD_SECOND"
        });
    }
}
export const clearCount = () => {
    return dispatch => {
        dispatch({
            type: "CLEAR_COUNT"
        });
    }
}

const initialState = {
    seconds: 0,
    timerStarted: false
}

export const reducer = (prevState = initialState, action) => {
    switch(action.type) {
        case "ADD_SECOND":
            return {
                ...prevState,
                seconds: prevState.seconds + 1,
                timerStarted: true
            }
        case "CLEAR_COUNT":
            return {
                ...prevState,
                seconds: 0,
                timerStarted: false
            }
        default:
            return prevState;
    }
}

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);