import React, { Component } from "react";
import "./Controls.css";

export default class Controls extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="controls-container"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div>
          <div id="arraySize">CHANGE SPEED (SLOWS ON MOVING RIGHT)</div>
          <input
            id="changeSize"
            type="range"
            min="1"
            max="50"
            class="form-range"
            value={this.props.speed}
            onChange={(evt) => {
              this.props.setSpeed(evt.target.value);
            }}
          />
        </div>
        <button
          type="button"
          onClick={() => this.props.clearGrid()}
          className="btn"
        >
          CLEAR GRID
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => this.props.clearWalls()}
        >
          CLEAR WALLS
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => this.props.visualize(this.props.algo)}
        >
          {this.props.algo}
        </button>
      </div>
    );
  }
}
