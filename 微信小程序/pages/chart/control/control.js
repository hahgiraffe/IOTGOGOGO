//signup.js
//获取应用实例
var app = getApp()
Page({
  data: {
    getid:'',
    signupimg: '../../images/name.png',
    iconsrc: '../../images/name.png',
    roomid:'101',  
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
      getid: options.getid
    })
  },

//管理员用户跳到1001病房控制界面
/*
Towindow(){ 
  Towindow() {
    var that = this;
    wx.request({
      url: 'https://iotgogogo.info:10155/wx_room/',
      data: {
        roomid: that.data.roomid,
      },
      header: {
        "Content-Type": "json"
      },
      method: 'GET',
      success: function (res) {
        console.log(JSON.stringify(res));
        bulb1=that.data.bulb1,
        bulb2=that.data.bulb2,
        fan=that.data.fan,
        curtain=that.data.curtain,
        lock=that.data.lock,
        bed=that.data.bed
      wx.navigateTo({
      url: '../conwindow/conwindow?roomid=' + roomid + '&bulb1=' + bulb + '&fan=' + fan + '&curtain=' + curtain + '&bed=' + bed,
    })
  }
  })
  }
},
*/

 
  Towindow() { 
      wx.navigateTo({ 
      url: '../chart'
  })
  }

})