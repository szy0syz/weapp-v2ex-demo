'use strict';

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var host = 'https://www.v2ex.com';
var wxRequest = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var url = arguments[1];
    var res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // 因为此文件是js，故可用wx混用
            wx.showToast({
              title: '加载中',
              icon: 'loading'
            });
            console.log('正在调用的url是: ' + url);
            _context.next = 4;
            return _wepy2.default.request({
              url: url,
              method: params.method || 'GET',
              data: params.data || {}
            });

          case 4:
            res = _context.sent;

            wx.hideToast();
            return _context.abrupt('return', res);

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function wxRequest() {
    return _ref.apply(this, arguments);
  };
}();

// 获取最新主题
var getLatest = function getLatest() {
  return wxRequest(null, host + '/api/topics/latest.json');
};

// 获取最热主题
var getHot = function getHot() {
  return wxRequest(null, host + '/api/topics/hot.json');
};

// 获取所有节点
var getNodes = function getNodes() {
  return wxRequest(null, host + '/api/nodes/all.json');
};

// 获取主题详情 params --> {id: 444}
var getDetail = function getDetail(params) {
  return wxRequest(params, host + '/api/topics/show.json');
};

// 获取主题回帖 params --> {topic_id: 444}
var getReplies = function getReplies(params) {
  return wxRequest(params, host + '/api/replies/show.json');
};

var getVolIdList = function getVolIdList(params) {
  return wxRequest(params, 'http://v3.wufazhuce.com:8000/api/hp/idlist/0');
};
var getCarousel = function getCarousel(params) {
  return wxRequest(params, 'http://v3.wufazhuce.com:8000/api/reading/carousel');
};
var getLastArticles = function getLastArticles(params) {
  return wxRequest(params, 'http://v3.wufazhuce.com:8000/api/reading/index');
};

