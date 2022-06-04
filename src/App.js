import React from "react";
import "./App.css";
import HomePage from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SortingVisualizer from "./components/SortingVisualizer/SortingVisualizerContainer";
import PathfindingVisualizer from "./components/PathFindingVisualizer/PathfindingVisualizerContainer";
import ScrollToTop from "./ScrollToTop";
function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/merge_sort" component={SortingVisualizer} />
          <Route exact path="/quick_sort" component={SortingVisualizer} />
          <Route exact path="/heap_sort" component={SortingVisualizer} />
          <Route exact path="/bubble_sort" component={SortingVisualizer} />
          <Route exact path="/astar" component={PathfindingVisualizer} />
          <Route exact path="/dijkstra" component={PathfindingVisualizer} />
          <Route exact path="/bfs" component={PathfindingVisualizer} />
          <Route exact path="/dfs" component={PathfindingVisualizer} />
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
