// pages/movie/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieDetail: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    var that = this;
    var detailUrl = "http://t.yushu.im/v2/movie/subject/" + id;
    wx.request({
      url: detailUrl,
      header: {
        "content-Type": "application/json"
      },
      method: "GET",
      success: function (res) {
        var detailData = res.data;
        detailData.summary = detailData.summary.replace(/\\n/g, "\n")
        that.setData({
          movieDetail: detailData
        });
        console.log(res.data)
      }
    })
  },

  onPreviewImage: function(event) {
    var imgUrl = event.currentTarget.dataset.imgUrl;
    wx.previewImage({
      urls: [imgUrl]
    })
  }

})