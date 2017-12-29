// pages/edit/edit.js
const app = getApp()
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginInfo: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      loginInfo: app.globalData.loginInfo
    })
  },

  formSubmit: function (e) {
    let api = '/wechat/users/update.json';
    let value = e.detail.value;

    let data = {
      id: this.data.loginInfo.id,
      name: value.name,
      phone: value.phone,
      gender: value.gender,
    };

    util.post(api, data, res => {
      app.globalData.loginInfo.name = res.user.name;
      app.globalData.loginInfo.phone = res.user.phone;
      app.globalData.loginInfo.gender = res.user.gender;
      wx.switchTab({
        url: '/pages/my/my',
      })
      // wx.navigateTo({
      //   url: '/pages/welcome/welcome',
      // })
    })
  },

  delete: function (e) {
    let api = '/wechat/users/delete.json';
    let data = {
      id: this.data.loginInfo.id
    };

    util.post(api, data, res => {
      console.log(res)
      wx.navigateTo({
        url: '/pages/welcome/welcome'
      })
    })
  }
})