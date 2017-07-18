
var ft = require("../../utils/util");

Page({
//https://www.v2ex.com/api/topics/show.json?id=528
//https://www.v2ex.com/api/replies/show.json?topic_id=528
  /**
   * 页面的初始数据
   */
  data: {
    topic_id: null,
    topic_data: null,
    topic_relies: null,
    topic_created: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this
    this.setData({ topic_id: options.id})
    wx.request({
      url: 'https://www.v2ex.com/api/topics/show.json?id=' + this.data.topic_id,
      success: function (res) {
        _this.setData({ topic_data: res.data[0]})
        _this.setData({ topic_created: ft.formatUTC(new Date(res.data[0].created))})
      }
    })
    wx.request({
      url: 'https://www.v2ex.com/api/replies/show.json?topic_id=' + this.data.topic_id,
      success: function (res) {
        for (var i = 0, len = res.data.length; i<len; i++) {
          res.data[i].created = ft.formatUTC(res.data[i].created)
        }
        _this.setData({ topic_relies: res.data })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})