export default function () {
  return {
    categories: ['2018', '2019', '2020', '2021', '2022', '2023'],
    series: [
      {
        name: '曲面',
        type: 'area',
        style: 'curve',
        data: Array(6)
          .fill(0)
          .map(() => Math.floor(Math.random() * 100)),
      },
      {
        name: '柱1',
        index: 1,
        type: 'column',
        data: [40, { value: 30, color: '#f04864' }, 55, 110, 24, 58],
      },
      {
        name: '柱2',
        index: 1,
        type: 'column',
        data: Array(6)
          .fill(0)
          .map(() => Math.floor(Math.random() * 100)),
      },
      {
        name: '曲线',
        type: 'line',
        style: 'curve',
        color: '#1890ff',
        disableLegend: true,
        data: Array(6)
          .fill(0)
          .map(() => Math.floor(Math.random() * 100)),
      },
      {
        name: '折线',
        type: 'line',
        color: '#2fc25b',
        data: Array(6)
          .fill(0)
          .map(() => Math.floor(Math.random() * 100)),
      },
      {
        name: '点',
        index: 2,
        type: 'point',
        color: '#f04864',
        data: Array(6)
          .fill(0)
          .map(() => Math.floor(Math.random() * 100)),
      },
    ],
  }
}
