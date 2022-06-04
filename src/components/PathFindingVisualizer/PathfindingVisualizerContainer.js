import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PathfindingVisualizer from "./PathfindingVisualizer";

export default function PathfindingVisualizerContainer(props) {
  const [algo, setAlgo] = useState("");

  useEffect(() => {
    switch (props.location.pathname) {
      case "/astar":
        setAlgo("A*");
        break;
      case "/dijkstra":
        setAlgo("DIJKSTRA");
        break;
      case "/bfs":
        setAlgo("BFS");
        break;
      case "/dfs":
        setAlgo("DFS");
        break;
      default:
        setAlgo("");
        break;
    }
  }, []);

  return (
    <div>
      <Header isHome={false} header={props.location.pathname} />
      <PathfindingVisualizer algo={algo} />
      <Footer />
    </div>
  );
}
