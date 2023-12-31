import react, { useState } from "react";
import "./style.css";

function Subtra(props) {
  let firstNo = parseInt(props.firstvalue);
  let secondNo = parseInt(props.secondvalue);
  let bal = firstNo - secondNo;
  props.setSummation(bal);
}

function Multiplication(props) {
  let firstNo = parseInt(props.firstvalue);
  let secondNo = parseInt(props.secondvalue);
  let multi = firstNo * secondNo;
  props.setSummation(multi);
}

function Division(props) {
  let firstNo = parseInt(props.firstvalue);
  let secondNo = parseInt(props.secondvalue);
  console.log(firstNo);
  console.log(secondNo);
  let division=firstNo/secondNo;
  console.log(division);
  props.setSummation(division);
}

function Back() {
  return (
    <div>
      <a href="/">
        <button type="button" className="btn btn-warning">
          Back
        </button>
      </a>
    </div>
  );
}

function Add() {
  const [firstvalue, setFirstvalue] = useState("");
  const [secondvalue, setSecondvalue] = useState("");
  const [summation, setSummation] = useState(0);
  const handleSubmit = (event) => {
    event.preventDefault();
    var firstNo = parseInt(firstvalue);
    var SecondNo = parseInt(secondvalue);
    var sumvalue = firstNo + SecondNo;
    setSummation(sumvalue);
  };
  return (
    <>
      <div className="temp">
        <div className="row">
          <div className="col-md-11">
            <span>{summation}</span>
          </div>
          <div className="col-md-1">
            <Back />
          </div>
        </div>
        <form>
          <div className="row">
            <div className="col-md-6">Number 1 :</div>
            <div className="col-md-6">
              <input
                type="number"
                name="firstvalue"
                value={firstvalue}
                onChange={(event) => setFirstvalue(event.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">Number 2 :</div>
            <div className="col-md-6">
              <input
                type="number"
                name="secondvalue"
                value={secondvalue}
                onChange={(event) => setSecondvalue(event.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <button type="submit" onClick={handleSubmit}>
                Summation
              </button>
            </div>
            <div className="col-md-3">
              <button
                type="button"
                onClick={() =>
                  Subtra({ firstvalue, secondvalue, setSummation })
                }
              >
                Subtraction
              </button>
            </div>
            <div className="col-md-3">
              <button
                type="button"
                onClick={() =>
                  Multiplication({ firstvalue, secondvalue, setSummation })
                }
              >
                Multiplication
              </button>
            </div>
            <div className="col-md-3">
              <button
                type="button"
                onClick={() =>
                  Division({ firstvalue, secondvalue, setSummation })
                }
              >
                Division
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Add;
