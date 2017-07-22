import wepy from 'wepy';

const host = 'https://www.v2ex.com';
const wxRequest = async (params = {}, url) => {
    // 因为此文件是js，故可用wx混用
    wx.showToast({
      title: '加载中',
      icon: 'loading'
    });
    console.log('正在调用的url是' + url);
    let res = await wepy.request({
        url: url,
        method: params.method || 'GET',
        data: params.data || {},
        header: {'Content-Type': 'application/json'},
    });
    wx.hideToast();
    return res;
};

// 获取最新主题
const getLatest = () => wxRequest(null, host + '/api/topics/latest.json');

// 获取最热主题
const getHot = () => wxRequest(null, host + '/api/topics/hot.json');

// 获取所有节点
const getNodes = () => wxRequest(null, host + '/api/nodes/all.json');

// 获取主题详情 params --> {id: 444}
const getDetail = (params) => wxRequest(params, host + '/api/topics/show.json');

// 获取主题回帖 params --> {topic_id: 444}
const getReplies = (params) => wxRequest(params, host + '/api/replies/show.json');

module.exports = {
  getLatest,
  getHot,
  getNodes
};
