// 要绘制的矩形
const rect = {
	width: 100,
	height: 100,
};
const canvas = document.querySelector('canvas')!;
const context = canvas.getContext('2d')!;
// 暂存画布状态
context.save();
// 向左上角平移画布，这样方便计算绘制顶点的坐标
context.translate(-0.5 * rect.width, -0.5 * rect.height);
// 设置填充色
context.fillStyle = '#3eaf7c';
// 开始绘制路径
context.beginPath();
// 绘制一个矩形，参数为：x坐标，y坐标，宽，高
context.rect(0.5 * canvas.width, 0.5 * canvas.height, 100, 100);
// 将绘制的内容填充到画布上
context.fill();
// 恢复画布状态为暂存时的状态
context.restore();
