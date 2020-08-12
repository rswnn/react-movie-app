import React from "react";
import { useHistory } from "react-router-dom";

const Index = () => {
  const history = useHistory();
  return (
    <div
      className="position-fixed w-100"
      style={{ zIndex: 1, backgroundColor: "rgb(3,37,65)" }}
    >
      <nav className="navbar navbar-expand-lg justify-content-between">
        <a
          className="navbar-brand text-light font-weight-bold text-lg pl-4 pt-2 pb-2"
          onClick={() => history.push("/")}
        >
          <img
            width="250"
            height="20"
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="logo"
          />
        </a>
        <form className="form-inline">
          {/* <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button> */}
        </form>
      </nav>
    </div>
  );
};

export default Index;
