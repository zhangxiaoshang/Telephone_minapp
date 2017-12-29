// pages/registe/registe.js
const util = require('../../utils/util.js')
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    departments: [
      '研发部',
      '测试部',
      '技术支持部'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // this.getDepartment()
  },

  /**
   * 获取部门列表
   */
  // getDepartment: function () {
  //   let api = '/departments.json';
  //   let data = {};

  //   util.get(api, data, res => {
  //     this.setData({
  //       departments: res
  //     })
  //   })
  // },

  // 提交申请
  formSubmit: function (e) {
    let userInfo = app.globalData.userInfo
    if (!userInfo) {
      // this.getUserInfo(e);
      console.log('没有userinfo', userInfo)
      return false;
    }

    wx.login({
      success: res => {
        let code = res.code;
        // 发送申请加入请求
        let api = '/api/users';
        let value = e.detail.value;

        let data = {
          js_code: code,
          avatar_url: app.globalData.userInfo.avatarUrl,
          name: value.name,
          phone: value.phone,
          gender: value.gender,
          department: this.data.department,
        };

        util.post(api, data, res => {
          wx.navigateTo({
            url: '/pages/welcome/welcome',
          })
        })
      }
    })




    // util.get(api, data, res => {

    // })

  },

  // 获取Code
  getCode: function (e) {
    wx.login({
      success: res => {
        app.globalData.code = res.code;
        this.formSubmit(e);
        console.log(2, res.code)
        return res.code;
      }
    })
  },

  /**
   * 获取用户信息
   */
  getUserInfo: function (e) {
    wx.getUserInfo({
      success: res => {
        // 可以将 res 发送给后台解码出 unionId
        app.globalData.userInfo = res.userInfo

        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        // 所以此处加入 callback 以防止这种情况
        if (this.userInfoReadyCallback) {
          this.userInfoReadyCallback(res)
        }

        this.formSubmit(e);
      }
    })
  },

  // 切换部门
  bindPickerChange: function (e) {
    let departments = this.data.departments;
    let index = e.detail.value;

    this.setData({
      department: departments[index]
    })
  },
})