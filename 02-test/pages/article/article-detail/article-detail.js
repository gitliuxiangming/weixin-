var { articles } = require('../../../data/db.js');
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
    console.log('sd',options)
    var articleId = options.articleId;
    var article = articles[articleId];
    this.data.articleId = articleId;
    this.setData(article)
    /*
      设置收藏
     */
    var articlesCollection = wx.getStorageSync("articles_collection");
    var currentIsCollented = false;
    if (articlesCollection) {
      currentIsCollented = articlesCollection[articleId];
    } else {
      var data = {};
      data[articleId] = false;
      wx.setStorageSync("articles_collection", data);
    }
    this.setData({
      currentIsCollented: currentIsCollented
    })
  },
  /**
   * 处理收藏
   */
  tapCollection: function () {
    var articlesCollection = wx.getStorageSync("articles_collection");
    var currentIsCollented = articlesCollection[this.data.articleId];
    console.log(currentIsCollented);
    //改变storage里面的值
    articlesCollection[this.data.articleId] = !currentIsCollented;
    wx.setStorageSync("articles_collection", articlesCollection);
    //改变页面渲染
    this.setData({
      currentIsCollented: !currentIsCollented
    })
  },
})