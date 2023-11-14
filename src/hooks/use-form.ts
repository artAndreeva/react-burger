import { useState, ChangeEvent } from "react";
import { IInputValues } from '../types/types';

export function useForm(inputValues: IInputValues = {}) {
  const [values, setValues] = useState(inputValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.target;
    setValues({...values, [name]: value});
  };
  return {values, handleChange, setValues};
}
