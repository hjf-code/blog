---
date: 2022-08-06
category:
    - Canvas2D
tag:
    - 入门
    - 零碎知识
---

# Canvas 基础

## 画布宽高和样式宽高

- Canvas 元素有两个宽高，一个是元素属性上的宽高(不带 px)，一个是 CSS 中的宽高(带 px)。元素属性上的宽高决定 Canvas 画布的坐标系范围，CSS 中的宽高决定 Canvas 在页面上呈现的大小。我们将前者称为画布宽高，后者称为样式宽高。
- 设计两种宽高的作用：适配不同分辨率的设备时，样式宽高可能会根据设备分辨率不同而自适应变化，而此时画布宽高一定不能跟着样式宽高发生变化，否则 Canvas 中的代码效果会彻底乱套，所以一定要设置画布宽高。

> 创建 Canvas 代码如下：

```html
<canvas width="500" height="500"> Canvas not supported </canvas>
```

## Canvas 的坐标系
