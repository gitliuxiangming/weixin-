// pages/movie/movie.js
var { getMovieListData } = require('../../utils/utils.js')
var app =getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    var baseUrl = app.G_DATA.baseUrl;
    var inTheatersUrl = baseUrl +'/v2/movie/in_theaters?start=0&count=3';
    var comingSoonUrl = baseUrl + '/v2/movie/coming_soon?start=0&count=3';
    var top250Url = baseUrl + '/v2/movie/top250?start=0&count=3';
    getMovieListData(inTheatersUrl,function(data){
        _this.setData({
        inTheatersData:data,
        inTheatersTag:'正在热映',
        inTheatersTagType:' inTheaters'
      })
    });
    getMovieListData(comingSoonUrl, function (data) {
      _this.setData({
        comingSoonData: data,
        comingSoonTag: '即将上映',
        comingSoonTagType: ' comingSoon'
      })
    });
    getMovieListData(top250Url, function (data) {
      _this.setData({
        top250Data: data,
        top250Tag: '豆瓣Top250',
        top250TagType: ' top250'
      })
    });
  },
  getData:function(url,success){
    var _this = this;
    wx.request({
      url: url,
      header: {
        "content-type":'application/json'
      },
      success: function (res) {
        success(_this.formatData(res.data));
      }
    })
  },
  /**
   * 处理点击更多
   */
  tapmore:function(event){
    var tag = event.currentTarget.dataset.tagType;
    // console.log(tag)
    wx.navigateTo({
      url: 'movie-more/movie-more?tag = navigateTo',
    })
  }

})