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
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // let res = await wepy.request({
              //   url: url
              // });
              setTimeout(function () {
                resolve('哈哈哈');
              });

            case 1:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJob3N0Iiwid3hSZXF1ZXN0IiwicGFyYW1zIiwidXJsIiwiY29uc29sZSIsImxvZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImdldExhdGVzdCIsImdldEhvdCIsImdldE5vZGVzIiwiZ2V0RGV0YWlsIiwiZ2V0UmVwbGllcyIsImdldFZvbElkTGlzdCIsImdldENhcm91c2VsIiwiZ2V0TGFzdEFydGljbGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPLHNCQUFiO0FBQ0EsSUFBTUMsWUFBWSxTQUFaQSxTQUFZLEdBQXNCO0FBQUEsTUFBckJDLE1BQXFCLHVFQUFaLEVBQVk7QUFBQSxNQUFSQyxHQUFROztBQUN0Q0MsVUFBUUMsR0FBUixDQUFZLGdCQUFnQkYsR0FBNUI7QUFDQSxTQUFPLElBQUlHLE9BQUo7QUFBQSx5REFBWSxpQkFBT0MsT0FBUCxFQUFnQkMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNqQjtBQUNBO0FBQ0E7QUFDQUMseUJBQVcsWUFBTTtBQUNmRix3QkFBUSxLQUFSO0FBQ0QsZUFGRDs7QUFKaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBWjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBUUQsQ0FWRDs7QUFZQTtBQUNBLElBQU1HLFlBQVksU0FBWkEsU0FBWTtBQUFBLFNBQU1ULFVBQVUsSUFBVixFQUFnQkQsT0FBTyx5QkFBdkIsQ0FBTjtBQUFBLENBQWxCOztBQUVBO0FBQ0EsSUFBTVcsU0FBUyxTQUFUQSxNQUFTO0FBQUEsU0FBTVYsVUFBVSxJQUFWLEVBQWdCRCxPQUFPLHNCQUF2QixDQUFOO0FBQUEsQ0FBZjs7QUFFQTtBQUNBLElBQU1ZLFdBQVcsU0FBWEEsUUFBVztBQUFBLFNBQU1YLFVBQVUsSUFBVixFQUFnQkQsT0FBTyxxQkFBdkIsQ0FBTjtBQUFBLENBQWpCOztBQUVBO0FBQ0EsSUFBTWEsWUFBWSxTQUFaQSxTQUFZLENBQUNYLE1BQUQ7QUFBQSxTQUFZRCxVQUFVQyxNQUFWLEVBQWtCRixPQUFPLHVCQUF6QixDQUFaO0FBQUEsQ0FBbEI7O0FBRUE7QUFDQSxJQUFNYyxhQUFhLFNBQWJBLFVBQWEsQ0FBQ1osTUFBRDtBQUFBLFNBQVlELFVBQVVDLE1BQVYsRUFBa0JGLE9BQU8sd0JBQXpCLENBQVo7QUFBQSxDQUFuQjs7QUFFQSxJQUFNZSxlQUFlLFNBQWZBLFlBQWUsQ0FBQ2IsTUFBRDtBQUFBLFNBQVlELFVBQVVDLE1BQVYsRUFBa0IsOENBQWxCLENBQVo7QUFBQSxDQUFyQjtBQUNBLElBQU1jLGNBQWMsU0FBZEEsV0FBYyxDQUFDZCxNQUFEO0FBQUEsU0FBWUQsVUFBVUMsTUFBVixFQUFrQixtREFBbEIsQ0FBWjtBQUFBLENBQXBCO0FBQ0EsSUFBTWUsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDZixNQUFEO0FBQUEsU0FBWUQsVUFBVUMsTUFBVixFQUFrQixnREFBbEIsQ0FBWjtBQUFBLENBQXhCOztBQUVBZ0IsT0FBT0MsT0FBUCxHQUFpQjtBQUNmVCxzQkFEZTtBQUVmQyxnQkFGZTtBQUdmQyxvQkFIZTtBQUlmQyxzQkFKZTtBQUtmQyx3QkFMZTtBQU1mQyw0QkFOZTtBQU9mQywwQkFQZTtBQVFmQzs7QUFSZSxDQUFqQiIsImZpbGUiOiJhcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuY29uc3QgaG9zdCA9ICdodHRwczovL3d3dy52MmV4LmNvbSc7XG5jb25zdCB3eFJlcXVlc3QgPSAocGFyYW1zID0ge30sIHVybCkgPT4ge1xuICBjb25zb2xlLmxvZygn5q2j5Zyo6LCD55So55qEdXJs5pivOiAnICsgdXJsKVxuICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIC8vIGxldCByZXMgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgIC8vICAgdXJsOiB1cmxcbiAgICAvLyB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlc29sdmUoJ+WTiOWTiOWTiCcpO1xuICAgIH0pO1xuICB9KVxufTtcblxuLy8g6I635Y+W5pyA5paw5Li76aKYXG5jb25zdCBnZXRMYXRlc3QgPSAoKSA9PiB3eFJlcXVlc3QobnVsbCwgaG9zdCArICcvYXBpL3RvcGljcy9sYXRlc3QuanNvbicpXG5cbi8vIOiOt+WPluacgOeDreS4u+mimFxuY29uc3QgZ2V0SG90ID0gKCkgPT4gd3hSZXF1ZXN0KG51bGwsIGhvc3QgKyAnL2FwaS90b3BpY3MvaG90Lmpzb24nKVxuXG4vLyDojrflj5bmiYDmnInoioLngrlcbmNvbnN0IGdldE5vZGVzID0gKCkgPT4gd3hSZXF1ZXN0KG51bGwsIGhvc3QgKyAnL2FwaS9ub2Rlcy9hbGwuanNvbicpXG5cbi8vIOiOt+WPluS4u+mimOivpuaDhSBwYXJhbXMgLS0+IHtpZDogNDQ0fVxuY29uc3QgZ2V0RGV0YWlsID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgaG9zdCArICcvYXBpL3RvcGljcy9zaG93Lmpzb24nKVxuXG4vLyDojrflj5bkuLvpopjlm57luJYgcGFyYW1zIC0tPiB7dG9waWNfaWQ6IDQ0NH1cbmNvbnN0IGdldFJlcGxpZXMgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBob3N0ICsgJy9hcGkvcmVwbGllcy9zaG93Lmpzb24nKVxuXG5jb25zdCBnZXRWb2xJZExpc3QgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnaHR0cDovL3YzLnd1ZmF6aHVjZS5jb206ODAwMC9hcGkvaHAvaWRsaXN0LzAnKTtcbmNvbnN0IGdldENhcm91c2VsID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ2h0dHA6Ly92My53dWZhemh1Y2UuY29tOjgwMDAvYXBpL3JlYWRpbmcvY2Fyb3VzZWwnKTtcbmNvbnN0IGdldExhc3RBcnRpY2xlcyA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICdodHRwOi8vdjMud3VmYXpodWNlLmNvbTo4MDAwL2FwaS9yZWFkaW5nL2luZGV4Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRMYXRlc3QsXG4gIGdldEhvdCxcbiAgZ2V0Tm9kZXMsXG4gIGdldERldGFpbCxcbiAgZ2V0UmVwbGllcyxcbiAgZ2V0Vm9sSWRMaXN0LFxuICBnZXRDYXJvdXNlbCxcbiAgZ2V0TGFzdEFydGljbGVzXG5cbn07XG4iXX0=