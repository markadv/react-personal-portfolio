import React, { Component } from "react";
import Board from "./minesweeper/Board";

export default class MineSweeper extends Component {
  state = { heigh: 8, width: 8, mines: 10 };
  render() {
    const { height, width, mines } = this.state;
    return (
      <div>
        <Board height={height} width={width} mines={mines} />
      </div>
    );
  }
}
