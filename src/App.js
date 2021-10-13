import {useSelector, useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)

    const handleDecrease = () => {
        dispatch({type: "decrease"})
    }

    const handleIncrease = () => {
        dispatch({type: "increase"})
    }

    return (
        <div className="h-screen bg-blue-100 pt-16">
            <div className="p-6 mx-auto bg-white max-w-sm rounded-xl shadow-md flex flex-col items-center space-y-4">
                <h1 className="text-xl font-medium text-black">My counter</h1>
                <p className="text-gray-500">{counter}</p>
                <div className="space-x-4">
                    <button
                        className="py-2 px-4 font-bold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
                        onClick={handleDecrease}>Decrease
                    </button>
                    <button
                        className="py-2 px-4 font-bold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
                        onClick={handleIncrease}>Increase
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
