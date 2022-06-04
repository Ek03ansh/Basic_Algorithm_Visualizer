import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  useHistory,
} from "react-router-dom";
import "./Header.css";

const Header = ({ isHome = true, header = "BASIC ALGORITHM VISUALIZER" }) => {
  const history = useHistory();
  const [heading, setHeading] = useState("");
  useEffect(() => {
    switch (header) {
      case "/merge_sort":
        setHeading("MERGE SORT");
        break;
      case "/quick_sort":
        setHeading("QUICK SORT");
        break;
      case "/heap_sort":
        setHeading("HEAP SORT");
        break;
      case "/bubble_sort":
        setHeading("BUBBLE SORT");
        break;
      case "/astar":
        setHeading("A* ALGORITHM");
        break;
      case "/dijkstra":
        setHeading("DIJKSTRA ALGORITHM");
        break;
      case "/bfs":
        setHeading("BFS ALGORITHM");
        break;
      case "/dfs":
        setHeading("DFS ALGORITHM");
        break;
      default:
        setHeading("ALGORITHM VISUALIZER");
        break;
    }
  }, []);
  const homeHeader = (
    <div className="main">
      <span className="title">{heading}</span>
    </div>
  );
  const generalHeader = (
    <div
      className="main"
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <span
        className="title sub-title"
        onClick={() => {
          history.goBack();
        }}
      >
        BACK
      </span>
      <span className="title">{heading}</span>
      <span
        className="title sub-title"
        onClick={() => {
          history.push("/");
        }}
      >
        HOME
      </span>
    </div>
  );
  return isHome ? homeHeader : generalHeader;
};

export default Header;
