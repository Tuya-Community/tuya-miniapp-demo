export default function () {
  return {
    categories: ['2018', '2019', '2020', '2021', '2022', '2023'],
    series: [
      {
        name: '成交量A',
        data: Array(6)
          .fill(0)
          .map(() => Math.floor(Math.random() * 100)),
      },
    ],
  }
}
