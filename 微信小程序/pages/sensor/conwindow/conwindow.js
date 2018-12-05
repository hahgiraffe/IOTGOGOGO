Page({
  /**
   * 页面的初始数据
   */
  data: {
    roomid:'',
    getid:'',
    bulb1: '',
    bulb2: '',
    fan: '',
    curtain: '',
    lock: '',
    bed: '',
    triLeft: 0.23,
    windowWidth: wx.getSystemInfoSync().windowWidth,
    profile:  '关',
    profile1: '关',
    profile2: '关',
    profile3: '关',
    profile4: '关', 
    profile5: '123', 
    index: 0,
    list: ['0', '30', '60','90'],  
//获取登录用户id号
  },

onLoad: function (options) {  
    this.setData({
    roomid: options.roomid,  
    bulb1: options.bulb1,
    bulb2:options.bulb2,
    fan:options.fan,
    curtain:options.curtain,
    lock:options.lock,   
    bed:options.bed,   
    //bulb1: '1',      //这里删除
    //bulb2: '1',      //这里删除
    //fan: '0',        //这里删除
    //curtain: '1',    //这里删除
    //lock:'0',        //这里删除
    //bed: '30',       //这里删除
    }) 
    
    if (this.data.bulb1 == '0') {//灯泡1初始 
      this.setData({
        profile:'开'
      })
    } else { 
      this.setData({
        profile: '关'
      }) 
  }
  console.log(this.data.profile)
  if (this.data.bulb2== '0') {//灯泡2初始 
    this.setData({
      profile1: '开'
    })
  } else { 
    this.setData({
      profile1: '关'
    })
  }
  if (this.data.fan == '0') {//风扇初始 
    this.setData({
      profile2: '开'
    })
  } else { 
    this.setData({
      profile2: '关'
    })
  }
  if (this.data.curtain== '0') {//窗帘初始 
    this.setData({
      profile3: '开'
    })
  } else { 
    this.setData({
      profile3: '关'
    })
  }
  if (this.data.lock == '0') {//门锁初始 
    this.setData({
      profile4: '开'
    })
  } else { 
    this.setData({
      profile4: '关'
    })
  } 
  this.setData({              //病床初始 
      profile5: this.data.bed
    }) 
  },

 
//*********************************灯泡1
buttonCircleInnerHandle() {
  var that = this;  
  if (that.data.profile == '开') {
    that.setData({
      profile: '关',  
      bulb1: '1' 
    })
  } else {
    that.setData({
      profile: '开',
      bulb1: '0' 
    })
  } 
/*
buttonCircleInnerHandle() { 
  var that=this;
  console.log(that.data.bulb1)
  if (that.data.profile == '开') { 
    console.log(123),
    that.setData({
      profile: '关',
      bulb1:'0'
    })
  } else {
    console.log(321),
    that.setData({ 
      profile: '开',
      bulb1: '1' 
    })
  }
  */
  //色彩灯返回服务器改变后的数据 
  wx.request({ 
    url: 'https://iotgogogo.info:10155/wx_control_bulb1/',
    data: JSON.stringify({
      roomid:that.data.roomid,
      bulb1_status:that.data.bulb1,
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
          title: '控制成功！',
        }) 
      }
     }
   })
},

//****************************灯泡2 
/*buttonCircleInnerHandle1() {
  var that = this;
  if (that.data.profile1 == '开') {
    that.setData({
      profile1: '关',
      bulb2:'0' 
    })
  } else {
    that.setData({
      profile1: '开', 
      bulb2:'1'
    })
  }
},
*/
buttonCircleInnerHandle1() {
  var that = this;
  if (that.data.profile1 == '开') {
    that.setData({
      profile1: '关',
      bulb2:'1'
    })
  } else {
    that.setData({
      profile1: '开',
      bulb2:'0'
    
    })
  }
  //亮度灯返回服务器改变后的数据 
  wx.request({
    url: 'https://iotgogogo.info:10155/wx_control_bulb2/',
    data: JSON.stringify({
      roomid: that.data.roomid,
      bulb2_status: that.data.bulb2,
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
          title: '控制成功！',
        })
      }
    }
  })
},

//***************************风扇
/*buttonCircleInnerHandle2() {
  var that = this;
  if(fan=='1'){
    that.data.profile2 = '开'
  }else{
    that.data.profile2 = '关'
  }
  if (that.data.profile2 == '开') {
    that.setData({
      profile2: '关', 
    })
  } else {
    that.setData({
      profile2: '开', 
    })
  }
},
*/
buttonCircleInnerHandle2() {
  var that = this;
  if (that.data.profile2 == '开') {
      that.setData({
      profile2: '关', 
      fan:'1' 
    })
  } else {
    that.setData({
      profile2: '开',
      fan:'0'
    })
  } 
//风扇返回服务器改变后的数据 
wx.request({
  url: 'https://iotgogogo.info:10155/wx_control_fan/',
  data: JSON.stringify({
    roomid: that.data.roomid,
    fan_status: that.data.fan,
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
        title: '控制成功！',
      })
    }
  }
})
},

//窗帘
/*buttonCircleInnerHandle3() {
  var that = this;
  if(curtain=='1'){
    that.data.profile3 = '开'
  }else{
    that.data.profile3= '关'
  }
  if (that.data.profile3 == '开') {
    that.setData({
      profile3: '关', 
    })
  } else {
    that.setData({
      profile3: '开', 
    })
  }
},
*/

buttonCircleInnerHandle3() {
  var that = this;
  if (that.data.profile3 == '开') {
    that.setData({
      profile3: '关',  
      curtain:'1'
    })
  } else {
    that.setData({
      profile3: '开',
      curtain:'0'
    })
  }
  //窗帘返回服务器改变后的数据 
  wx.request({
    url: 'https://iotgogogo.info:10155/wx_control_curtain/',
    data: JSON.stringify({
      roomid: that.data.roomid,
      curtain_status: that.data.curtain,
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
          title: '控制成功！',
        })
      }
    }
  })
},


//门锁
/*buttonCircleInnerHandle4() {
  var that = this;
  if(lock=='1'){
    that.data.profile4 = '开'
  }else{
    that.data.profile4 = '关'
  }
  if (that.data.profile4 == '开') {
    that.setData({
      profile4: '关', 
    })
  } else {
    that.setData({
      profile4: '开', 
    })
  }
},
*/
buttonCircleInnerHandle4() {
  var that = this;
  if (that.data.profile4 == '开') {
    that.setData({
      profile4: '关',
      lock:'1'
  })
  } else {
    that.setData({
      profile4: '开',
      lock:'0'
    })
  }

//窗帘返回服务器改变后的数据 
wx.request({
  url: 'https://iotgogogo.info:10155/wx_control_lock/',
  data: JSON.stringify({
    roomid: that.data.roomid,
    lock_status: that.data.lock,
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
        title: '控制成功！',
      })
    }
  }
})
},

//病床高度调节
/* bindPickerChange(e) {
  this.setData({
    index: e.detail.value
  })
},
*/

 bindPickerChange(e) {
   this.setData({
     index: e.detail.value
   })
    var that = this;
    wx.request({
      url: 'https://iotgogogo.info:10155/wx_control_bed/',
      data:JSON.stringify({
        roomid: that.data.roomid,
        bed_status: that.data.list[that.data.index], 
      }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {
        console.log(JSON.stringify(res));
        {
          wx.showToast({
            icon: 'success',
            duration: 2500,
            title: '控制成功！',
          })
        }
        }
 })
 }, 
 

})