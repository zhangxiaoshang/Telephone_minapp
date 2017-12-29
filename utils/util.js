const app = getApp();

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const get = (api, data, success, error) => {
  wx.request({
    url: app.globalData.server + api,
    data: data,
    success: res => {
      if (res.statusCode === 200) {
        success && success(res.data)
      } else {
        console.log('请求出错, api:' + api);
      }
    },
    error: res => {
      console.log('请求挂掉, api:' + api);
      error && error(res);
    }
  })
}

const post = (api, data, success, error) => {
  console.log(app.globalData.server + api)
  wx.request({
    url: app.globalData.server + api,
    method: 'POST',
    data: data,
    success: res => {
      if (res.statusCode === 200) {
        success && success(res.data)
      } else {
        console.log('请求出错, api:' + api);
      }
    },
    error: res => {
      console.log('请求挂掉, api:' + api);
      error && error(res);
    }
  })
}

module.exports = {
  formatTime: formatTime,
  get: get,
  post: post
}
