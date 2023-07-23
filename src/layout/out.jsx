import react from "react";
import { useState } from "react";

function Submit() {
  const [count, setCount] = useState(0);
  function Click() {
    setCount(count + 1);
  }
  return <button onClick={Click}>Click {count} times!</button>;
}

function MyButton({ val, onClick }) {
  console.log(val);
  return (
    <div>
      <button onClick={onClick}>Click here {val} times</button>
    </div>
  );
}

function Out() {
  const [val, setVal] = useState(0);
  function MyButtonClick() {
    setVal(val + 1);
  }
  return (
    <>
      <a href="/add">Add</a>

      <div className="row">
        <div className="col-md-12">
          <Submit />
          <Submit />
        </div>
        <div className="col-md-12">
          <MyButton val={val} onClick={MyButtonClick} />
          <MyButton val={val} onClick={MyButtonClick} />
        </div>
      </div>
    </>
  );
}

export default Out;
