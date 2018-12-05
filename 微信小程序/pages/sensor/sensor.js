//signup.js
//获取应用实例
var app = getApp()
Page({
  data: {
    showModal: false,
    showModal1: false,
    showModal2: false,
    showModal3: false,
    showModal4: false,
    showModal5: false,
    showModal6: false,
    getid: '',
    c: '../sensor/images/c.png',
    co2: '../sensor/images/co2.png',
    hwx: '../sensor/images/hwx.png',
    light: '../sensor/images/light.png',
    pm25: '../sensor/images/PM25.png',
    ch4: '../sensor/images/ch4.png',
    smog: '../sensor/images/smog.png',
    roomid: '',
    wsd1: '123',  
    eyht1: '',  
    hwx1: '',  
    gz1: '', 
    PM1: '', 
    jw1: '',  
    yw1: '123'
  },

  onLoad: function (options) {
    this.setData({ 
      roomid: options.roomid
    })
    console.log(this.data.roomid)
  },

//普通用户查询温湿度 
 showOut: function () {
    var that = this; 
     wx.request({
      url: 'https://iotgogogo.info:10155/wx_room/',
      data: JSON.stringify({
        roomid: this.data.roomid
      }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {  
        console.log
        console.log(JSON.stringify(res));  
        that.setData({ 
        wsd1:res.data.wsd,//数据库中名称是wsd 
        showModal: true
               }) 
        }
    })
  },
 
 /*
  showOut: function () {
    this.setData({
      showModal: true
    })
  },
 */

//普通用户查询二氧化碳
 
  showOut1: function () {
    var that = this;
     wx.request({
      url: 'https://iotgogogo.info:10155/wx_room/',
      data: JSON.stringify({
        roomid: that.data.roomid
      }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {
        console.log(JSON.stringify(res));  
        that.setData({ 
        eyht1:res.data.eyht, //数据库中名称是eyht
        showModal1: true
             })
        }
    })
  },
 
 /*
  showOut1: function () {
    this.setData({
      showModal1: true
    })
  },
  */

  //普通用户查询红外线
 
  showOut2: function () {
    var that = this;
     wx.request({
      url: 'https://iotgogogo.info:10155/wx_room/',
      data: JSON.stringify({
        roomid: that.data.roomid
      }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {
        console.log(JSON.stringify(res));  
        that.setData({ 
        hwx1:res.data.hwx,//数据库中名称是hwx
        showModal2: true
             })
        }
    })
  },
   
   /*
  showOut2: function () {
    this.setData({
      showModal2: true
    })
  },
*/
  //普通用户查询光照
 
  showOut3: function () {
    var that = this;
     wx.request({
      url: 'https://iotgogogo.info:10155/wx_room/',
      data:JSON.stringify({
        roomid: that.data.roomid
      }),
     header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {
        console.log(JSON.stringify(res));  
        that.setData({ 
        gz1:res.data.gz,//数据库中名称是gz
        showModal3: true
             })
        }
    })
  },
 /*
  showOut3: function () {
    this.setData({
      showModal3: true
    })
  },
*/
  //普通用户查询PM2.5
 
  showOut4: function () {
    var that = this;
     wx.request({
      url: 'https://iotgogogo.info:10155/wx_room/',
      data: JSON.stringify({
        roomid: that.data.roomid
      }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {
        console.log(JSON.stringify(res));  
        that.setData({ 
        PM1:res.data.pm, //数据库中名称是PM
        showModal4: true
             })
        }
    })
  },
 /* 
  showOut4: function () {
    this.setData({
      showModal4: true
    })
  },
*/

  //普通用户查询甲烷 
  showOut5: function () {
    var that = this;
     wx.request({
      url: 'https://iotgogogo.info:10155/wx_room/',
      data: JSON.stringify({
        roomid: that.data.roomid
      }),
     header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {
        console.log(JSON.stringify(res));  
        that.setData({ 
        jw1:res.data.jw, //数据库中名称是jw
        showModal5: true
             })
        }
    })
  },
 
 /*
  showOut5: function () {
    this.setData({
      showModal5: true
    })
  }, 
*/

//普通用户查询烟雾 
  showOut6: function () {
    var that = this;
     wx.request({
      url: 'https://iotgogogo.info:10155/wx_room/',
      data: JSON.stringify({
        roomid: that.data.roomid
      }),
     header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {
        console.log(JSON.stringify(res));  
        that.setData({ 
        yw1:res.data.yw, //数据库中名称是wsd
        showModal6: true
             })
        }
    })
  },
 
 /*
  showOut6: function () {
    this.setData({
      showModal6: true
    })
  },
*/

  /**
   * 弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function () {
  },
  /**
   * 隐藏模态对话框
   */
  hideModal: function () {
    this.setData({
      showModal: false
    });
  },
  hideModal1: function () {
    this.setData({
      showModal1: false
    });
  },
  hideModal2: function () {
    this.setData({
      showModal2: false
    });
  },
  hideModal3: function () {
    this.setData({
      showModal3: false
    });
  },
  hideModal4: function () {
    this.setData({
      showModal4: false
    });
  },
  hideModal5: function () {
    this.setData({
      showModal5: false
    });
  },
  hideModal6: function () {
    this.setData({
      showModal6: false
    });
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel: function () {
    this.hideModal();
    this.hideModal1();
    this.hideModal2();
    this.hideModal3();
    this.hideModal4();
    this.hideModal5();
    this.hideModal6();
  },
  /**
   * 对话框确认按钮点击事件
   */
  onConfirm: function () {
    this.hideModal();
    this.hideModal1();
    this.hideModal2();
    this.hideModal3();
    this.hideModal4();
    this.hideModal5();
    this.hideModal6();
  }


})


