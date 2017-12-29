// pages/manage/manage.js
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
    this.initData();
  },

  initData: function () {
    let api = '/wechat/users/list';
    let data = {
      id: app.globalData.loginInfo.id
    };

    util.get(api, data, res => {
      this.setData({
        list: res.data
      })
    })
  },

  delete: function (event) {
    let id = event.currentTarget.dataset.id;
    console.log(event, id)
    let api = '/wechat/users/delete';
    let data = {
      id: id
    }

    util.post(api, data, res => {
      wx.showToast({
        title: '删除成功',
        icon: 'success',
        duration: 2000,
        success: wx.navigateTo({
          url: '/pages/welcome/welcome',
        })
      })
    })
  }
})