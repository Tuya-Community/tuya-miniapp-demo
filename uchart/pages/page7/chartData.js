export default function () {
  return {
    categories: ['2018', '2019', '2020', '2021', '2022', '2023'],
    series: [
      {
        name: '成交量A',
        lineType: 'dash',
        data: Array(6)
          .fill(0)
          .map(() => Math.floor(Math.random() * 100)),
      },
      {
        name: '成交量B',
        data: Array(6)
          .fill(0)
          .map(() => Math.floor(Math.random() * 100)),
      },
      {
        name: '成交量C',
        data: Array(6)
          .fill(0)
          .map(() => Math.floor(Math.random() * 100)),
      },
    ],
  }
}
