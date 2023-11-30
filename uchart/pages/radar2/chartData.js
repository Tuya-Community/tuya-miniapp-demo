export default function () {
  return {
    categories: ['维度1', '维度2', '维度3', '维度4', '维度5', '维度6'],
    series: [
      {
        name: '成交量1',
        data: Array(6)
          .fill(0)
          .map(() => Math.floor(Math.random() * 200)),
      },
    ],
  }
}
