//signup.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userid:'',
    signupimg: '../../images/name.png',
    iconsrc: '../../images/name.png',
    roomid:'F1001',  
    bulb1: '',
    bulb2: '',
    fan: '',
    curtain: '',
    lock: '',
    bed: '',
  },

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      userid: options.userid
    })
  },

//管理员用户跳到F1001病房控制界面 
Towindow(){  
    var that = this;
    wx.request({
      url: 'https://iotgogogo.info:10155/wx_room/',
      data: JSON.stringify({
        roomid: that.data.roomid,
      }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {
        console.log(JSON.stringify(res));
        that.setData({
          bulb1: res.data.bulb1,
          bulb2: res.data.bulb2,
          fan: res.data.fan,
          curtain: res.data.curtain,
          lock: res.data.lock,
          bed: res.data.bed
        })
        wx.navigateTo({
          url: '../conwindow/conwindow?roomid=' + that.data.roomid + '&bulb1=' + that.data.bulb1 + '&bulb2=' + that.data.bulb2 + '&fan=' + that.data.fan + '&curtain=' + that.data.curtain + '&lock=' + that.data.lock + '&bed=' + that.data.bed
        }
        )
      },
  })
  },
 
/*
 
  Towindow() { 
      wx.navigateTo({ 
      url: '../conwindow/conwindow'
  })
  }
  */

})