Page({
  data: {
    site: ''
  },
  
  onLoad () {
    const app = getApp()
    this.setData({
      site: app.globalData.site
    })
  }
})