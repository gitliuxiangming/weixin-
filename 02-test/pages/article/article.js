Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: [
      {
        title: '文章一',
        date: '2108-09-19',
        image: '../../images/avatar/1.jpg',
        content: "'我们这一代人，人称'老三届'",
        guanzhu: '18',
        view: '88',
      },
      {
        title: '文章二',
        date: '2108-09-10',
        image: '../../images/avatar/1.jpg',
        content: "第二篇文章",
        guanzhu: '8',
        view: '58',
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('onReachBottom')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('onShareAppMessage')
  }
})