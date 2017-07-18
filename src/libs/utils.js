import wepy from 'wepy'

function formatUTC(num) {
  return new Date(num * 1000).toLocaleString()
}

function getRequestData({url, data = null, flag = true, cb} = {}) {
  var ary = []
  if (typeof data === 'object') {
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        ary.push(`${key}=${data[key]}`)
      }
    }
  }
  url += flag ? '?' : null
  url += ary.join('&')
  ary = null
  wepy.request({
    url,
    success: cb
  })
}

module.exports = {
  formatUTC: formatUTC,
  getRequestData: getRequestData
}