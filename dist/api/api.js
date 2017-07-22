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

module.exports = {
  getLatest: getLatest,
  getHot: getHot,
  getNodes: getNodes,
  getDetail: getDetail,
  getReplies: getReplies
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJob3N0Iiwid3hSZXF1ZXN0IiwicGFyYW1zIiwidXJsIiwiY29uc29sZSIsImxvZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsInJlcyIsInNldFRpbWVvdXQiLCJnZXRMYXRlc3QiLCJnZXRIb3QiLCJnZXROb2RlcyIsImdldERldGFpbCIsImdldFJlcGxpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7OztBQUVBLElBQU1BLE9BQU8sc0JBQWI7QUFDQSxJQUFNQyxZQUFZLFNBQVpBLFNBQVksR0FBc0I7QUFBQSxNQUFyQkMsTUFBcUIsdUVBQVosRUFBWTtBQUFBLE1BQVJDLEdBQVE7O0FBQ3RDQyxVQUFRQyxHQUFSLENBQVksZ0JBQWdCRixHQUE1QjtBQUNBLFNBQU8sSUFBSUcsT0FBSjtBQUFBLHlEQUFZLGlCQUFPQyxPQUFQLEVBQWdCQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNELGVBQUtDLE9BQUwsQ0FBYTtBQUN6Qk4scUJBQUtBO0FBRG9CLGVBQWIsQ0FEQzs7QUFBQTtBQUNiTyxpQkFEYTs7QUFJakJDLHlCQUFXLFlBQU07QUFDZkosd0JBQVFHLEdBQVI7QUFDRCxlQUZEOztBQUppQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFaOztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFRRCxDQVZEOztBQVlBO0FBQ0EsSUFBTUUsWUFBWSxTQUFaQSxTQUFZO0FBQUEsU0FBTVgsVUFBVSxJQUFWLEVBQWdCRCxPQUFPLHlCQUF2QixDQUFOO0FBQUEsQ0FBbEI7O0FBRUE7QUFDQSxJQUFNYSxTQUFTLFNBQVRBLE1BQVM7QUFBQSxTQUFNWixVQUFVLElBQVYsRUFBZ0JELE9BQU8sc0JBQXZCLENBQU47QUFBQSxDQUFmOztBQUVBO0FBQ0EsSUFBTWMsV0FBVyxTQUFYQSxRQUFXO0FBQUEsU0FBTWIsVUFBVSxJQUFWLEVBQWdCRCxPQUFPLHFCQUF2QixDQUFOO0FBQUEsQ0FBakI7O0FBRUE7QUFDQSxJQUFNZSxZQUFZLFNBQVpBLFNBQVksQ0FBQ2IsTUFBRDtBQUFBLFNBQVlELFVBQVVDLE1BQVYsRUFBa0JGLE9BQU8sdUJBQXpCLENBQVo7QUFBQSxDQUFsQjs7QUFFQTtBQUNBLElBQU1nQixhQUFhLFNBQWJBLFVBQWEsQ0FBQ2QsTUFBRDtBQUFBLFNBQVlELFVBQVVDLE1BQVYsRUFBa0JGLE9BQU8sd0JBQXpCLENBQVo7QUFBQSxDQUFuQjs7QUFFQWlCLE9BQU9DLE9BQVAsR0FBaUI7QUFDZk4sc0JBRGU7QUFFZkMsZ0JBRmU7QUFHZkMsb0JBSGU7QUFJZkMsc0JBSmU7QUFLZkM7QUFMZSxDQUFqQiIsImZpbGUiOiJhcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuY29uc3QgaG9zdCA9ICdodHRwczovL3d3dy52MmV4LmNvbSc7XG5jb25zdCB3eFJlcXVlc3QgPSAocGFyYW1zID0ge30sIHVybCkgPT4ge1xuICBjb25zb2xlLmxvZygn5q2j5Zyo6LCD55So55qEdXJs5pivOiAnICsgdXJsKVxuICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCByZXMgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6IHVybFxuICAgIH0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVzb2x2ZShyZXMpO1xuICAgIH0pO1xuICB9KVxufTtcblxuLy8g6I635Y+W5pyA5paw5Li76aKYXG5jb25zdCBnZXRMYXRlc3QgPSAoKSA9PiB3eFJlcXVlc3QobnVsbCwgaG9zdCArICcvYXBpL3RvcGljcy9sYXRlc3QuanNvbicpXG5cbi8vIOiOt+WPluacgOeDreS4u+mimFxuY29uc3QgZ2V0SG90ID0gKCkgPT4gd3hSZXF1ZXN0KG51bGwsIGhvc3QgKyAnL2FwaS90b3BpY3MvaG90Lmpzb24nKVxuXG4vLyDojrflj5bmiYDmnInoioLngrlcbmNvbnN0IGdldE5vZGVzID0gKCkgPT4gd3hSZXF1ZXN0KG51bGwsIGhvc3QgKyAnL2FwaS9ub2Rlcy9hbGwuanNvbicpXG5cbi8vIOiOt+WPluS4u+mimOivpuaDhSBwYXJhbXMgLS0+IHtpZDogNDQ0fVxuY29uc3QgZ2V0RGV0YWlsID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgaG9zdCArICcvYXBpL3RvcGljcy9zaG93Lmpzb24nKVxuXG4vLyDojrflj5bkuLvpopjlm57luJYgcGFyYW1zIC0tPiB7dG9waWNfaWQ6IDQ0NH1cbmNvbnN0IGdldFJlcGxpZXMgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBob3N0ICsgJy9hcGkvcmVwbGllcy9zaG93Lmpzb24nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0TGF0ZXN0LFxuICBnZXRIb3QsXG4gIGdldE5vZGVzLFxuICBnZXREZXRhaWwsXG4gIGdldFJlcGxpZXNcbn07XG4iXX0=