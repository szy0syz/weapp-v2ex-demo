import wepy from 'wepy';

const host = 'https://www.v2ex.com';
const wxRequest = (params = {}, url) => {
  var ary = []
  if (typeof params.query === 'object') {
    for (var key in params.query) {
      if (params.query.hasOwnProperty(key)) {
        ary.push(`${key}=${params.query[key]}`)
      }
    }
    url += '?' + ary.join('&') // 为url添加查询参数
  }
  console.log('正在调用的url是: ' + url)
  return new Promise(async (resolve, reject) => {
    let res = await wepy.request({url: url});
    if (res) {
      resolve(res)
      if (params.cb && typeof params.cb === 'function') {
        params.cb()
      }
    }
  })
};

// 获取最新主题
const getLatest = (p) => wxRequest(p, host + '/api/topics/latest.json')

// 获取最热主题
const getHot = (p) => wxRequest(p, host + '/api/topics/hot.json')

// 获取所有节点
const getNodes = (p) => wxRequest(p, host + '/api/nodes/all.json')

// 获取主题详情 params --> {id: 444}
const getDetail = (params) => wxRequest(params, host + '/api/topics/show.json')

// 获取主题回帖 params --> {topic_id: 444}
const getReplies = (params) => wxRequest(params, host + '/api/replies/show.json')

module.exports = {
  getLatest,
  getHot,
  getNodes,
  getDetail,
  getReplies
};
