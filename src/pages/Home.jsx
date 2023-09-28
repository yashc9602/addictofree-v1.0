import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="navigation">
      <h1>Homepage</h1>
      <p className="headline">

      </p>
      <ul>
        <li>
          <Link to="/">Home1</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
