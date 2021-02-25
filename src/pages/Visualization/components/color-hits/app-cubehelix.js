// import { cubehelix } from "../../../../utils/common/lib/color/cubehelix/index.js";
import {cubehelix} from 'cubehelix';
// 在.mjs中无法使用import导入npm 库中的模块，但在.js文件中正常。
// 但是 在.mjs文件中 可以使用import导入本地模块文件。所以以上两种方式均可


/**
 * 因为本案例中使用了requestAnimationFrame ，所以会出现闪烁的情况, 使用save方法保存canvas状态可解决
 * 闪烁原因：TODO暂无理论支持
 * @param t 初始时间
 */
const InitCubeHelix = (t) => {
  const canvas = document.querySelector("#canvasCube");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 512, 512);

  ctx.save()
  ctx.fillStyle=`rgb(256,256,256)`;
  ctx.fillText("CubeHelix的方式显示彩色rect", 180, 100);
  ctx.restore()

  ctx.save()
  const color = cubehelix(); // 构造cubehelix色盘颜色映射函数
  const T = 2000;
  const p = 0.5 + 0.5 * Math.sin(t / T);
  ctx.translate(0, 256);
  ctx.scale(1, -1);
  const { r, g, b } = color(p);
  ctx.fillStyle = `rgb(${255 * r},${255 * g},${255 * b})`;
  ctx.beginPath();
  ctx.rect(20, -20, 480 * p, 40);
  ctx.fill();
  ctx.restore();
  window.ctx = ctx;
  window.requestAnimationFrame(InitCubeHelix);

};

export default InitCubeHelix;
