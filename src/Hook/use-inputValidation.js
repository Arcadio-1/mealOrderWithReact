import { useState } from "react";

const useInputValidation = (validation) => {
  const [value, setValue] = useState("");
  const [valueTuched, setValueTuched] = useState(false);
  const valueVali = validation(value);
  const inputHasError = valueTuched && !valueVali;
  const inputChangeHandler = (e) => {
    setValue(e.target.value);
  };
  const inputBlurHandler = () => {
    setValueTuched(true);
  };
  const reset = () => {
    setValue("");
    setValueTuched(false);
  };
  return {
    value,
    valueVali,
    inputHasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};
export default useInputValidation;
