Page({
  data: {
    isFocus: true,
  },
  wxShareText() {
    ty.share({
      type: 'WeChat',
      // title: '【text】要分享的标题',
      message: '【text】要分享的文本内容 https://www.tuya.com/cn/',
      contentType: 'text',
    })
  },
  wxShareImage() {
    ty.share({
      type: 'WeChat',
      title: '【image】要分享的标题',
      imagePath: 'assets/logo.png',
      contentType: 'image',
    })
  },
  shareText() {
    ty.share({
      type: 'More',
      title: '【text】要分享的标题',
      message: '【text】要分享的文本内容 https://www.tuya.com/cn/',
      contentType: 'text',
    })
  },

  shareImage() {
    ty.share({
      type: 'More',
      title: '【image】要分享的标题',
      imagePath: 'assets/logo.png',
      contentType: 'image',
    })
  },

  shareFile() {
    // 先下载文件再分享
    ty.downloadFile({
      url: 'https://images.tuyacn.com/rms-static/62d99f20-f4d6-11eb-b60d-0f9713885502-1628048718354.js?tyName=index.js',
      success(res) {
        console.log('downloadFile success', res)
        ty.share({
          type: 'More',
          contentType: 'file',
          filePath: res.tempFilePath,
          success(res) {
            console.log('share file success', res)
          },
          failure() {
            console.log('share file failure', res)
          },
        })
      },
      failure(res) {
        console.log('downloadFile failure', res)
      },
    })
  },

  shareFileUS() {
    // 先下载文件再分享
    ty.downloadFile({
      url: 'https://images.tuyaus.com/rms-static/3e3ad510-a369-11ed-9d99-a5aaf2a10702-1675390792930.html?tyName=1.html',
      success(res) {
        console.log('downloadFile success', res)
        ty.share({
          type: 'More',
          contentType: 'file',
          filePath: res.tempFilePath,
          success(res) {
            console.log('share file success', res)
          },
          failure() {
            console.log('share file failure', res)
          },
        })
      },
      failure(res) {
        console.log('downloadFile failure', res)
      },
    })
  },

  shareWeb() {
    ty.share({
      type: 'More',
      webPageUrl: 'https://www.tuya.com/cn/',
      title: '涂鸦智能',
      message: '让专属于你的智能产品开发-极具个性化',
      contentType: 'web',
    })
  },
})
