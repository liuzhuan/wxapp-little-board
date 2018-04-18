Page({
  data: {
    site: ''
  },
  
  onLoad () {
    const app = getApp()
    this.setData({
      site: app.globalData.site
    })
    console.log('[page on load]', Date.now())
  },

  onShow () {
    console.log('[page on show]')
  }
})