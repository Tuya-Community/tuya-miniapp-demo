const markers = [{
  id: 1,
  latitude: 39.908775,
  longitude: 116.406315,
  name: '王府井',
  iconPath: '/assets/images/marker.png',
  callout: {
    content: '王府井',
    color: '#ffffff',
    fontSize: 12,
    bgColor: '#5C91F6',
    padding: 4,
    borderRadius: 35,
    anchorY: -8
  },
}, {
  id: 2,
  latitude: 39.927761,
  longitude: 116.391467,
  name: '北海公园',
  iconPath: '/assets/images/marker.png',
  callout: {
    content: '北海公园北海公园北海公园北海公园北海公园北海公园北海公园北海公园北海公园',
    color: '#ff0000',
    fontSize: 12,
    bgColor: '#fff',
    padding: 4,
    borderRadius: 35,
    anchorY: -8
  },
}, {
  id: 3,
  latitude: 39.918203,
  longitude: 116.396923,
  name: '故宫',
  iconPath: '/assets/images/marker.png',
  callout: {
    content: '故宫',
    color: '#ffffff',
    fontSize: 12,
    bgColor: '#5C91F6',
    padding: 4,
    borderRadius: 35,
    anchorY: -8
  },
}]

Page({
  data: {
    latitude1: 39.908775,
    longitude1: 116.406315,
    scale1: 12,
    // markers1: markers.slice(0,2),
    markers1: markers,
    tagTop: 20,
    height: 40,
    isShow: false,
    showDialog: false,
    buttons: [{
      text: '取消'
    }, {
      text: '确定'
    }],
    marginTop: 0,
    value: 10,
    polyline:[
      {
        points:[
          {  
            latitude: 39.907689,
            longitude: 116.16366,
          },
          {
            latitude: 39.91890,
            longitude: 116.193488
          },
          {  
            latitude: 39.90900,
            longitude: 116.397787
          }
        ],
        width: 2,
        borderColor:"#008000", // 绿色
        color:"#0000FF", // 蓝色
        dottedLine: false
      }
    ],
    circles:[
      {
        latitude: 39.927761,
        longitude: 116.391467,
        color: "#800080", // 紫色
        fillColor: "#cccccccc",
        radius: 1000,
        strokeWidth: 2
      }
    ],
    polygons:[
      {
        points:[
          { 
            latitude: 39.908775,
            longitude: 116.406315,
          },
          { 
            latitude: 39.927761,
            longitude: 116.481667
          },
          { 
            latitude: 39.918203,
            longitude: 116.396923
          }
        ],
        strokeWidth: 2,
        strokeColor:"#FF0000", // 红色
        fillColor:"#FFFF00", // 黄色
      }
    ],
    coverTop: 150
  },
  onReady: function () {
    this.mapCtx = ty.createMapContext('myMap')
    console.log('demo onReady', this.mapCtx)
    // ty.nativeDisabled({
    //   nativeDisabled:true
    // })

    // ty.nativeDisabled(true)

  },
  jumpToTab1: function (e) {
    ty.navigateTo({
      url: '/pages/tab1/index',
    });
  },
  jumpToTab2: function (e) {
    ty.navigateTo({
      url: '/pages/tab2/index',
    });
  },
  jumpToTab3: function (e) {
    ty.navigateTo({
      url: '/pages/tab3/index',
    });
  },
  jumpToMapTabs: function (e) {
    ty.navigateTo({
      url: '/pages/map-tabs/index',
    });
  },
  changeMapPos: function (e) {
    console.log('changeMapPos', e)
    this.setData({
      marginTop: this.data.marginTop + 10
    })
  },
  changeCoverPos: function (e) {
    console.log('changeCoverPos', e)
    this.setData({
      coverTop: this.data.coverTop + 5
    })
  },
  changeTag2: function (e) {
    this.setData({
      tagTop: this.data.tagTop + 20,
      // height: this.data.height + 10
      isShow: true
    })
  },
  openConfirm: function () {
    ty.nativeDisabled(true)
    this.setData({
      dialogShow: true,
      value: this.data.value + 10
    })
  },
  changeLngLat: function (e) {
    if(this.data.latitude1 === 39.908775){
      this.setData({
        latitude1: 39.97334,
        longitude1: 116.417403,
      }, () => {
        console.log("demo 经纬度改变", e, this)
      })
    } else {
      this.setData({
        latitude1: 39.908775,
        longitude1: 116.406315,
      }, () => {
        console.log("demo 经纬度改变", e, this)
      })
    }
  },
  scaleIn: function () {
    this.setData({
      scale1: this.data.scale1 + 1
    })
    console.log('scale', this.data.scale1)
  },
  scaleOut: function () {
    this.setData({
      scale1: this.data.scale1 - 1
    })
    console.log('scale', this.data.scale1)
  },
  scale: function () {
    this.setData({
      scale1: this.data.scale1
    })
    console.log('scale', this.data.scale1)
  },
  changeMarkers: function () {
    for (let index = 0; index < markers.length; index++) {
      markers[index].iconPath = 'https://static1.tuyacn.com/static/mini-wechat/estate-mp/mark_f9f42284.png'
    }
    this.setData({
      markers1: markers
    }, () => {
      console.log('setData markers', this.data.markers1)
    })
  },
  apiAddMarkers: function () {
    this.mapCtx.addMarkers({
      markers: [ markers[2] ],
      clear: false,
      success: (res) => {
        console.log('success addMarkers', res)
      },
      fail: (res) => {
        console.log('fail addMarkers', res)
      },
      complete: (res) => {
        console.log('complete addMarkers', res)
      },
    })
  },
  apiRemoveMarkers: function () {
    this.mapCtx.removeMarkers({
      markerIds: [1, 2, 3],
      success: (res) => {
        console.log('success removeMarkers', res)
      },
      fail: (res) => {
        console.log('fail removeMarkers', res)
      },
    })
  },
  apiGetCenterLocation: function (e) {
    console.log('demo 执行 getCenterLocation API', e)
    this.mapCtx.getCenterLocation({
      success: (res) => {
        // res属性longitude,latitude
        console.log("demo getCenterLocation success 回调函数触发", res)
      },
      fail: (res) => {
        console.log("demo getCenterLocation fail 回调函数触发", res)
      },
    })
  },
  apiMoveToLocation: function (e) {
    console.log('demo 执行 moveToLocation API', e)
    this.mapCtx.moveToLocation({
      longitude: '121.138398',
      latitude: '30.972688',
      success: (res) => {
        console.log("demo moveToLocation success 回调函数触发", res)
      },
      fail: (res) => {
        console.log("demo moveToLocation fail 回调函数触发", res)
      },
    })
  },
  apiGetScale: function () {
    this.mapCtx.getScale({
      success: (res) => {
        console.log("demo getScale success 回调函数触发", res)
      },
      fail: (res) => {
        console.log("demo getScale fail 回调函数触发", res)
      },
    })
  },
  clickTag: function (e) {
    console.log('demo 热区标签 tap 事件触发', e)
  },
  handleTouchStart: function (e) {
    console.log('demo 热区模块 touchstart 触发', e)
  },
  handleTap: function (e) {
    console.log('demo 地图 tap 事件触发', e)
  },
  handleMarkertap: function (e) {
    console.log('demo 地图 markertap 事件触发', e)
  },
  handleCallouttap: function (e) {
    console.log('demo 地图 callouttap 事件触发', e)
  },
  handleRegionchange: function (e) {
    console.log('handleRegionchange', e)
  },
  
  handleInitdone: function (e) {
    console.log('handleInitdone', e)
  },
  tapDialogButton(e) {
    ty.nativeDisabled(false)
    this.setData({
      dialogShow: false,
    })
  },
  changeCircles(e) {
    console.log('demo 地图 changeCircles', e)

    this.setData({
      circles:[
        {
          latitude: 39.927761,
          longitude: 116.391467,
          color:"#ff5800",
          fillColor:"#c55500",
          radius:2000,
          strokeWidth:20
        }
      ],
    });
  },
  changePolygons(e) {
    console.log('demo 地图 changePolygons', e)

  },
  changePolyline(e) {
    console.log('demo 地图 changePolyline', e)
  },
  moveAlong(e) {
    console.log('demo 地图 moveAlong', e)
    this.mapCtx.moveAlong({
      markerId: 1,
      path: [
        {  latitude: 39.908775,
          longitude: 116.406315,
        },
        {latitude: 39.927761,
            longitude: 116.381467},
        {  latitude: 39.918203,
            longitude: 116.396923}
      ],
      duration:5,
      success: (res) => {
        console.log('success ', res)
      },
      fail: (res) => {
        console.log('fail ', res)
      },
      complete: (res) => {
        console.log('complete', res)
      },
    });
  }
})
