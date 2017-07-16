var app = getApp()
Page({
  data: {
    userInfo: {
      username: 'szy0syz'
    },
    userTopics: null
  },
  onLoad: function (options) {
    if (options.username) {
      this.getUserInfo(options.username)
      return
    }
    var that = this
    console.dir(this.data.userInfo)
    // this.setData({ userInfo: app.globalData.userInfo })
    // 不管全局中有没有都更新一遍
    this.getUserInfo('qoras')
  },
  toDetail: function (e) {
    wx.navigateTo({
      url: '../detail/detail?id=' + e.currentTarget.id,
    })
  },
  getUserInfo: function (u) {
    var that = this
    wx.request({
      url: 'https://www.v2ex.com/api/members/show.json?username=' + u,
      success: function (res) {
        console.dir(res)
        that.setData({userInfo: res.data })
      }
    })
    wx.request({
      url: 'https://www.v2ex.com/api/topics/show.json?username=' + u,
      success: function (res) {
        that.setData({userTopics: res.data })
      }
    })
  }
})
