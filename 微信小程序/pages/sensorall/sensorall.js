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
    room_num: '',
    c1: '123',c2:'',c3:'',c4:'',c5:'',c6:'',c7:'',c8:'',c9:'',c10:'',
    co21: '',co22:'',co23:'',co24:'',co25:'',co26:'',co27:'',co28:'',co29:'',co210:'',
    hwx1: '', hwx2: '', hwx3: '', hwx4: '', hwx5: '', hwx6: '', hwx7: '', hwx8: '', hwx9: '', hwx10: '',
    gz1: '',gz2:'',gz3:'',gz4:'',gz5:'',gz6:'',gz7:'',gz8:'',gz9:'',gz10:'',
    PM1: '',PM2:'',PM3:'',PM4:'',PM5:'',PM5:'',PM6:'',PM7:'',PM8:'',PM9:'',PM10:'',
    jw1: '',jw2: '',jw3: '',jw4: '',jw5: '',jw5: '',jw6: '', jw7: '', jw8: '', jw9: '', jw10: '',
    yw1: '',yw2:'',yw3: '',yw4: '',yw5: '',yw5: '',yw6: '', yw7: '', yw8: '', yw9: '', yw10: '123',
  },
  onLoad: function (options) {
    this.setData({   
    })
  },
     
     
//管理员查询温湿度弹窗
showOut: function () {
    var that = this;
     wx.request({
      url: 'https://iotgogogo.info:10155/wx_data/',
      data: JSON.stringify({
        data:'wsd' 
      }),
    header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {
        console.log(JSON.stringify(res));
        that.setData({
        c1:res.data.wsd1,//数据库中名称是wsd
        c2:res.data.wsd2,
        c3:res.data.wsd3,
        c4:res.data.wsd4,
        c5:res.data.wsd5,
        c6:res.data.wsd6,
        c7:res.data.wsd7,
        c8:res.data.wsd8,
        c9:res.data.wsd9,
        c10:res.data.wsd10,
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

  //管理员查询二氧化碳弹窗
 showOut1: function () {
    var that = this;
     wx.request({
     url: 'https://iotgogogo.info:10155/wx_data/',
      data: JSON.stringify({
        data:'eyht'
      }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded" 
      },
      method: 'POST',
      success: function (res) {
        console.log(JSON.stringify(res));
        that.setData({
        co21:res.data.eyht1,//数据库中名称是eyht
        co22:res.data.eyht2,
        co23:res.data.eyht3,
        co24:res.data.eyht4,
        co25:res.data.eyht5,
        co26:res.data.eyht6,
        co27:res.data.eyht7,
        co28:res.data.eyht8,
        co29:res.data.eyht9,
        co210:res.data.eyht10,
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

  //管理员查询红外线
  showOut2: function () {
    var that = this;
     wx.request({
      url: 'https://iotgogogo.info:10155/wx_data/',
       data: JSON.stringify({
        data:'hwx'
      }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {
        console.log(JSON.stringify(res));
        this.setData({
        hwx1:res.data.hwx1,//数据库中名称是hwx
        hwx2:res.data.hwx2,
        hwx3:res.data.hwx3,
        hwx4:res.data.hwx4,
        hwx5:res.data.hwx5,
        hwx6:res.data.hwx6,
        hwx7:res.data.hwx7,
        hwx8:res.data.hwx8,
        hwx9:res.data.hwx9,
        hwx10:res.data.hwx10,
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

 //管理员查询光照
   showOut3: function () {
     var that = this;
     wx.request({
      url: 'https://iotgogogo.info:10155/wx_data/',
      data: JSON.stringify({
        data:'gz'
      }),
        header: {
         "Content-Type": "application/x-www-form-urlencoded"
       },
       method: 'POST',
      success: function (res) {
        console.log(JSON.stringify(res));
        this.setData({
        gz1:res.data.gz1,//数据库中名称是wsd
        gz2:res.data.gz2,
        gz3:res.data.gz3,
        gz4:res.data.gz4,
        gz5:res.data.gz5,
        gz6:res.data.gz6,
        gz7:res.data.gz7,
        gz8:res.data.gz8,
        gz9:res.data.gz9,
        gz10:res.data.gz10,
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

  //管理员查询PM2.5
  showOut4: function () {
     var that = this;
     wx.request({
       url: 'https://iotgogogo.info:10155/wx_data/',
      data: JSON.stringify({
        data:'pm' 
      }),
       header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {
        console.log(JSON.stringify(res));
        this.setData({
        pm1:res.data.pm1,//数据库中名称是pm
        pm2:res.data.pm2,
        pm3:res.data.pm3,
        pm4:res.data.pm4,
        pm5:res.data.pm5,
        pm6:res.data.pm6,
        pm7:res.data.pm7,
        pm8:res.data.pm8,
        pm9:res.data.pm9,
        pm10:res.data.pm10,
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

  //管理员查询甲烷
    showOut5: function () {
     var that = this;
     wx.request({
      url: 'https://iotgogogo.info:10155/wx_data/',
      data:JSON.stringify({
        data:'jw'     
         }),
       header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {
        console.log(JSON.stringify(res));
        this.setData({
        jw1:res.data.jw1,//数据库中名称是jw
        jw2:res.data.jw2,
        jw3:res.data.jw3,
        jw4:res.data.jw4,
        jw5:res.data.jw5,
        jw6:res.data.jw6,
        jw7:res.data.jw7,
        jw8:res.data.jw8,
        jw9:res.data.jw9,
        jw10:res.data.jw10,
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
      url: 'https://iotgogogo.info:10155/wx_data/',
      data:JSON.stringify({
        data:'yw'     
         }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {
        console.log(JSON.stringify(res));
        this.setData({
        yw1:res.data.yw1,//数据库中名称是yw
        yw2:res.data.yw2,
        yw3:res.data.yw3,
        yw4:res.data.yw4,
        yw5:res.data.yw5,
        yw6:res.data.yw6,
        yw7:res.data.yw7,
        yw8:res.data.yw8,
        yw9:res.data.yw9,
        yw10:res.data.yw10,
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


