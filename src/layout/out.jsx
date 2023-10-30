import react from "react";
import { useState } from "react";

function Submit() {
  const [count, setCount] = useState(0);
  function Click() {
    setCount(count + 1);
  }
  return (
    <button className="btn btn-success form-control" onClick={Click}>
      Click {count} times!
    </button>
  );
}

function MyButton({ val, onClick }) {
  console.log(val);
  return (
    <div>
      <button className="btn btn-info form-control" onClick={onClick}>Click here {val} times</button>
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
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6 p-2">
              <Submit />
            </div>
            <div className="col-md-6 p-2">
              <Submit />
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-3 p-2">
              <MyButton val={val} onClick={MyButtonClick} />
            </div>
            <div className="col-md-3 p-2">
              <MyButton val={val} onClick={MyButtonClick} />
            </div>
            <div className="col-md-3 p-2">
              <MyButton val={val} onClick={MyButtonClick} />
            </div>
            <div className="col-md-3 p-2">
              <MyButton val={val} onClick={MyButtonClick} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Out;
