// pages/competitionDetail/competitionDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemData: {
      id: '2',
      title: '征集：人鱼自然摄影大赛',
      desc: '【大奖赛】我们不只是用相机拍照，我们带到摄影中去的是所有我们读过的书、看过的电影、听过的音乐、走过的路、爱过',
      state: 1,
      deadline: '12',
      imgUrl: 'https://mstatic.ofpay.com/marketing/upload/b0d52c909f9b493281b84861b362e06f.jpg'
    },
    tabList: [
      {
        key: '1',
        label: '参赛作品',
      },{
        key: '2',
        label: '比赛说明'
      },
    ],
    tabSelectedKey: '1',
    listData: [
      {
        imgUrl: 'https://mstatic.ofpay.com/marketing/upload/b0d52c909f9b493281b84861b362e06f.jpg',
        title: '向往光明，不只是人类的本能',
        votes: 100,
        isLike: false
      },
      {
        imgUrl: 'https://mstatic.ofpay.com/marketing/upload/b0d52c909f9b493281b84861b362e06f.jpg',
        title: '向往光明，不只是人类的本能',
        votes: 100
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  switchTabItemHandle: function(e) {
    const { item } = e.currentTarget.dataset;
    let key = item.key;
    this.setData({
      tabSelectedKey: key
    })
  },

  likeClickHandle: function (e) {
    const { index } = e.currentTarget.dataset;
    let { listData } = this.data;
    listData[index].isLike = !listData[index].isLike;
    this.setData({
      listData
    })
  }
})