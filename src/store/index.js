import {createStore} from "redux"

const counterInitialValue = {counter: 0}

const counterReducer = (state = counterInitialValue, action) => {
    if (action.type === "increase") {
        return {
            counter: state.counter + 1
        }
    }

    if (action.type === "decrease") {
        return {
            counter: state.counter - 1
        }
    }
    return state
}

const store = createStore(counterReducer)

export default store

