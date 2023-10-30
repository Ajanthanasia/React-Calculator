import { BrowserRouter, Routes, Route } from "react-router-dom";
import Out from "./../layout/out";
import Add from "./../addition/add";
import NavBarLabel from "./../layout/navbar";

function Routepath() {
  return (
    <>
      <div className="container">
        <NavBarLabel />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Out />}></Route>
            <Route path="add" element={<Add />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default Routepath;
