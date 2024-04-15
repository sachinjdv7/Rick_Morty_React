import React from "react";

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          Rick & Morty <span className="text-blue-500">Wiki</span>
        </a>
      </div>
      <div className="flex-none gap-2">
        <a className="btn btn-ghost">Link 1</a>
        <a className="btn btn-ghost">Link 2</a>
        <a className="btn btn-ghost">Link 3</a>
      </div>
    </div>
  );
}

export default Navbar;
