// pages/user/setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userid:'',
    name:'',
    phone:'',
    email:'', 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  this.setData({
    userid:options.userid,
    name:options.name,
    phone:options.phone,
    email:options.email,  
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

//**************用户修改密码
 passwordSetting() {
   var that=this;
    wx.navigateTo({
      url: './password/password?userid='+that.data.userid+'&email='+that.data.email,
    })
  },
  
  /*
  passwordSetting() {
    wx.navigateTo({
      url: './password/password'
    })
  },
  */

  //*********** 用户修改用户名
    nameSetting() {
      var that=this;
    wx.navigateTo({
      url: './name/name?name='+that.data.name+'&userid='+that.data.userid,
    })
  },
 
   
   /* nameSetting() {
    wx.navigateTo({
      url: './name/name',
    })
  },
  */

 //************* 用户修改邮箱
  emailSetting() {
    var that=this;
    wx.navigateTo({
      url: './email/email?email='+that.data.email+'&userid='+that.data.userid,
    })
  },
   
  /*
    emailSetting() {
      wx.navigateTo({
        url: './email/email'
      })
    },
    */

//************* 用户修改电话
phoneSetting() {
  var that=this;
    wx.navigateTo({
      url: './phone/phone?phone=' + that.data.phone + '&userid=' +that.data.userid,
    })
  },
/*
  phoneSetting() {
      wx.navigateTo({
        url: './phone/phone'
      })
    },
*/

  clear() {
    wx.clearStorage()
    wx.reLaunch({
      url: '../../index/login/login',
    })
  }
})