// pages/user/setting/password/password.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userid:'',
    email:'',
    oldpassword: '',
    newpassword: '',
    repassword: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userid: options.userid,
      email: options.email
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
  oldpassword(e) {
    this.setData({
      oldpassword: e.detail.value
    })
  },
  newpassword(e) {
    this.setData({
      newpassword: e.detail.value
    })
  },
  repassword(e) {
    this.setData({
      repassword: e.detail.value
    })
  },
  cancel() {
    wx.navigateBack({
      url: '../../setting/setting',
    })
  },


//****************************用户修改密码
  confirm(){
    var that = this;
    wx.request({
      url:'https://iotgogogo.info:10155/wx_login/',
      data: JSON.stringify ({
        email: that.data.email,
        password: that.data.oldpassword
      }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {
        console.log(JSON.stringify(res));
        if (res.data.result == '1') {
          var that2 = that;
          wx.request({
            url: 'https://iotgogogo.info:10155/wx_user_password/',
            data: JSON.stringify({
              userid: that2.data.userid,
              newpassword: that2.data.newpassword
            }),
            header: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            method: 'POST',
            success: function (res) {
              console.log(JSON.stringify(res));
              if (res.data.result == 'yes') { 
                 wx.showToast({
                 icon: 'success',
                 duration: 2500,
                 title: '修改成功！',
                })
              }
            }
          })
        }
        else { 
            wx.showToast({
              icon: 'warn',
              duration: 2500,
              title: '密码错误！', 
          })
        }
    }
    })
  },

/*
  confirm() {
    wx.navigateBack({
      url: '../',
    }) 
  }  
*/
})