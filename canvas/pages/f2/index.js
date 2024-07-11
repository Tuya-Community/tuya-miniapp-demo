import Render from './index.rjs'
let render

const date = new Date()
const years = []
const months = []
const days = []
const hours = []
const mins = []
const formatTimeData = function (val) {
  return ('' + val).padStart(2, '0')
}

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}

for (let i = 0; i <= 24; i++) {
  hours.push(formatTimeData(i))
}

for (let i = 0; i <= 60; i++) {
  mins.push(formatTimeData(i))
}

Page({
  data: {
    years: years,
    year: date.getFullYear(),
    months: months,
    month: 2,
    days: days,
    day: 2,
    value: [3, 1, 1],
    hours: hours,
    mins: mins,
    startHour: '00',
    startMin: '00',
    endHour: '00',
    endMin: '00',

    array: ['U.S.', 'China', 'Brazil', 'Japan', 'India', 'U.K.', 'Australia'],
    objectArray: [
      {
        id: 0,
        name: 'U.S.',
      },
      {
        id: 1,
        name: 'China',
      },
      {
        id: 2,
        name: 'Brazil',
      },
      {
        id: 3,
        name: 'Japan',
      },
    ],
    index: 0,
    multiArray: [
      [i18n.t('picker_1'), i18n.t('picker_2')],
      [
        i18n.t('picker_3'),
        i18n.t('picker_4'),
        i18n.t('picker_5'),
        i18n.t('picker_6'),
        i18n.t('picker_7'),
      ],
      [i18n.t('picker_8'), i18n.t('picker_9')],
    ],
    objectMultiArray: [
      [
        {
          id: 0,
          name: i18n.t('picker_1'),
        },
        {
          id: 1,
          name: i18n.t('picker_2'),
        },
      ],
      [
        {
          id: 0,
          name: i18n.t('picker_3'),
        },
        {
          id: 1,
          name: i18n.t('picker_4'),
        },
        {
          id: 2,
          name: i18n.t('picker_5'),
        },
        {
          id: 3,
          name: i18n.t('picker_6'),
        },
        {
          id: 4,
          name: i18n.t('picker_7'),
        },
      ],
      [
        {
          id: 0,
          name: i18n.t('picker_8'),
        },
        {
          id: 1,
          name: i18n.t('picker_9'),
        },
      ],
    ],
    multiIndex: [0, 0, 0],
    date: '2016-09-01',
    time: '12:01',
    customItem: '全部',
  },

  formatTimeData: function (val) {
    return ('' + val).padStart(2, '0')
  },
  bindChange: function (e) {
    console.log('pickerview onchange value:', e.detail.value)
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]],
      // value: val
    })
  },
  startChange: function (e) {
    const val = e.detail.value
    this.setData({
      startHour: this.data.hours[val[0]],
      startMin: this.data.hours[val[1]],
    })
  },
  endChange: function (e) {
    const val = e.detail.value
    this.setData({
      endHour: this.data.hours[val[0]],
      endMin: this.data.hours[val[1]],
    })
  },
  pickstart: function (e) {},
  pickend: function (e) {},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    render = new Render(this)
  },

  onReady() {
    this.draw()
  },

  draw() {
    render.draw([
      { genre: 'Sports', sold: Math.floor(Math.random() * 500) },
      { genre: 'Strategy', sold: Math.floor(Math.random() * 500) },
      { genre: 'Action', sold: Math.floor(Math.random() * 500) },
      { genre: 'Shooter', sold: Math.floor(Math.random() * 500) },
      { genre: 'Other', sold: Math.floor(Math.random() * 500) },
    ])
  },

  setPageOrientation() {
    ty.setPageOrientation({
      pageOrientation: 'landscape',
    })
  },
  setPageOrientation2() {
    ty.setPageOrientation({
      pageOrientation: 'portrait',
    })
  },
})
