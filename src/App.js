import {useSelector, useDispatch} from "react-redux";


function App() {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)

    const handleDecrease = () => {
        dispatch({type:"decrease"})
    }

    const handleIncrease = () => {
        dispatch({type:"increase"})
    }

    return (
        <div>
            <h1>My counter</h1>
            <p>{counter}</p>
            <button onClick={handleDecrease}>Decrease</button>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    );
}

export default App;
