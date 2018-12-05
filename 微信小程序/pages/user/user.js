Page({
  data: {
    userid: '',
    nickname: '',
    head_img: '',
    token: wx.getStorageSync('token'),
    status: 2,
    name:'',
    phone:'',
    email:'',
    userid:'',
    room:'',
    identity:''
  },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) { 
      this.setData({
           userid: options.userid
      })
      console.log(this.data.userid);
      var that=this; 
      wx.getUserInfo({
        //如果全局用户信息存在，则直接设置数据
        withCredentials: false,
        success: function (res) {
          that.setData({  
            nickname: res.userInfo.nickName,
            head_img: res.userInfo.avatarUrl
          })
        } 
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

//**********************跳转到反馈界面
  toFeedback() {
    var that=this;
    wx.navigateTo({
      url: './feedback/feedback?userid='+that.data.userid,
    })
  },


//***********************跳转到设置界面
  toSetting() {
    var that = this;
    wx.request({
      url: 'https://iotgogogo.info:10155/wx_userinfo/',
      data: JSON.stringify({
        userid: that.data.userid,
      }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {
        console.log(JSON.stringify(res)); 
        that.data.name = res.data.name;
        that.data.phone = res.data.ph;
        that.data.email = res.data.email;
        that.data.room = res.data.room;
        that.data.identity = res.data.identity;
        wx.navigateTo({
          url: '../user/setting/setting?name=' + that.data.name + '&phone=' + that.data.phone + '&email=' + that.data.email + '&identity=' + that.data.identity + '&userid=' + that.data.userid + '&room=' + that.data.room
        })
      },
    })
  },  
 

/*
  toSetting() {
    wx.navigateTo({
      url: './setting/setting',
    })
  }, 
*/
 
 //*********************跳转到用户信息页面 
  toUserinfo() {
    var that = this;
    wx.request({
     url: 'https://iotgogogo.info:10155/wx_userinfo/',
      data: JSON.stringify({
         userid:that.data.userid,
      }), 
       header: {
        "Content-Type": "application/x-www-form-urlencoded"
      }, 
      method: 'POST',
      success: function (res) {
        console.log(JSON.stringify(res));
        that.data.name = res.data.name;
        that.data.phone= res.data.ph ;
        that.data.email = res.data.email;
        that.data.room = res.data.room;
        that.data.identity=res.data.identity;
        wx.navigateTo({
          url: '../user/userinfo/userinfo?name=' +that.data.name + '&phone=' + that.data.phone + '&email=' +that.data.email + '&identity='+that.data.identity+'&userid=' +that.data.userid+'&room='+that.data.room
        })
      }
    })
  }
 })  
   
 