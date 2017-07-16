//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    hot: []
  },
  onLoad: function () {
    var that = this
    wx.request({
      url: 'https://www.v2ex.com/api/topics/hot.json',
      success: function (res) {
        that.setData({hot: res.data})
      }
    })
  },
  toDetail: function (e) {
    wx.navigateTo({
      url: '../detail/detail?id=' + e.currentTarget.id
    })
  },
  toProfile: function (e) {
    // wx.redirectTo({
    //   url: '../user/user?username=' + e.currentTarget.id
    // })
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})
