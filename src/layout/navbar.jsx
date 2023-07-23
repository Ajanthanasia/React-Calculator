import react from "react";
import "./navbar.css";

function NavBarLabel() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9">
            <b>Calculator view</b>
          </div>
          <div className="col-md-3 left">
            <button type="button" className="btn btn-primary">
              <a href="/add">
                <div className="font-calc">Calculator</div>
              </a>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavBarLabel;