module.exports = {
  getLatest: getLatest,
  getHot: getHot,
  getNodes: getNodes,
  getDetail: getDetail,
  getReplies: getReplies,
  getVolIdList: getVolIdList,
  getCarousel: getCarousel,
  getLastArticles: getLastArticles

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaTEuanMiXSwibmFtZXMiOlsiaG9zdCIsInd4UmVxdWVzdCIsInBhcmFtcyIsInVybCIsInd4Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3QiLCJtZXRob2QiLCJkYXRhIiwicmVzIiwiaGlkZVRvYXN0IiwiZ2V0TGF0ZXN0IiwiZ2V0SG90IiwiZ2V0Tm9kZXMiLCJnZXREZXRhaWwiLCJnZXRSZXBsaWVzIiwiZ2V0Vm9sSWRMaXN0IiwiZ2V0Q2Fyb3VzZWwiLCJnZXRMYXN0QXJ0aWNsZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7OztBQUVBLElBQU1BLE9BQU8sc0JBQWI7QUFDQSxJQUFNQztBQUFBLHVEQUFZO0FBQUEsUUFBT0MsTUFBUCx1RUFBZ0IsRUFBaEI7QUFBQSxRQUFvQkMsR0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2Q7QUFDQUMsZUFBR0MsU0FBSCxDQUFhO0FBQ1hDLHFCQUFPLEtBREk7QUFFWEMsb0JBQU07QUFGSyxhQUFiO0FBSUFDLG9CQUFRQyxHQUFSLENBQVksZ0JBQWdCTixHQUE1QjtBQU5jO0FBQUEsbUJBT0UsZUFBS08sT0FBTCxDQUFhO0FBQ3pCUCxtQkFBS0EsR0FEb0I7QUFFekJRLHNCQUFRVCxPQUFPUyxNQUFQLElBQWlCLEtBRkE7QUFHekJDLG9CQUFNVixPQUFPVSxJQUFQLElBQWU7QUFISSxhQUFiLENBUEY7O0FBQUE7QUFPVkMsZUFQVTs7QUFZZFQsZUFBR1UsU0FBSDtBQVpjLDZDQWFQRCxHQWJPOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQVo7O0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBTjs7QUFnQkE7QUFDQSxJQUFNRSxZQUFZLFNBQVpBLFNBQVk7QUFBQSxTQUFNZCxVQUFVLElBQVYsRUFBZ0JELE9BQU8seUJBQXZCLENBQU47QUFBQSxDQUFsQjs7QUFFQTtBQUNBLElBQU1nQixTQUFTLFNBQVRBLE1BQVM7QUFBQSxTQUFNZixVQUFVLElBQVYsRUFBZ0JELE9BQU8sc0JBQXZCLENBQU47QUFBQSxDQUFmOztBQUVBO0FBQ0EsSUFBTWlCLFdBQVcsU0FBWEEsUUFBVztBQUFBLFNBQU1oQixVQUFVLElBQVYsRUFBZ0JELE9BQU8scUJBQXZCLENBQU47QUFBQSxDQUFqQjs7QUFFQTtBQUNBLElBQU1rQixZQUFZLFNBQVpBLFNBQVksQ0FBQ2hCLE1BQUQ7QUFBQSxTQUFZRCxVQUFVQyxNQUFWLEVBQWtCRixPQUFPLHVCQUF6QixDQUFaO0FBQUEsQ0FBbEI7O0FBRUE7QUFDQSxJQUFNbUIsYUFBYSxTQUFiQSxVQUFhLENBQUNqQixNQUFEO0FBQUEsU0FBWUQsVUFBVUMsTUFBVixFQUFrQkYsT0FBTyx3QkFBekIsQ0FBWjtBQUFBLENBQW5COztBQUVBLElBQU1vQixlQUFlLFNBQWZBLFlBQWUsQ0FBQ2xCLE1BQUQ7QUFBQSxTQUFZRCxVQUFVQyxNQUFWLEVBQWtCLDhDQUFsQixDQUFaO0FBQUEsQ0FBckI7QUFDQSxJQUFNbUIsY0FBYyxTQUFkQSxXQUFjLENBQUNuQixNQUFEO0FBQUEsU0FBWUQsVUFBVUMsTUFBVixFQUFrQixtREFBbEIsQ0FBWjtBQUFBLENBQXBCO0FBQ0EsSUFBTW9CLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ3BCLE1BQUQ7QUFBQSxTQUFZRCxVQUFVQyxNQUFWLEVBQWtCLGdEQUFsQixDQUFaO0FBQUEsQ0FBeEI7O0FBRUFxQixPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZULHNCQURlO0FBRWZDLGdCQUZlO0FBR2ZDLG9CQUhlO0FBSWZDLHNCQUplO0FBS2ZDLHdCQUxlO0FBTWZDLDRCQU5lO0FBT2ZDLDBCQVBlO0FBUWZDOztBQVJlLENBQWpCIiwiZmlsZSI6ImFwaTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuY29uc3QgaG9zdCA9ICdodHRwczovL3d3dy52MmV4LmNvbSc7XG5jb25zdCB3eFJlcXVlc3QgPSBhc3luYyAocGFyYW1zID0ge30sIHVybCkgPT4ge1xuICAgIC8vIOWboOS4uuatpOaWh+S7tuaYr2pz77yM5pWF5Y+v55Sod3jmt7fnlKhcbiAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgdGl0bGU6ICfliqDovb3kuK0nLFxuICAgICAgaWNvbjogJ2xvYWRpbmcnXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coJ+ato+WcqOiwg+eUqOeahHVybOaYrzogJyArIHVybCk7XG4gICAgbGV0IHJlcyA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBtZXRob2Q6IHBhcmFtcy5tZXRob2QgfHwgJ0dFVCcsXG4gICAgICAgIGRhdGE6IHBhcmFtcy5kYXRhIHx8IHt9XG4gICAgfSk7XG4gICAgd3guaGlkZVRvYXN0KCk7XG4gICAgcmV0dXJuIHJlcztcbn07XG5cbi8vIOiOt+WPluacgOaWsOS4u+mimFxuY29uc3QgZ2V0TGF0ZXN0ID0gKCkgPT4gd3hSZXF1ZXN0KG51bGwsIGhvc3QgKyAnL2FwaS90b3BpY3MvbGF0ZXN0Lmpzb24nKVxuXG4vLyDojrflj5bmnIDng63kuLvpophcbmNvbnN0IGdldEhvdCA9ICgpID0+IHd4UmVxdWVzdChudWxsLCBob3N0ICsgJy9hcGkvdG9waWNzL2hvdC5qc29uJylcblxuLy8g6I635Y+W5omA5pyJ6IqC54K5XG5jb25zdCBnZXROb2RlcyA9ICgpID0+IHd4UmVxdWVzdChudWxsLCBob3N0ICsgJy9hcGkvbm9kZXMvYWxsLmpzb24nKVxuXG4vLyDojrflj5bkuLvpopjor6bmg4UgcGFyYW1zIC0tPiB7aWQ6IDQ0NH1cbmNvbnN0IGdldERldGFpbCA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGhvc3QgKyAnL2FwaS90b3BpY3Mvc2hvdy5qc29uJylcblxuLy8g6I635Y+W5Li76aKY5Zue5biWIHBhcmFtcyAtLT4ge3RvcGljX2lkOiA0NDR9XG5jb25zdCBnZXRSZXBsaWVzID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgaG9zdCArICcvYXBpL3JlcGxpZXMvc2hvdy5qc29uJylcblxuY29uc3QgZ2V0Vm9sSWRMaXN0ID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ2h0dHA6Ly92My53dWZhemh1Y2UuY29tOjgwMDAvYXBpL2hwL2lkbGlzdC8wJyk7XG5jb25zdCBnZXRDYXJvdXNlbCA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICdodHRwOi8vdjMud3VmYXpodWNlLmNvbTo4MDAwL2FwaS9yZWFkaW5nL2Nhcm91c2VsJyk7XG5jb25zdCBnZXRMYXN0QXJ0aWNsZXMgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnaHR0cDovL3YzLnd1ZmF6aHVjZS5jb206ODAwMC9hcGkvcmVhZGluZy9pbmRleCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0TGF0ZXN0LFxuICBnZXRIb3QsXG4gIGdldE5vZGVzLFxuICBnZXREZXRhaWwsXG4gIGdldFJlcGxpZXMsXG4gIGdldFZvbElkTGlzdCxcbiAgZ2V0Q2Fyb3VzZWwsXG4gIGdldExhc3RBcnRpY2xlc1xuXG59O1xuIl19