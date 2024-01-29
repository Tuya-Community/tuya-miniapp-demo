import { generateRandomPoint, generateRandomPoints, getRandomColor } from '../../utils/index'
const markers = [
  {
    id: 1,
    latitude: 39.908775,
    longitude: 116.406315,
    name: '王府井',
    iconPath: '/assets/marker.png',
    callout: {
      content: '王府井',
      color: '#ffffff',
      fontSize: 12,
      bgColor: '#5C91F6',
      padding: 4,
      borderRadius: 35,
      anchorY: -8,
    },
  },
  {
    id: 2,
    latitude: 39.927761,
    longitude: 116.391467,
    name: '北海公园',
    iconPath: '/assets/marker.png',
    callout: {
      content: '北海公园北海公园北海公园北海公园北海公园北海公园北海公园北海公园北海公园',
      color: '#ff0000',
      fontSize: 12,
      bgColor: '#fff',
      padding: 4,
      borderRadius: 35,
      anchorY: -8,
    },
  },
  {
    id: 3,
    latitude: 39.918203,
    longitude: 116.396923,
    name: '故宫',
    iconPath: '/assets/marker.png',
    callout: {
      content: '故宫',
      color: '#ffffff',
      fontSize: 12,
      bgColor: '#5C91F6',
      padding: 4,
      borderRadius: 35,
      anchorY: -8,
    },
  },
]

const getPolygons = function (latitude, longitude, radiusInMeters = 1000, numberOfPoints = 1) {
  let points1 = generateRandomPoints(latitude, longitude, radiusInMeters, numberOfPoints)
  let points2 = generateRandomPoints(latitude, longitude, radiusInMeters, numberOfPoints)
  let polygons = [
    {
      points: points1,
      strokeColor: getRandomColor(),
      fillColor: getRandomColor(),
      strokeWidth: 1,
    },
    {
      points: points2,
      strokeColor: getRandomColor(),
      fillColor: getRandomColor(),
      strokeWidth: 1,
    },
  ]
  return polygons
}

Page({
  data: {
    latitude: 39.908775,
    longitude: 116.406315,
    scale: 12,
    markers: markers,
    circles: [
      {
        latitude: 39.927761,
        longitude: 116.391467,
        color: '#800080', // 紫色
        fillColor: '#cccccc',
        radius: 1000,
        strokeWidth: 2,
      },
    ],
    polygons: [
      {
        points: [
          {
            latitude: 39.908775,
            longitude: 116.406315,
          },
          {
            latitude: 39.927761,
            longitude: 116.481667,
          },
          {
            latitude: 39.918203,
            longitude: 116.396923,
          },
        ],
        strokeWidth: 2,
        strokeColor: '#FF0000', // 红色
        fillColor: '#FFFF00', // 黄色
      },
    ],
  },

  updateCircle: function () {
    let pos1 = generateRandomPoint(this.data.latitude, this.data.longitude, 1000)
    let pos2 = generateRandomPoint(this.data.latitude, this.data.longitude, 1000)
    let circles = [
      {
        ...pos1,
        color: getRandomColor(),
        fillColor: getRandomColor(),
        radius: 500,
        strokeWidth: 2,
      },
      {
        ...pos2,
        color: getRandomColor(),
        fillColor: getRandomColor(),
        radius: 100,
        strokeWidth: 1,
      },
    ]
    this.setData({
      circles,
    })
  },

  updatePolygons: function () {
    let polygons = getPolygons(this.data.latitude, this.data.longitude, 3000, 4)
    this.setData({
      polygons: polygons,
    })
  },
})
