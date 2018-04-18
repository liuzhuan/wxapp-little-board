App({
  globalData: {
    site: 'unknown'
  },

  onLaunch(options) {
    const site = options.query.site
    if (site) {
      this.globalData.site = site
    }
  },

  onShow(options) {
    const site = options.query.site
    if (site) {
      this.globalData.site = site
    }
    console.log('[app on show]')
  }
})