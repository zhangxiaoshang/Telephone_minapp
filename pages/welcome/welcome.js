// pages/welcome/welcome.js
const app = getApp()
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getLoginInfo(this.navigateTo);
  },

  /**
   * 获取登录信息
   */
  getLoginInfo: function (callback) {
    wx.login({
      success: res => {
        // wx.request({
        //   url: app.globalData.server + '/api/users/login',
        //   method: 'GET',
        //   data: {
        //     js_code: res.code
        //   },
        //   success: res => {
        //     console.log(res)
        //     app.globalData.loginInfo = res.data.user;
        //     callback(app.globalData.loginInfo)
        //   }
        // })
        let api = '/api/users/login';
        let data = {
          js_code: res.code
        }

        util.get(api, data, res => {
          if (res.success) {
            app.globalData.loginInfo = res.body;
            callback(app.globalData.loginInfo)
          }
        })
      }
    })
  },

  // 页面跳转
  navigateTo: function (userInfo) {
    if (userInfo) {
      wx.switchTab({
        url: '/pages/partner/partner',
      })
    } else {
      wx.navigateTo({
        url: '/pages/registe/registe',
      })
    }
  }
})