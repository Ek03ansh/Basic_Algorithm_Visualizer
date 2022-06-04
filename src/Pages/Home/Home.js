import React from "react";
import "./Home.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Particles from "react-particles-js";

import Carousel from "react-elastic-carousel";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  const history = useHistory();
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];
  return (
    <>
      <Header />
      <div className="homePage">
        <Particles
          params={{
            polygon: {
              enable: true,
              type: "inside",
              move: {
                radius: 1,
              },
            },
          }}
          id="particles-js"
        />
        <div className="container">
          <span className="head">SEARCHING AND SORTING</span>
          <hr />
          <Carousel breakPoints={breakPoints} className="carousel-container">
            <div
              className="card two"
              onClick={() => {
                history.push("/quick_sort");
              }}
            >
              <span>QUICK SORT</span>
            </div>
            <div
              className="card three"
              onClick={() => {
                history.push("/merge_sort");
              }}
            >
              <span>MERGE SORT</span>
            </div>

            <div
              className="card one"
              onClick={() => {
                history.push("/heap_sort");
              }}
            >
              <span>HEAP SORT</span>
            </div>
            <div
              className="card two"
              onClick={() => {
                history.push("/bubble_sort");
              }}
            >
              <span>BUBBLE SORT</span>
            </div>
          </Carousel>
        </div>
        <div className="container">
          <span className="head">PATHFINDING ALGORITHMS</span>
          <hr />
          <Carousel breakPoints={breakPoints} className="carousel-container">
            <div
              className="card three"
              onClick={() => {
                history.push("/astar");
              }}
            >
              <span>A*</span>
            </div>
            <div
              className="card one"
              onClick={() => {
                history.push("/dijkstra");
              }}
            >
              <span>DIJKSTRA</span>
            </div>
            <div
              className="card two"
              onClick={() => {
                history.push("/dfs");
              }}
            >
              <span>DFS</span>
            </div>
            <div
              className="card one"
              onClick={() => {
                history.push("/bfs");
              }}
            >
              <span>BFS</span>
            </div>
          </Carousel>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
