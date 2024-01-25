import { useEffect, useRef } from "react";

function FocusableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
   
  },[]);

  return (
    <>
      <label htmlFor="input">INPUT REF</label>
      <br />
      <input id="input" type="text" ref={inputRef} placeholder="..."/>
    </>
  );
}

export default FocusableInput;
