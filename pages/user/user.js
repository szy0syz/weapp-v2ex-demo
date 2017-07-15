var app = getApp()
Page({
  data: {
    userInfo: null
  },
  //事件处理函数
  bindViewTap: function () {

  },
  onLoad: function () {
    var that = this
    console.dir(this.data.userInfo)
    this.setData({ userInfo: app.globalData.userInfo })
    if (!this.data.userInfo.username) {
      wx.request({
        url: 'https://www.v2ex.com/api/members/show.json?username=' + app.globalData.default.username,
        success: function (res) {
          console.dir(res)
          that.setData({ userInfo: res.data})
          app.globalData.userInfo  = res.data
        }
      })
    } else {
      that.setData({ userInfo: app.globalData.userInfo})
    }
  }
})
