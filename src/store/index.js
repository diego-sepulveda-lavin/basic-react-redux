import { createStore } from "redux";

const initialValue = { counter: 0, showCounter: true };

const counterReducer = (state = initialValue, action) => {
	switch (action.type) {
		case "increase":
			return {
				counter: state.counter + Number(action.payload),
				showCounter: state.showCounter,
			};

		case "decrease":
			return {
				counter: state.counter - Number(action.payload),
				showCounter: state.showCounter,
			};

		case "toogle":
			return {
				counter: state.counter,
				showCounter: !state.showCounter,
			};

		default:
			return state;
	}
};

const store = createStore(counterReducer);

export default store;
