import { Vec3 } from "../../../../utils/common/lib/math/Vec3";
// RGB的方式显示三组圆的颜色
function randomRGB() {
  return new Vec3(
    0.5 * Math.random(),
    0.5 * Math.random(),
    0.5 * Math.random()
  );
}

const InitRGB = function () {
  const mycanvas = document.querySelector("#canvasRGB");
  const ctx = mycanvas.getContext("2d");
  ctx.fillText("RGB的方式显示三组圆的颜色", 180, 160);
  ctx.save();
  ctx.translate(256, 256);
  ctx.scale(1, -1);

  // //遍历3行5列 圆心的坐标（x,y）= ((j-1)*60,(i-1)*60)
  for (let i = 0; i < 3; i++) {
    const colorVector = randomRGB();
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
  ctx.restore();
};

export default InitRGB;
