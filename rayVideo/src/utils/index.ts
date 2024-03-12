export function getRandomBoolean(): boolean {
  return Math.random() < 0.5 // 生成一个介于 [0, 1) 之间的随机数，概率分布大致均匀
}

export function getRandomNumber(): number {
  return Math.floor(Math.random() * (300 - 200 + 1) + 200)
}

export function getRandomNumberMin(): number {
  return Math.floor(Math.random() * (200 - 100 + 1) + 100)
}

export function getRandomColor(): string {
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
