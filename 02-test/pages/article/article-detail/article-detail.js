var { articles } = require('../../../data/db.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlayMusic:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
    /**
     * 监听音乐播放
     */
    var _this = this;
    var music = wx.getBackgroundAudioManager();
    music.onPlay(function(){
      _this.setData({
        isPlayMusic: true
      })
    })
    music.onPause(function () {
      _this.setData({
        isPlayMusic: false
      })
    })
  },
  /**
   * 处理收藏
   */
  tapCollection: function () {
    var _this = this;
    var articlesCollection = wx.getStorageSync("articles_collection");
    var currentIsCollented = articlesCollection[this.data.articleId];
    // console.log(currentIsCollented);
    //改变storage里面的值
    articlesCollection[this.data.articleId] = !currentIsCollented;
    wx.setStorageSync("articles_collection", articlesCollection);
    //改变页面渲染
    this.setData({
      currentIsCollented: !currentIsCollented
    })
    
    wx.showToast({
      title: currentIsCollented ? '取消收藏' :'收藏成功',
    })
    
    /*
    wx.showModal({
      title: currentIsCollented ? '取消收藏' : '收藏成功',
      success:function(res){
        if(res.confirm){
          articlesCollection[_this.data.articleId] = !currentIsCollented;
          wx.setStorageSync("articles_collection", articlesCollection);
          //改变页面渲染
          _this.setData({
            currentIsCollented: !currentIsCollented
          })
        }
      }
    })
    */
  },
  /**
   * 处理分享
   */
  tapShare:function(){
    var itemList = ['分享到微博', '分享到QQ', '分享到朋友圈',];
    wx.showActionSheet({
      itemList: itemList,
      success:function(res){
        var item = itemList[res.tapIndex];
        wx.showToast({
          title: item+'成功',
        })
      }
    })
  },
  /**
   * 处理音乐播放
   */
  tapMusic:function(){
    var music = wx.getBackgroundAudioManager();
    var isPlayMusic = this.data.isPlayMusic;
    if(isPlayMusic){
      music.pause()
      this.setData({
        isPlayMusic:false
      })
     
    }else{
      music.src = this.data.music.src;
      music.title = this.data.music.title;
      music.coverImgUrl = this.data.music.coverImgUrl;
      music.play()
      this.setData({
        isPlayMusic: true
      })
      
    }


  }
})