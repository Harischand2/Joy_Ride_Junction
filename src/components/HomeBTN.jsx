import React from "react";
import { Link } from "react-router-dom";
function GetStarted() {
  return (
    <Link to="/mood">
      <button className="getstarted_btn" type="submit">
        Get Started!
      </button>
    </Link>
  );
}
export default GetStarted;
