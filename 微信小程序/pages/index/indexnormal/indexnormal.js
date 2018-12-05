Page({
  data: {
    userid:'1',
    roomid:'',
    bulb1:'',
    bulb2:'',
    fan:'',
    curtain:'',
    lock:'',
    bed:'',
    imgUrls: [
      '../../../images/yy2.png',
      '../../../images/yy1.png',
      '../../../images/yy3.jpg'
    ],
    list: ['🎉智慧医院系统', '🎉智能监控', ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    interval2: 3000,
    duration: 1000,
    duration2: 2000,
    windowHeight: wx.getSystemInfoSync().windowHeight,
    windowWidth: wx.getSystemInfoSync().windowWidth,
    btnSize: 0,
    token: wx.getStorageSync('token'),
    status: 2,
  },
  
   
  onLoad: function (options) {
    var that = this; 
    this.setData({ 
      btnSize: 0.8 * 0.32 * this.data.windowHeight,
    })
    // options为页面跳转所带来的参数
    this.setData({
      userid: options.userid ///////////////////////////这里记得改成options.userid
    })
  },
  
  onHide: function () {
    this.setData({
      status: 2
    })
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },

  //普通用户跳转到传感器界面
toSensor() {
    var that = this;
    wx.request({
      url: 'https://iotgogogo.info:10155/wx_userinfo/',
      data: JSON.stringify({
        userid: that.data.userid
      }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {
        console.log(JSON.stringify(res));
        that.data.roomid = res.data.room; 
        wx.navigateTo({
          url: '../../sensor/sensor?roomid=' + that.data.roomid
        })
      }
    })
  },
 
/*       
toSensor() {
      wx.navigateTo({
        url: '../../sensor/sensor',
      })
    },
*/

toChart() {
  wx.navigateTo({
    url: '../../chart/chart',
  })
},
 

  toAbout() {
  wx.navigateTo({
    url: '../../about/about',
    success: function(res) {},
    fail: function(res) {},
    complete: function(res) {},
  })
  },

//普通用户跳转人工控制界面
 toControlwindow() {
   var that = this;
   wx.request({
     url: 'https://iotgogogo.info:10155/wx_userinfo/',
     data: JSON.stringify({
       userid: that.data.userid
     }),
     header: {
       "Content-Type": "application/x-www-form-urlencoded"
     },
     method: 'POST',
     success: function (res) {
       console.log(JSON.stringify(res));
       that.setData({
         roomid:res.data.room})
        }
   })
  var that1=that;
  console.log(that1.data.roomid),
  wx.request({
  url: 'https://iotgogogo.info:10155/wx_room/',
  data: JSON.stringify({
    roomid:that1.data.roomid
  }),
  header: {
  "Content-Type": "application/x-www-form-urlencoded"
  },
  method: 'POST',
  success:function(res) {
    console.log(JSON.stringify(res)); 
    that1.setData({ 
      bulb1: res.data.bulb1,
      bulb2: res.data.bulb2,
      fan: res.data.fan,
      curtain: res.data.curtain,
      lock: res.data.lock,
      bed: res.data.bed
      }) 
    wx.navigateTo({ 
      url: '../../sensor/conwindow/conwindow?roomid=' + that1.data.roomid+'&bulb1=' + that1.data.bulb1 +'&bulb2='+that1.data.bulb2+'&fan='+that1.data.fan+'&curtain='+that1.data.curtain+'&lock='+that1.data.lock+'&bed='+that1.data.bed
    }
    )
    },
  })
  }, 
/*   
 toControlwindow() {
    wx.navigateTo({
      url: '../../sensor/conwindow/conwindow'
    })
  }, 
  */


 toUser() {
   var that = this;
   wx.navigateTo({
     url: '../../user/user?userid=' + that.data.userid,
   })
 },
  
  // test0(){
  //   wx.navigateTo({
  //     url: '../user/user',
  //   })
  // },
  // test1(){
  //   wx.navigateTo({
  //     url: '../guest/guest',
  //   })
  // },
  // test2() {
  //   wx.navigateTo({
  //     url: '../entrance/entrance',
  //   })
  // }]

noAuthority(){
wx.showToast({
  title: '抱歉，您没有权限访问',
  icon: 'none',
  image: '',
  duration: 1500,
  mask: true,
  success: function(res) {},
  fail: function(res) {},
  complete: function(res) {},
})
}
 
})