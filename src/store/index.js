import {createStore} from "redux"

const counterInitialValue = {counter: 0}

const counterReducer = (state = counterInitialValue, action) => {
    switch (action.type) {
        case "increase":
            return {
                counter: state.counter + Number(action.payload)
            }
        case "decrease":
            return {
                counter: state.counter - Number(action.payload)
            }
        default:
            return state
    }
}

const store = createStore(counterReducer)

export default store

