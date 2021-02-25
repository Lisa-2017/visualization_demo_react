import React, { Component } from "react";
import {
  InitRGB,
  InitHSL,
  InitLab,
  InitCubeHelix,
} from "./color-hits/index.js";
import "../index.css";

export default class C10Example extends Component {
  componentDidMount() {
    InitRGB();
    InitHSL();
    InitLab();
    InitCubeHelix(0);
  }

  render() {
    return (
      <div className="tc">
        <h2>10 | 图形系统如何表示颜色？</h2>
        {/* <p> RGB的方式显示三组圆的颜色 </p> */}
        <canvas id="canvasRGB" width="512" height="512"></canvas>

        {/* <p> HSL的方式显示三组圆的颜色 </p> */}
        <canvas id="canvasHSL" width="512" height="512"></canvas>

        <br />

        {/* <p> CIELab的方式显示两组圆的颜色 </p> */}
        <canvas
          className="bg_gray"
          id="canvasLab"
          width="512"
          height="512"
        ></canvas>

        {/* <p>Cubehelix 的应用 </p> */}
        <canvas
          className="bg_black"
          id="canvasCube"
          width="512"
          height="512"
        ></canvas>
        {
          // 备注：尽量添加 save和restore方法 去保存canvas的状态
          // save() 是 Canvas 2D API 通过将当前状态放入栈中，保存 canvas 全部状态的方法。
          // 尤其是和动画相关的，为了防止屏幕闪烁，请务必添加！！！
        }
        <br />
      </div>
    );
  }
}
