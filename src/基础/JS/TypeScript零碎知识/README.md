---
date: 2022-08-09
category:
  - TypeScript
tag:
  - 零碎知识
---

# TypeScript零碎知识

## 1. 非空断言

当明确知道某个值不可能为undefined或null时，可以在变量后面加上一个**叹号!**(非空断言符号)来告诉编译器：“嘿！相信我，我确信这个值不为空！”。

```ts
// 结尾不带!，相当于：const canvas: HTMLCanvasElement | null
const canvas = document.querySelector('canvas');
// 结尾带!，相当于：const canvas: HTMLCanvasElement
const canvas = document.querySelector('canvas')!;
```
