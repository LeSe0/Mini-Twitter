// React
import React from "react";
// styles
import "./styles.css";
// Route
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="miniTwitter">
      <Routes>
        {routes.map((el, i) => {
          return (
            <Route path={'/'} key={"route" + i} element = {<el.element />} />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
