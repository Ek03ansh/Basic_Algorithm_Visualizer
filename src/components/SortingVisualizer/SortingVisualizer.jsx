import React, { Component } from "react";
import Controls from "./Controls/ControlsContainer";
import Body from "./Body/BodyContainer.js";
import "./SortingVisualizer.css";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";

class SortingVisualizer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.location.pathname);
  }

  render() {
    return (
      <div>
        <Header isHome={false} header={this.props.location.pathname} />
        <Controls pathname={this.props.location.pathname} />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default SortingVisualizer;
