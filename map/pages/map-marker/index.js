const markers = [
  {
    id: 1,
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
      textAlign: 'center',
    },
  },
  {
    id: 2,
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
      textAlign: 'center',
    },
  },
]

Page({
  data: {
    latitude: 39.908775,
    longitude: 116.406315,
    scale: 8,
    markers: markers,
    isDeleteMarker: false,
    isShowCallout: false,
  },

  onReady: function () {
    this.mapCtx = ty.createMapContext('myMap')
  },
  addMarker() {
    let self = this
    self.mapCtx.getCenterLocation({
      success: function (res) {
        console.log('getCenterLocation success', res)
        self.mapCtx.addMarkers({
          markers: [
            {
              id: Date.now(),
              callout: {
                content: Date.now(),
              },
              ...res,
              iconPath: '/assets/marker.png',
            },
          ],
          clear: false,
        })
      },
      fail: function (res) {
        console.log('getCenterLocation fail', res)
      },
    })
  },

  toggleDetlteMarker() {
    this.setData({
      isDeleteMarker: !this.data.isDeleteMarker,
    })
  },
  toggleShowCallout() {
    this.setData({
      isShowCallout: !this.data.isShowCallout,
    })
  },
  markertap(e) {
    console.log('demo 地图 markertap 事件触发', e)
    const { markerId } = e.detail
    console.log('first', this.data.isDeleteMarker, {
      markerIds: [markerId],
      clear: false,
    })
    if (this.data.isDeleteMarker) {
      this.mapCtx.removeMarkers({
        markerIds: [markerId],
        clear: false,
      })
    }
  },

  callouttap(e) {
    console.log('demo 地图 callouttap 事件触发', e, e.detail.markerId)
  },
})
