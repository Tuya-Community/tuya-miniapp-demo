export default function () {
  return {
    series: [
      {
        data: [
          { name: '一班', value: Math.floor(Math.random() * 100) },
          { name: '二班', value: Math.floor(Math.random() * 100) },
          { name: '三班', value: Math.floor(Math.random() * 100) },
          { name: '四班', value: Math.floor(Math.random() * 100) },
          { name: '五班', value: Math.floor(Math.random() * 100) },
        ],
      },
    ],
  }
}
