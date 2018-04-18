App({
  globalData: {
    site: 'unknown'
  },

  onLaunch(options) {
    const site = options.query.site
    if (site) {
      this.globalData.site = site
    }
  }
})