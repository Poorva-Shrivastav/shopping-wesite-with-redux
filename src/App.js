import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrease, increase } from "./redux/actions/Actions";

function App() {
  const mystate = useSelector((state) => state.changeVal);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(decrease())}>-</button>
      <label>{mystate.num}</label>
      <button onClick={() => dispatch(increase())}>+</button>
    </div>
  );
}

export default App;
