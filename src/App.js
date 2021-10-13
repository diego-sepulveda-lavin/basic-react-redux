import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "./store/index";
import { Button } from "./components/Button";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);

  const handleDecrease = () => {
    dispatch(counterActions.decrease(amount));
  };

  const handleIncrease = () => {
    dispatch(counterActions.increase(amount));
  };

  const handleAmount = e => {
    const amount = Number(e.target.value);
    setAmount(amount);
  };

  const toggleCounter = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <div className="h-screen bg-blue-100 pt-16">
      <div className="p-6 mx-auto bg-white max-w-sm md:max-w-lg rounded-xl shadow-md flex flex-col items-center space-y-4">
        <h1 className="text-xl font-medium text-black">My counter</h1>
        <p className="text-green-500 font-bold text-xl">
          {showCounter && counter}
        </p>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="modifyBy"
        >
          Modify by
        </label>
        <input
          className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="modifyBy"
          type="number"
          placeholder="Amount"
          onChange={handleAmount}
          value={amount}
        />
        <div className="space-y-4 md:space-x-4 md:space-y-0 flex flex-col content-center md:flex-row">
          <Button onClickHandler={handleDecrease}>Decrease Amount</Button>
          <Button onClickHandler={handleIncrease}>Increase Amount</Button>
          <Button onClickHandler={toggleCounter}>Toggle Counter</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
