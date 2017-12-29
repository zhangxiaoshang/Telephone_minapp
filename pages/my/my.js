// pages/my/my.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      loginInfo: app.globalData.loginInfo
    })

    console.log(this.data.loginInfo)
  },

  onShow: function () {
    this.setData({
      loginInfo: app.globalData.loginInfo
    })
  },

  navigateToCheck: function () {
    wx.navigateTo({
      url: '/pages/check/check'
    })
  },

  navigateToEdit: function () {
    wx.navigateTo({
      url: '/pages/edit/edit'
    })
  },

  userManage: function () {
    wx.navigateTo({
      url: '/pages/manage/manage'
    })
  }
})