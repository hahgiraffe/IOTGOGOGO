 
Page({
  data: { 
  name:'',
  phone:'',
  email:'',
  identity:'', 
  room:'', 
  },

  onLoad: function (options) {   
     this.setData({
      name:options.name,
      phone:options.phone,
      email:options.email,
      identity:options.identity,
      room:options.room,  
    })
    if (this.data.identity==1)
    {
      this.data.identity='普通用户'
    }else{
      this.data.identity='管理员'
    }
    console.log(this.data.room) 
  },

   
Toprevious(){
  wx.navigateTo({
    url: '../user',
  })
}
})