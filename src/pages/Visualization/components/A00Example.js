import React, { Component } from "react";
// import {InitRaffel} from "./raffelByGPU/app-raffelByGPU.mjs";
import "../index.css";
export default class Visualization extends Component {
  render() {
    return (
      <div className="wraper">
        <h1>用GPU来实现一个抽奖程序</h1>
        <div>暂时跑不起来 -- 下次再研究原因</div>
        {/* <div>
          <button id="updateBtn">抽奖</button><span id="user"></span>
        </div>
        <canvas className="bg_black" id="canvasLottery" width='512' height='512'></canvas> */}
      </div>
    );
  }
}
