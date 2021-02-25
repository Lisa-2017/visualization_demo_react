import { Vec3 } from "../../../../utils/common/lib/math/Vec3";
// 生成随机的 HSL 色相H，然后将 H 值的角度拉开，就能保证三组圆彼此之间的颜色差异比较大。

const randomHSL = () => {
  return new Vec3(
    0.5 * Math.random(), // 初始色相随机取0~0.5之间的值
    0.7, // 初始饱和度
    0.45 // 初始亮度
  );
};

const InitHSL = () => {
  const mycanvas = document.querySelector("#canvasHSL");
  const ctx = mycanvas.getContext("2d");
  ctx.fillText("HSL的方式显示三组圆的颜色", 180, 160);

  ctx.save();
  ctx.translate(256, 256);
  ctx.scale(1, -1);

  const [h, s, l] = randomHSL();
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
  ctx.restore();
};

export default InitHSL;
