import React from "react";
import FlowChart from "react-simple-flowchart";

const options = {
  x: 0,
  y: 0,
  "line-width": 3,
  "line-length": 50,
  "text-margin": 10,
  "font-size": 14,
  "font-color": "white",
  "line-color": "#222831",
  "element-color": "1e9ba0",
  fill: "var(--primary-dark)",
  "yes-text": "yes",
  "no-text": "no",
  "arrow-end": "block",
  scale: 1,
  symbols: {
    start: {
      "font-color": "white",
      "element-color": "#1e9ba0",
      "font-weight": "bold"
    },
    end: {
      "font-color": "white",
      "element-color": "#1e9ba0",
      "font-weight": "bold"
    }
  }
};

export const FlowWrapper = props => {
  const code = props.code.reduce((prev, current) => {
    return `${prev}
    ${current}`;
  }, ``);
  return <FlowChart chartCode={code} options={options} />;
};
