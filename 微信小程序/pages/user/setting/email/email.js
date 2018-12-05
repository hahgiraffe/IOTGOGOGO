// pages/user/setting/address/address.js
Page({ 
  /**
   * 页面的初始数据
   */
  data: {
    userid:'',
    oldemail: '',
    newemail: '' 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      oldemail:options.email,
      userid:options.userid 
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

  }, 
  newemail(e) {
    this.setData({
      newemail: e.detail.value
    })
  },

  cancel() {
    wx.navigateBack({
      url: '../../setting/setting',
    })
  },


//***************************提交邮箱 */
  confirm() { 
    var that = this;
    wx.request({
      url:'https://iotgogogo.info:10155/wx_user_email/',
      data: JSON.stringify({
        newemail: that.data.newemail,
        userid:that.data.userid 
      }), 
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {
        console.log(JSON.stringify(res)); 
        if (res.data.result =='yes') {
          wx.showToast({
            icon: 'success',
            duration: 2500,
            title: '修改成功！',
          }) 
          }
    wx.navigateBack({  
      url: '../../',
         })  
     }
    })
  }
 

//  confirm() {
//   wx.navigateTo({
//      url: '../'
//    }) 
//  }
  
  
})