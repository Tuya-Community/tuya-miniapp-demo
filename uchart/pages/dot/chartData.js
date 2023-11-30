export default function () {
  return {
    series: [
      {
        name: '散点一',
        data: Array(10)
          .fill(0)
          .map(() => {
            return Array(3)
              .fill(0)
              .map(() => Math.floor(Math.random() * 20))
          }),
      },
      {
        name: '散点二',
        data: Array(10)
          .fill(0)
          .map(() => {
            return Array(3)
              .fill(0)
              .map(() => Math.floor(Math.random() * 20))
          }),
      },
      {
        name: '散点三',
        data: Array(10)
          .fill(0)
          .map(() => {
            return Array(3)
              .fill(0)
              .map(() => Math.floor(Math.random() * 20))
          }),
      },
    ],
  }
}
