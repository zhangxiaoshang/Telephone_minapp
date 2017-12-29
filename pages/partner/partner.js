// pages/partner/partner.js
const util = require('../../utils/util.js')
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    partners: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPartners();
  },

  onPullDownRefresh: function () {
    this.getPartners();
  },

  /**
   * 获取联系人列表
   */
  getPartners: function () {
    console.log(11, app.globalData.loginInfo.level)
    if (app.globalData.loginInfo.level === 0) {
      return;
    }

    let api = '/wechat/users/list.json';
    let data = {
      id: app.globalData.loginInfo.id
    }

    util.get(api, data, (res) => {
      wx.stopPullDownRefresh();
      this.setData({
        partners: res.data
      })
    })
  },

  /**
   * 拨打电话
   */
  ontell: function (event) {
    let phone = event.currentTarget.dataset.phone
    wx.makePhoneCall({
      phoneNumber: phone
    })
  }
})