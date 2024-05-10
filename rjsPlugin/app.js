App({
  onLaunch(options) {
    // Do something initial when launch.
    console.log('App.onLaunch', options?.referrerInfo?.extraData)
  },
  onShow(options) {
    // Do something when show.
    console.log('App.onShow', options?.referrerInfo?.extraData)
  },
})
