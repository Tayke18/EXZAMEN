import React, { useReducer, useCallback, useMemo } from "react";
import { ADD, INPUT } from "./components/constants";
import ToggleSwitch from "./components/ToggleSwitch";
const initialState = {
  result: 0,
  input: ""
};
const calculatorReducer = (state, action) => {
  switch (action.type) {
    case INPUT:
      return {
        ...state,
        input: action.value
      };
    case ADD:
      return {
        ...state,
        result: state.result + Number(state.input),
        input: ""
      };
    case "SUBTRACT":
      return {
        ...state,
        result: state.result - Number(state.input),
        input: ""
      };
    case "MULTIPLY":
      return {
        ...state,
        result: state.result * Number(state.input),
        input: ""
      };
    case "DIVIDE":
      return {
        ...state,
        result: state.result / +state.input,
        input: ""
      };
    default:
      return state;
  }
};
const App = () => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);
  const handleInput = useCallback(event => {
    dispatch({ type: INPUT, value: event.target.value });
  }, []);
  const handlePlus = () => {
    dispatch({ type: ADD});
    };
  const handleSubtract = () => {
    dispatch({ type: "SUBTRACT" });
    };
    const handleMultiply = () => {
      dispatch({ type: "MULTIPLY" });
      };
  const handleDivide = useCallback(() => {
    dispatch({ type: "DIVIDE" });
  }, []);
  const result = useMemo(() => state.result, [state.result]);
  return (
    <div >

      <input type="text" value={state.input} onChange={handleInput} />
      <br />
      <br />
      <button onClick={handlePlus}>+</button>
      <button onClick={handleSubtract}>-</button>
      <button onClick={handleMultiply}>*</button>
      <button onClick={handleDivide}>/</button>
      <br />
      <br />
      Result: {result}
<ToggleSwitch label= "toggle"/>
    </div>
  );
};
export default App;