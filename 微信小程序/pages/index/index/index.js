Page({
  data: {
    userid: '',
    imgUrls: [
      '../../../images/yy2.png',
      '../../../images/yy1.png',
      '../../../images/yy3.jpg'
    ],
    timer: '',//定时器名字
    countDownNum: '100000000',//倒计时初始值
    list: ['🎉智慧医院系统公告', '🎉智能监控网站',],
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

  /* onLoad() {
     
   },
   */
  onLoad: function (options) {  
    this.setData({
      btnSize: 0.8 * 0.32 * this.data.windowHeight, 
      userid:options.userid, 
    })  
   // this.counttime();

  },

  
   
  onShow() {
    
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


//********************定时器,对房间情况进行侦听  
counttime: function () {    
       var that = this; 
       timer: setInterval(function () {   
          wx.request({
          url: 'https://iotgogogo.info:10155/wx_warn/',
          data: JSON.stringify({   
            check:'1'
          }),
          method: 'POST',
          success: function (res) {
            console.log(JSON.stringify(res))
           
         console.log(res.data.result);
         if (res.data.result='1') 
         wx.showToast({
           title: 'F1001病房：火灾警报！',
           icon: '',
           image: '',
           duration: 2000,
           mask: true,
         }) 
         if (res.data.result = '2')
         wx.showToast({
           title: 'F1001病房：甲烷泄露！',
           icon: '',
           image: '',
           duration: 2000,
           mask: true, 
         })
         if (res.data.result = '3')
           wx.showToast({
             title: 'F1001病房：注意窗外情况！',
             icon: '',
             image: '',
             duration: 2000,
             mask: true,
             })  
           } 
         })
        } , 15000)
       
     },

  //跳到传感器界面
     toSensor() {
       var that=this; 
    wx.navigateTo({
      url: '../../sensorall/sensorall?userid=' + that.data.userid 
    })
  },
   /*
    toSensor() {
    wx.navigateTo({
      url: '../../sensorall/sensorall'
    })
  },
  */

   
  toAbout() {
    wx.navigateTo({
      url: '../../about/about',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  toControl() {
    wx.navigateTo({
      url: '../../sensor/control/control',
    })
  },

  toUser() {
    var that=this;
    wx.navigateTo({ 
      url:'../../user/user?userid='+that.data.userid,
    })
  },

toChart()
{
  wx.navigateTo({
    url: '../../chart/control/control',
  })
},

 test0(){
  wx.navigateTo({
  url: 'https://iotgogogo.info:10155/login',
    })
  },
   test1(){
   wx.navigateTo({
       url: 'https://iotgogogo.info:10155/login',
     })
  },
  // test2() {
  //   wx.navigateTo({
  //     url: 'http://iotgogogo.info:10155',
  //   })
  // }

 globalData: {
   result: '123',
 }

})