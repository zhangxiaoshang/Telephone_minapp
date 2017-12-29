// pages/check/check.js
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkList: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initData();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  initData: function () {
    let api = '/wechat/users/applies';
    let data = {};

    util.get(api, data, res => {
      this.setData({
        checkList: res.data
      })
    })
  },

  bindchange: function (e) {
    let api = '/wechat/users/appply';
    let data = {
      id: e.currentTarget.dataset.id,
      approved: e.detail.value
    }

    util.post(api, data, res => {
      console.log(res)
    })
  }
})