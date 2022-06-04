import { BackgroundColor } from "chalk";
import React from "react";
import "./ArrayBar.css";

export default function ArrayBar({ height, width, color, backgroundColor }) {
  const barHeight = `calc(${height}px)`;
  return (
    <div
      className="ArrayBar-container"
      style={{
        height: barHeight,
        width: width,
        color: color,
        backgroundColor: backgroundColor,
      }}
    />
  );
}
