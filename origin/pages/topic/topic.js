Page({
  data: {
    latest:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://www.v2ex.com/api/topics/latest.json',
      success: function (res) {
        that.setData({ latest: res.data })
      }
    })
  },
  toDetail: function (e) {
    wx.navigateTo({
      url: '../detail/detail?id=' + e.currentTarget.id,
    })
  }
})