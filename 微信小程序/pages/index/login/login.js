Page({
  /**
   * 页面的初始数据
   */
  data: {
    sectionTwo: true,
    sectionThree: false,
    sectionFour: false,
    triLeft: 0.23,
    windowWidth: wx.getSystemInfoSync().windowWidth,
    profile: '管理员',
    step: 1,
    email:'',
    phone: '',
    password: '',
    userid:'',
    identity:'',
    organization: '',
    name: '',
    id: '',
    nickname: '',
    head_img: '',
    loginemail: '',
    loginPassword: '',
    multiIndex: [0, 0],
    multiArrayId: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
  // 登录和注册选择
  sectionTwo() {
    this.setData({
      sectionTwo: true,
      sectionThree: false,
      triLeft: 0.23,
      step: 1,
      phone: '',
      password: '',
      organization: '',
      name: '',
      id: '',
      loginemail: '',
      loginPassword: ''
    })
  },
  sectionThree() {
    this.setData({
      sectionTwo: false,
      sectionThree: true,
      triLeft: 0.73,
      step: 1,
      phone: '',
      password: '',
      organization: '',
      name: '',
      id: '',
      loginemail: '',
      loginPassword: ''
    })
  },
  // 登录赋值
  sectionTwoEmail(e) {
    this.setData({
      loginemail: e.detail.value
    })
  },
  sectionTwoPassword(e) {
    this.setData({
      loginPassword: e.detail.value
    })
  },
  // 注册赋值
  bindMultiPickerChange(e) {
    var that = this;
    // console.log(e.detail.value[1]);
    let index = e.detail.value[1];
    // console.log(index);
    // console.log('2222')
    // console.log(that.data.multiArrayId[1][index])
    that.setData({
      organization: that.data.multiArrayId[1][index],
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange(e) {
    // console.log('1111111')
    console.log(e.detail)

    var that = this;
    var a = [];
    a.push(e.detail.column);
    a.push(e.detail.value);
    that.setData({
      multiIndex: a
    })
    if (e.detail.column == 1) {
      var index = e.detail.value;
      // console.log(index);
      // console.log(that.data.multiArrayId[1][index]);
      that.setData({
        organization: that.data.multiArrayId[1][index]
      })
    }
  },
  sectionThreeVisitorPhone(e) {
    this.setData({
      phone: e.detail.value
    })
  },
  sectionThreeVisitorPassword(e) {
    this.setData({
      password: e.detail.value
    })
  },
  sectionThreeEmployeePhone(e) {
    this.setData({
      phone: e.detail.value
    })

  },
  sectionThreeEmployeePassword(e) {
    this.setData({
      password: e.detail.value
    })
  },
  sectionThreeEmployeeOrganization(e) {
    this.setData({
      organization: e.detail.value
    })
  },
  sectionThreeEmployeeName(e) {
    this.setData({
      name: e.detail.value
    })
  },
  sectionThreeEmployeeId(e) {
    this.setData({
      id: e.detail.value
    })
  },
  // 注册类型选择
  buttonCircleInnerHandle() {
    var that = this;
    if (that.data.profile == '用户') {
      that.setData({
        profile: '管理员',
        step: 1,
        phone: '',
        password: '',
        organization: '',
        name: '',
        id: '',
        nickname: '',
        head_img: '',
       lloginemail: '',
        loginPassword: ''
      })
    } else {
      that.setData({
        profile: '用户',
        step: 1,
        phone: '',
        password: '',
        organization: '',
        name: '',
        id: '',
        nickname: '',
        head_img: '',
        loginemail: '',
        loginPassword: ''
      })
    }
  },
  //管理员下一步
  stepHandle() {
    var that = this;
    //正则手机号
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (that.data.phone.length == 0) {
      wx.showToast({
        title: '手机号有误',
        icon: 'loading',
        duration: 1500
      })
      return false;
    } else if (that.data.phone.length < 11) {
      wx.showToast({
        title: '手机号有误',
        icon: 'loading',
        duration: 1500
      })
      return false;
    } else if (!myreg.test(that.data.phone)) {
      wx.showToast({
        title: '手机号有误',
        icon: 'loading',
        duration: 1500
      })
      return false;
    } else if (that.data.password.length < 6) {
      wx.showToast({
        title: '密码少于6位',
        duration: 1500,
        mask: true
      })
    } else {
      setTimeout(function () {
        that.setData({
          step: 2
        })
      }.bind(that), 1000)
    }
  },
  // 访客注册赋值
  sectionThreeVisitorPhone(e) {
    console.log(e);
    this.setData({
      phone: e.detail.value
    })
  },
  sectionThreeVisitorPassword(e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 登录
  loginHandle() {  
    var that=this;
          wx.request({
            url: 'https://iotgogogo.info:10155/wx_login/',
            data: JSON.stringify({  //email和password是属性在接口中的名字
              email:that.data.loginemail,
              password: that.data.loginPassword 
            }),
            method: 'POST',
            success:function(res) {
            console.log(JSON.stringify(res));
            if(res.data.result =='1'){   //服务器返回登陆成功数据result是yes
              wx.showToast({
                icon: 'success',
                duration: 2500,
                title: '登陆成功！',
              })
            that.data.userid=res.data.userid;  //服务器传回用户id属性名称为userid
            that.data.identity=res.data.identity;
            if (that.data.identity=='0')
              wx.navigateTo({
                url: '../index/index?userid=' + that.data.userid,
              })
            if (that.data.identity == '1')
              wx.navigateTo({
                url: '../indexnormal/indexnormal?userid=' + that.data.userid,
              })  
        
}

            else{
         wx.showToast({
         title: '邮箱或密码错误',
         icon: 'none',
         image: '',
         duration: 2500,
         mask: true,
         success: function (res) { },
         fail: function (res) { },
         complete: function (res) { },
         })
        }
      },
      fail(res)
      {
      console.log(JSON.stringify(res))
      wx.showToast({
        title: '',
        icon: '',
        image: '',
        duration: 0,
        mask: true,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
         })
        }  
      }) 
      
     },

/*  
 
    wx.navigateTo({
      url: '../index/index'
    })
  },
  */



  
//普通用户注册              
  loginHandle2() {
    /*wx.login({
      success: function (res) {
        if (res.code) {
          console.log(that.data.head_img);
          wx.request({
            url: 'https://www.zjzlnet.com/node/user/signup',
            data: {
              code: res.code,
              head_img: that.data.head_img,
              nickname: that.data.nickname,
              phone: that.data.loginPhone,
              password: that.data.loginPassword
            },
            method: 'GET',
            success(res) {
              console.log(res);*/

    wx.navigateTo({
      url: '../indexnormal/indexnormal',
    })
  },


  // 管理员注册
  registerHandle() {
    var that = this;
    var myname = /^[\x07-\xff]*$/;
    var myid = /^(\d{14}|\d{17})(\d|[xX])$/;
    if (myname.test(that.data.name)) {
      wx.showToast({
        title: '姓名有误',
        icon: 'loading',
        duration: 1500,
        mask: true
      })
      return false;
    } else if (!myid.test(that.data.id)) {
      wx.showToast({
        title: '身份证号有误',
        icon: 'loading',
        duration: 1500,
        mask: true
      })
      return false;
    } else if (that.data.id.length > 18) {
      wx.showToast({
        title: '身份证号有误',
        icon: 'loading',
        duration: 1500,
        mask: true
      })
      return false;
    } else {
      //获取用户信息
      wx.login({
        success: function (res) {
          if (res.code) {
            //发起网络请求
            console.log(that.data.head_img)
            wx.request({
              url: 'https://www.zjzlnet.com/node/user/login',
              data: {
                code: res.code,
                head_img: that.data.head_img,
                nickname: that.data.nickname,
                phone: that.data.phone,
                password: that.data.password,
                organization: that.data.organization,
                name: that.data.name,
                id: that.data.id,
              },
              method: 'POST',
              success(res) {
                console.log(res)
                if (res.data.errno == 0) {
                  if (res.data.data == '注册申请已提交，请耐心等待管理员审核') {
                    wx.showToast({
                      title: '注册已提交',
                      duration: 2000,
                      mask: true,
                    })
                    setTimeout(function () {
                      wx.navigateBack({
                        url: '../index/index'
                      })
                    }.bind(that), 2000)
                  }
                  if (res.data.data !== '注册申请已提交，请耐心等待管理员审核') {
                    // console.info("登陆成功，则保存token到本地");
                    wx.setStorageSync('token', res.data.data);
                    wx.showToast({
                      title: '注册已提交',
                      icon: 'success',
                      duration: 2000,
                      mask: true,
                    })
                    setTimeout(function () {
                      wx.showToast({
                        title: '登录成功',
                        icon: 'success',
                        duration: 2000
                      })
                    }.bind(that), 2000)
                    setTimeout(function () {
                      wx.navigateBack({
                        url: '../index/index',
                      })
                    }.bind(that), 4000);
                  }
                }
              }
            })
          } else {
            console.log('获取用户登录态失败！' + res.errMsg)
          }
        }
      })
    }
  },

  // 访客注册
  register2Handle() {
    var that = this;
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (that.data.phone.length == 0) {
      wx.showToast({
        title: '手机号有误',
        icon: 'success',
        duration: 1500
      })
      return false;
    } else if (that.data.phone.length < 11) {
      wx.showToast({
        title: '手机号有误',
        icon: 'success',
        duration: 1500
      })
      return false;
    } else if (!myreg.test(that.data.phone)) {
      wx.showToast({
        title: '手机号有误',
        icon: 'success',
        duration: 1500
      })
      return false;
    } else if (that.data.password.length < 6) {
      wx.showToast({
        title: '密码少于6位',
        duration: 1500,
        mask: true
      })
    } else {
      //获取用户信息
      wx.login(
        wx.navigateTo({
          url: '../index/index',
        })
    /*   success: function (res) {
          if (res.code) {
            //发起网络请求
            console.log(that.data.head_img)
            wx.request({
              url: 'https://www.zjzlnet.com/node/user/login',
              data: {
                code: res.code,
                head_img: that.data.head_img,
                nickname: that.data.nickname,
                phone: that.data.phone,
                password: that.data.password,
                organization: that.data.organization,
                name: that.data.name,
                id: that.data.id,
              },
              method: 'POST',
              success(res) {
                console.log(res)
                if (res.data.errno == 0) {
                  if (res.data.data == '注册申请已提交，请耐心等待管理员审核') {
                    wx.showToast({
                      title: '注册已提交',
                      duration: 2000,
                      mask: true,
                    })
                    setTimeout(function () {
                      wx.navigateBack({
                        url: '../index/index'
                      })
                    }.bind(that), 2000)
                  }
                  if (res.data.data !== '注册申请已提交，请耐心等待管理员审核') {
                    // console.info("登陆成功，则保存token到本地");

                    wx.setStorageSync('token', res.data.data);
                    wx.showToast({
                      title: '注册已提交',
                      icon: 'success',
                      duration: 2000,
                      mask: true,
                    })
                    setTimeout(function () {
                      wx.showToast({
                        title: '登录成功',
                        icon: 'success',
                        duration: 2000
                      })
                    }.bind(that), 2000)
                    setTimeout(function () {
                      wx.navigateBack({
                        url: '../index/index',
                      })
                    }.bind(that), 4000);
                  }

                }
              }
            })
          } else {
            console.log('获取用户登录态失败！' + res.errMsg)
          }
        }
      })
    }
  }
})
*/
      )}
  }


  })