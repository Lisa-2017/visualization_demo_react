// 或者"npm install gl-renderer"安装库再从库中引入也可以，记得要将本文件后缀改为普通js。
import GlRenderer from './lib/gl-renderer.js';
import members from './lib/members.js';
import prizes from './lib/prizes.js';
//使用GLRenderer从canvas元素创建一个WebGL的上下文环境，并执行渲染。

const InitRaffel = ()=>{
  const glDoodle = document.querySelector('#canvasRaffel');
  const doodle = new GlRenderer(glDoodle, {autoUpdate: false});
  const {width, height} = doodle.canvas;
  createWebGL( glDoodle, doodle, width, height);
}



const createWebGL = async function (glDoodle, doodle, width, height) {
  const textureCanvas = new OffscreenCanvas(width, height);
  textureCanvas.width = width;
  textureCanvas.height = height;
  const ctx = textureCanvas.getContext('2d');

  const program = await doodle.load('./lib/fragment.glsl');
  doodle.useProgram(program);
  doodle.uniforms.resolution = [width, height];

  const deno = 100;
  let taken = 0;

  const update = () => {
    const prize = prizes.shift();
    if(prize == null) return;

    const rate = prize.count / (deno - taken);
    taken += prize.count;

    console.log(rate);

    const texture = doodle.createTexture(textureCanvas.transferToImageBitmap());
    doodle.uniforms.rate = rate; // 中奖几率
    doodle.uniforms.texture = texture;
    doodle.uniforms.seed = Math.random();
    doodle.uniforms.color = [0.5 * Math.random() + 0.5, 0.5 * Math.random() + 0.5, 0.5 * Math.random() + 0.5];
    doodle.render();
    doodle.deleteTexture(texture);
    ctx.drawImage(doodle.canvas, 0, 0, width, height);
  };

  const updateBtn = document.getElementById('updateBtn');
  const user = document.getElementById('user');

  updateBtn.addEventListener('click', update);
  window.prizes = prizes;

  glDoodle.addEventListener('mousemove', (evt) => {
    const x = evt.offsetX,
      y = evt.offsetY;
    const row = Math.floor(10 * y / height);
    const col = Math.floor(10 * x / width);
    const idx = row * 10 + col;
    user.innerHTML = members[idx];
  });
}





export default InitRaffel;