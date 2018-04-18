Page({
  data: {
    site: ''
  },

  onShow () {
    const app = getApp()
    this.setData({
      site: app.globalData.site
    })
  }
})