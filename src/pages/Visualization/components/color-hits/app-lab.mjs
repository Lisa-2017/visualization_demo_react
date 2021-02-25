import d3 from "d3";

// Lab
const InitLab = () => {
  const mycanvas = document.querySelector("#canvasLab");
  const ctx = mycanvas.getContext("2d");
  ctx.fillText("CIE Lab的方式显示两组圆的颜色", 180, 100);
  ctx.fillText("第一排相邻圆形之间的 lab 色值的欧氏空间距离相同", 50, 170);
  ctx.fillText("第二排相邻圆形之间的亮度按 5 阶的方式递增", 50, 290);

  ctx.save();
  ctx.translate(256, 256);
  ctx.scale(1, -1);
  //第一排相邻圆形之间的 lab 色值的欧氏空间距离相同
  for (let i = 0; i < 20; i++) {
    const c = d3.lab(30, i * 15 - 150, i * 15 - 150).rgb();
    ctx.fillStyle = `rgb(${c.r}, ${c.g}, ${c.b})`;
    ctx.beginPath();
    ctx.arc((i - 10) * 20, 60, 10, 0, Math.PI * 2);
    ctx.fill();
  }
  //第二排相邻圆形之间的亮度按 5 阶的方式递增。
  for (let i = 0; i < 20; i++) {
    const c = d3.lab(i * 5, 80, 80).rgb();
    ctx.fillStyle = `rgb(${c.r}, ${c.g}, ${c.b})`;
    ctx.beginPath();
    ctx.arc((i - 10) * 20, -60, 10, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
};

export default InitLab;
