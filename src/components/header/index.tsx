import React from "react";

const Index = () => {
  return (
    <div className="position-fixed w-100" style={{ zIndex: 1 }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
        <a className="navbar-brand text-light">Navbar</a>
        <form className="form-inline">
          <input
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
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Index;
