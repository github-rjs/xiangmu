// pages/movie/movie-comming-list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    comingSoonMovieList: [],
    isShowLoading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getComingSoon();
  },

  getComingSoon: function (isAdd) {
    var comingSoonUrl = "http://t.yushu.im/v2/movie/coming_soon";
    var that = this;
    var start = 0;
    if (isAdd) {
      start = that.data.comingSoonMovieList.length;
    }
    wx.request({
      url: comingSoonUrl,
      data: {
        start: start,
        count: 9
      },
      header: {
        "content-Type": "application/json"
      },
      method: "GET",
      success: function (res) {
        var oldList = that.data.comingSoonMovieList;
        for (var i = 0; i < res.data.subjects.length; i++) {
          oldList.push(res.data.subjects[i])
        }
        that.setData({
          comingSoonMovieList: oldList,
          isShowLoading: false
        });
      }
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this;
    that.setData({
      isShowLoading: true
    })
    that.getComingSoon(true)
  }
})