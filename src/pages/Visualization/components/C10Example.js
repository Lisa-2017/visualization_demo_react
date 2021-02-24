import React, { Component } from "react";
import { cubehelix } from "cubehelix";
import { Vec3 } from "../../../utils/common/lib/math/Vec3";
import "../index.css";

export default class C10Example extends Component {
  componentDidMount() {
    this.InitRGB();
    this.InitHSL();
    this.InitCube();
  }

  constructor(props) {
    super(props);
    this.randomRGB = this.randomRGB.bind(this);
    this.InitRGB = this.InitRGB.bind(this);
    this.randomRGB = this.randomHSL.bind(this);
    this.InitHSL = this.InitHSL.bind(this);
    this.CubeUpdate = this.CubeUpdate.bind(this);
    this.InitCube = this.InitCube.bind(this);
  }

  // RGB的方式显示三组圆的颜色
  randomRGB() {
    return new Vec3(
      0.5 * Math.random(),
      0.5 * Math.random(),
      0.5 * Math.random()
    );
  }

  InitRGB() {
    const mycanvas = document.querySelector("#canvasRGB");
    const ctx = mycanvas.getContext("2d");
    ctx.fillText("RGB的方式显示三组圆的颜色", 50, 100);

    ctx.translate(256, 256);
    ctx.scale(1, -1);

    // //遍历3行5列 圆心的坐标（x,y）= ((j-1)*60,(i-1)*60)
    for (let i = 0; i < 3; i++) {
      const colorVector = this.randomRGB();
      for (let j = 0; j < 5; j++) {
        const c = colorVector.clone().scale(0.5 + 0.25 * j); // 5个圆乘不同比率 呈现出不同的亮度
        ctx.fillStyle = `rgb(${Math.floor(c[0] * 256)},${Math.floor(
          c[1] * 256
        )},${Math.floor(c[2] * 256)})`; //赋值颜色
        ctx.beginPath();
        ctx.arc((j - 2) * 60, (i - 1) * 60, 20, 0, 2 * Math.PI);
        ctx.fill();
      }
    }
  }

  // 生成随机的 HSL 色相 H，然后将 H 值的角度拉开，就能保证三组圆彼此之间的颜色差异比较大。

  randomHSL() {
    return new Vec3(
      0.5 * Math.random(), // 初始色相随机取0~0.5之间的值
      0.7, // 初始饱和度
      0.45 // 初始亮度
    );
  }

  InitHSL() {
    const mycanvas = document.querySelector("#canvasHSL");
    const ctx = mycanvas.getContext("2d");
    ctx.fillText("HSL的方式显示三组圆的颜色", 50, 100);

    ctx.translate(256, 256);
    ctx.scale(1, -1);

    const [h, s, l] = this.randomHSL();

    for (let i = 0; i < 3; i++) {
      const p = (i * 0.25 + h) / 1;
      for (let j = 0; j < 5; j++) {
        const d = j - 2;
        ctx.fillStyle = `hsl(${Math.floor(p * 360)},${Math.floor(
          (0.15 * d + s) * 100
        )}%,${Math.floor((0.12 * d + l) * 100)}%)`;
        ctx.beginPath();
        ctx.arc((j - 2) * 60, (i - 1) * 60, 20, 0, 2 * Math.PI);
        ctx.fill();
      }
    }
  }

  // Cubehelix 颜色表示法的应用
  CubeUpdate(t) {
    const mycanvas = document.querySelector("#canvasCube");
    const ctx = mycanvas.getContext("2d");
    // ctx.fillText("Cubehelix 的应用", 50, 100);
    ctx.translate(0, 256);
    // ctx.translate(0, 75);
    ctx.scale(1, -1);

    const color = cubehelix(); // 构造cubehelix色盘颜色映射函数
    const T = 2000;
    const p = 0.5 + 0.5 * Math.sin(t / T);

    ctx.clearRect(0, -256, 512, 400);
    // ctx.clearRect(0, -75, 300, 140);
    const { r, g, b } = color(p);
    ctx.fillStyle = `rgb(${255 * r},${255 * g},${255 * b})`;

    ctx.save();
    ctx.beginPath();
    ctx.rect(20, -20, 480 * p, 40);
    // ctx.rect(10, -20, 260 * p, 30);
    ctx.fill();
    ctx.restore();

    window.ctx = ctx;
    window.requestAnimationFrame(this.CubeUpdate);
  }

  InitCube() {
    this.CubeUpdate(0);
  }

  render() {
    return (
      <div className="wraper tc">
        <h1>10 | 图形系统如何表示颜色？</h1>
        <div>
          {/* <p> RGB的方式显示三组圆的颜色 </p> */}
          <canvas id="canvasRGB" width="512" height="512"></canvas>
        </div>
        <div>
          {/* <p> HSL的方式显示三组圆的颜色 </p> */}
          <canvas id="canvasHSL" width="512" height="512"></canvas>
        </div>
        <div>
          {/* <p>Cubehelix 的应用 </p> */}
          <canvas
            className="bg_black"
            id="canvasCube"
            width="300"
            height="150"
          ></canvas>
        </div>
      </div>
    );
  }
}
