'use strict';

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var host = 'https://www.v2ex.com';
var wxRequest = function wxRequest() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = arguments[1];

  console.log('正在调用的url是: ' + url);
  return new Promise(function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(resolve, reject) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _wepy2.default.request({
                url: url
              });

            case 2:
              res = _context.sent;

              setTimeout(function () {
                resolve(res);
              });

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }());
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJob3N0Iiwid3hSZXF1ZXN0IiwicGFyYW1zIiwidXJsIiwiY29uc29sZSIsImxvZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsInJlcyIsInNldFRpbWVvdXQiLCJnZXRMYXRlc3QiLCJnZXRIb3QiLCJnZXROb2RlcyIsImdldERldGFpbCIsImdldFJlcGxpZXMiLCJnZXRWb2xJZExpc3QiLCJnZXRDYXJvdXNlbCIsImdldExhc3RBcnRpY2xlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBTyxzQkFBYjtBQUNBLElBQU1DLFlBQVksU0FBWkEsU0FBWSxHQUFzQjtBQUFBLE1BQXJCQyxNQUFxQix1RUFBWixFQUFZO0FBQUEsTUFBUkMsR0FBUTs7QUFDdENDLFVBQVFDLEdBQVIsQ0FBWSxnQkFBZ0JGLEdBQTVCO0FBQ0EsU0FBTyxJQUFJRyxPQUFKO0FBQUEseURBQVksaUJBQU9DLE9BQVAsRUFBZ0JDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0QsZUFBS0MsT0FBTCxDQUFhO0FBQ3pCTixxQkFBS0E7QUFEb0IsZUFBYixDQURDOztBQUFBO0FBQ2JPLGlCQURhOztBQUlqQkMseUJBQVcsWUFBTTtBQUNmSix3QkFBUUcsR0FBUjtBQUNELGVBRkQ7O0FBSmlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVo7O0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQVFELENBVkQ7O0FBWUE7QUFDQSxJQUFNRSxZQUFZLFNBQVpBLFNBQVk7QUFBQSxTQUFNWCxVQUFVLElBQVYsRUFBZ0JELE9BQU8seUJBQXZCLENBQU47QUFBQSxDQUFsQjs7QUFFQTtBQUNBLElBQU1hLFNBQVMsU0FBVEEsTUFBUztBQUFBLFNBQU1aLFVBQVUsSUFBVixFQUFnQkQsT0FBTyxzQkFBdkIsQ0FBTjtBQUFBLENBQWY7O0FBRUE7QUFDQSxJQUFNYyxXQUFXLFNBQVhBLFFBQVc7QUFBQSxTQUFNYixVQUFVLElBQVYsRUFBZ0JELE9BQU8scUJBQXZCLENBQU47QUFBQSxDQUFqQjs7QUFFQTtBQUNBLElBQU1lLFlBQVksU0FBWkEsU0FBWSxDQUFDYixNQUFEO0FBQUEsU0FBWUQsVUFBVUMsTUFBVixFQUFrQkYsT0FBTyx1QkFBekIsQ0FBWjtBQUFBLENBQWxCOztBQUVBO0FBQ0EsSUFBTWdCLGFBQWEsU0FBYkEsVUFBYSxDQUFDZCxNQUFEO0FBQUEsU0FBWUQsVUFBVUMsTUFBVixFQUFrQkYsT0FBTyx3QkFBekIsQ0FBWjtBQUFBLENBQW5COztBQUVBLElBQU1pQixlQUFlLFNBQWZBLFlBQWUsQ0FBQ2YsTUFBRDtBQUFBLFNBQVlELFVBQVVDLE1BQVYsRUFBa0IsOENBQWxCLENBQVo7QUFBQSxDQUFyQjtBQUNBLElBQU1nQixjQUFjLFNBQWRBLFdBQWMsQ0FBQ2hCLE1BQUQ7QUFBQSxTQUFZRCxVQUFVQyxNQUFWLEVBQWtCLG1EQUFsQixDQUFaO0FBQUEsQ0FBcEI7QUFDQSxJQUFNaUIsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDakIsTUFBRDtBQUFBLFNBQVlELFVBQVVDLE1BQVYsRUFBa0IsZ0RBQWxCLENBQVo7QUFBQSxDQUF4Qjs7QUFFQWtCLE9BQU9DLE9BQVAsR0FBaUI7QUFDZlQsc0JBRGU7QUFFZkMsZ0JBRmU7QUFHZkMsb0JBSGU7QUFJZkMsc0JBSmU7QUFLZkMsd0JBTGU7QUFNZkMsNEJBTmU7QUFPZkMsMEJBUGU7QUFRZkM7O0FBUmUsQ0FBakIiLCJmaWxlIjoiYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbmNvbnN0IGhvc3QgPSAnaHR0cHM6Ly93d3cudjJleC5jb20nO1xuY29uc3Qgd3hSZXF1ZXN0ID0gKHBhcmFtcyA9IHt9LCB1cmwpID0+IHtcbiAgY29uc29sZS5sb2coJ+ato+WcqOiwg+eUqOeahHVybOaYrzogJyArIHVybClcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgcmVzID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiB1cmxcbiAgICB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlc29sdmUocmVzKTtcbiAgICB9KTtcbiAgfSlcbn07XG5cbi8vIOiOt+WPluacgOaWsOS4u+mimFxuY29uc3QgZ2V0TGF0ZXN0ID0gKCkgPT4gd3hSZXF1ZXN0KG51bGwsIGhvc3QgKyAnL2FwaS90b3BpY3MvbGF0ZXN0Lmpzb24nKVxuXG4vLyDojrflj5bmnIDng63kuLvpophcbmNvbnN0IGdldEhvdCA9ICgpID0+IHd4UmVxdWVzdChudWxsLCBob3N0ICsgJy9hcGkvdG9waWNzL2hvdC5qc29uJylcblxuLy8g6I635Y+W5omA5pyJ6IqC54K5XG5jb25zdCBnZXROb2RlcyA9ICgpID0+IHd4UmVxdWVzdChudWxsLCBob3N0ICsgJy9hcGkvbm9kZXMvYWxsLmpzb24nKVxuXG4vLyDojrflj5bkuLvpopjor6bmg4UgcGFyYW1zIC0tPiB7aWQ6IDQ0NH1cbmNvbnN0IGdldERldGFpbCA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGhvc3QgKyAnL2FwaS90b3BpY3Mvc2hvdy5qc29uJylcblxuLy8g6I635Y+W5Li76aKY5Zue5biWIHBhcmFtcyAtLT4ge3RvcGljX2lkOiA0NDR9XG5jb25zdCBnZXRSZXBsaWVzID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgaG9zdCArICcvYXBpL3JlcGxpZXMvc2hvdy5qc29uJylcblxuY29uc3QgZ2V0Vm9sSWRMaXN0ID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ2h0dHA6Ly92My53dWZhemh1Y2UuY29tOjgwMDAvYXBpL2hwL2lkbGlzdC8wJyk7XG5jb25zdCBnZXRDYXJvdXNlbCA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICdodHRwOi8vdjMud3VmYXpodWNlLmNvbTo4MDAwL2FwaS9yZWFkaW5nL2Nhcm91c2VsJyk7XG5jb25zdCBnZXRMYXN0QXJ0aWNsZXMgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnaHR0cDovL3YzLnd1ZmF6aHVjZS5jb206ODAwMC9hcGkvcmVhZGluZy9pbmRleCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0TGF0ZXN0LFxuICBnZXRIb3QsXG4gIGdldE5vZGVzLFxuICBnZXREZXRhaWwsXG4gIGdldFJlcGxpZXMsXG4gIGdldFZvbElkTGlzdCxcbiAgZ2V0Q2Fyb3VzZWwsXG4gIGdldExhc3RBcnRpY2xlc1xuXG59O1xuIl19