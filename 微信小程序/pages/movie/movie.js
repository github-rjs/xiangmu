// pages/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inTheatersMovieList: [],
    comingSoonMovieList: [],
    top250MovieList: [],
    searchMovieList: [],
    isShowLoading: false,
    isSearching: false,
    isSearchEmpty: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.getInTheaters();
    that.getComingSoon();
    that.getTop250(false);
  },

  goShowMore: function() {
    wx.navigateTo({
      url: "/pages/movie/movie-comming-list",
    })
  },

  getInTheaters: function() {
    var that = this;
    var inTheatersUrl = "http://t.yushu.im/v2/movie/in_theaters?count=5";
    wx.request({
      url: inTheatersUrl,
      header: {
        "content-Type": "application/json"
      },
      method: "GET",
      success: function(res) {
        that.setData({
          inTheatersMovieList: res.data.subjects
        });
      }
    })
  },

  getComingSoon: function() {
    var that = this;
    var comingSoonUrl = "http://t.yushu.im/v2/movie/coming_soon?count=3";
    wx.request({
      url: comingSoonUrl,
      header: {
        "content-Type": "application/json"
      },
      method: "GET",
      success: function(res) {
        that.setData({
          comingSoonMovieList: res.data.subjects
        });
      }
    })
  },

  getTop250: function (isAdd) {
    var that = this;
    var top250Url = "http://t.yushu.im/v2/movie/top250";
    var start = 0;
    if (isAdd) {
      start = this.data.top250MovieList.length;
    }
    wx.request({
      url: top250Url,
      data: {
        start: start,
        count: 9
      },
      header: {
        "content-Type": "application/json"
      },
      method: "GET",
      success: function (res) {
        var oldList = that.data.top250MovieList;
        for (var i = 0; i < res.data.subjects.length; i ++) {
          oldList.push(res.data.subjects[i])
        }
        that.setData({
          top250MovieList: oldList,
          isShowLoading: false
        });
      }
    })
  },

  getSearch: function (searchInput) {
    var that = this;
    var searchUrl = "http://t.yushu.im/v2/movie/search";

    wx.request({
      url: searchUrl,
      data: {
        q: searchInput
      },
      header: {
        "content-Type": "application/json"
      },
      method: "GET",
      success: function (res) {
        var isSearchEmpty = false;
        if (res.data.subjects.length == 0) {
          isSearchEmpty = true;
        }
        that.setData({
          searchMovieList: res.data.subjects,
          isSearchEmpty: isSearchEmpty
        });
      }
    })
  },

  onImageError: function(event) {
    const errorImg = "../../images/error_img.jpg";
    var currentObj = event.currentTarget.dataset;
    var imgType = currentObj.imgType;
    switch(imgType) {
      case "inTheatersMovieList":
        var inTheatersMovieList = this.data.inTheatersMovieList;
        inTheatersMovieList[currentObj.index].images.large = errorImg;
        this.setData({
          inTheatersMovieList: inTheatersMovieList
        })
        break;
      case "comingSoonMovieList":
        var comingSoonMovieList = this.data.comingSoonMovieList;
        comingSoonMovieList[currentObj.index].images.large = errorImg;
      this.setData({
        comingSoonMovieList: comingSoonMovieList
      })
      break;
    case "top250MovieList":
      var top250MovieList = this.data.top250MovieList;
      top250MovieList[currentObj.index].images.large = errorImg;
      this.setData({
        top250MovieList: top250MovieList
      })
      break;
    };
  },

  onOpenMovie: function(event) {
    var movieId = event.currentTarget.dataset.movieId;
    wx.navigateTo({
      url: "/pages/movie/movie-detail?id=" + movieId
    })
  },

  onReachBottom: function(event) {
    var that = this;
    that.setData({
      isShowLoading: true
    })
    that.getTop250(true)
  },

  onInputSearch: function(event) {
    var that = this;
    var inputValue = event.detail.value;
    if (inputValue) {
      that.getSearch(inputValue);
      that.setData({
        isSearching: true
      })
    } else {
      that.setData({
        searchMovieList: [],
        isSearching: false
      })
    }
  }

})