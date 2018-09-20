var db = require('../../data/db.js');

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
    this.setData({
      article:db.articles
    })
    // console.log(data)
  },
  /**
   * 点击跳转到详情页面
   */
  ArticleItem:function(event){
    var articleId = event.currentTarget.dataset.articleId;
    // console.log(event)
    wx.navigateTo({
      url: 'article-detail/article-detail?articleId=' + articleId,
    })
  }
})