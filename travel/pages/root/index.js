// pages/root/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    display:false,
    value:'',
    list:[],
    name:'',
    arrivename:''
  },
  change(e){
    if(e.detail.value){
      this.setData({
        display:true,
        value: e.detail.value
      })
    }
  },
  city(e){
    this.setData({
      name: e.target.dataset.name,
      display:false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5cdbd49bb62ba32b7a27f1a3/example_copy_copy/address',
      success:(res)=>{
        this.setData({
          list:res.data.city
        })
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