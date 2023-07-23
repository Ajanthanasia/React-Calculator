import { BrowserRouter, Routes, Route } from "react-router-dom";
import Out from "./../layout/out";
import Add from "./../addition/add";
import NavBarLabel from "./../layout/navbar";

function Routepath() {
  return (
    <>
      <NavBarLabel />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Out />}></Route>
          <Route path="add" element={<Add />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routepath;
