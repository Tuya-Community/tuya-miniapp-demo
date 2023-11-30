export default function () {
  let num = Math.random()
  return {
    series: [
      {
        name: '正确率',
        color: '#2fc25b',
        data: num,
      },
    ],
    title: {
      name: `${Math.floor(num * 100)} %`,
      fontSize: 35,
      color: '#2fc25b',
    },
  }
}
