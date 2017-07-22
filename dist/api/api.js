'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var host = 'https://www.v2ex.com';
var wxRequest = function wxRequest() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = arguments[1];

  var ary = [];
  if (_typeof(params.query) === 'object') {
    for (var key in params.query) {
      if (params.query.hasOwnProperty(key)) {
        ary.push(key + '=' + params.query[key]);
      }
    }
    url += '?' + ary.join('&'); // 为url添加查询参数
  }
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
var getLatest = function getLatest(p) {
  return wxRequest(p, host + '/api/topics/latest.json');
};

// 获取最热主题
var getHot = function getHot(p) {
  return wxRequest(p, host + '/api/topics/hot.json');
};

// 获取所有节点
var getNodes = function getNodes(p) {
  return wxRequest(p, host + '/api/nodes/all.json');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJob3N0Iiwid3hSZXF1ZXN0IiwicGFyYW1zIiwidXJsIiwiYXJ5IiwicXVlcnkiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJqb2luIiwiY29uc29sZSIsImxvZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsInJlcyIsInNldFRpbWVvdXQiLCJnZXRMYXRlc3QiLCJwIiwiZ2V0SG90IiwiZ2V0Tm9kZXMiLCJnZXREZXRhaWwiLCJnZXRSZXBsaWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7OztBQUVBLElBQU1BLE9BQU8sc0JBQWI7QUFDQSxJQUFNQyxZQUFZLFNBQVpBLFNBQVksR0FBc0I7QUFBQSxNQUFyQkMsTUFBcUIsdUVBQVosRUFBWTtBQUFBLE1BQVJDLEdBQVE7O0FBQ3RDLE1BQUlDLE1BQU0sRUFBVjtBQUNBLE1BQUksUUFBT0YsT0FBT0csS0FBZCxNQUF3QixRQUE1QixFQUFzQztBQUNwQyxTQUFLLElBQUlDLEdBQVQsSUFBZ0JKLE9BQU9HLEtBQXZCLEVBQThCO0FBQzVCLFVBQUlILE9BQU9HLEtBQVAsQ0FBYUUsY0FBYixDQUE0QkQsR0FBNUIsQ0FBSixFQUFzQztBQUNwQ0YsWUFBSUksSUFBSixDQUFZRixHQUFaLFNBQW1CSixPQUFPRyxLQUFQLENBQWFDLEdBQWIsQ0FBbkI7QUFDRDtBQUNGO0FBQ0RILFdBQU8sTUFBTUMsSUFBSUssSUFBSixDQUFTLEdBQVQsQ0FBYixDQU5vQyxDQU1UO0FBQzVCO0FBQ0RDLFVBQVFDLEdBQVIsQ0FBWSxnQkFBZ0JSLEdBQTVCO0FBQ0EsU0FBTyxJQUFJUyxPQUFKO0FBQUEseURBQVksaUJBQU9DLE9BQVAsRUFBZ0JDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0QsZUFBS0MsT0FBTCxDQUFhO0FBQ3pCWixxQkFBS0E7QUFEb0IsZUFBYixDQURDOztBQUFBO0FBQ2JhLGlCQURhOztBQUlqQkMseUJBQVcsWUFBTTtBQUNmSix3QkFBUUcsR0FBUjtBQUNELGVBRkQ7O0FBSmlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVo7O0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQVFELENBbkJEOztBQXFCQTtBQUNBLElBQU1FLFlBQVksU0FBWkEsU0FBWSxDQUFDQyxDQUFEO0FBQUEsU0FBT2xCLFVBQVVrQixDQUFWLEVBQWFuQixPQUFPLHlCQUFwQixDQUFQO0FBQUEsQ0FBbEI7O0FBRUE7QUFDQSxJQUFNb0IsU0FBUyxTQUFUQSxNQUFTLENBQUNELENBQUQ7QUFBQSxTQUFPbEIsVUFBVWtCLENBQVYsRUFBYW5CLE9BQU8sc0JBQXBCLENBQVA7QUFBQSxDQUFmOztBQUVBO0FBQ0EsSUFBTXFCLFdBQVcsU0FBWEEsUUFBVyxDQUFDRixDQUFEO0FBQUEsU0FBT2xCLFVBQVVrQixDQUFWLEVBQWFuQixPQUFPLHFCQUFwQixDQUFQO0FBQUEsQ0FBakI7O0FBRUE7QUFDQSxJQUFNc0IsWUFBWSxTQUFaQSxTQUFZLENBQUNwQixNQUFEO0FBQUEsU0FBWUQsVUFBVUMsTUFBVixFQUFrQkYsT0FBTyx1QkFBekIsQ0FBWjtBQUFBLENBQWxCOztBQUVBO0FBQ0EsSUFBTXVCLGFBQWEsU0FBYkEsVUFBYSxDQUFDckIsTUFBRDtBQUFBLFNBQVlELFVBQVVDLE1BQVYsRUFBa0JGLE9BQU8sd0JBQXpCLENBQVo7QUFBQSxDQUFuQjs7QUFFQXdCLE9BQU9DLE9BQVAsR0FBaUI7QUFDZlAsc0JBRGU7QUFFZkUsZ0JBRmU7QUFHZkMsb0JBSGU7QUFJZkMsc0JBSmU7QUFLZkM7QUFMZSxDQUFqQiIsImZpbGUiOiJhcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuY29uc3QgaG9zdCA9ICdodHRwczovL3d3dy52MmV4LmNvbSc7XG5jb25zdCB3eFJlcXVlc3QgPSAocGFyYW1zID0ge30sIHVybCkgPT4ge1xuICB2YXIgYXJ5ID0gW11cbiAgaWYgKHR5cGVvZiBwYXJhbXMucXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHBhcmFtcy5xdWVyeSkge1xuICAgICAgaWYgKHBhcmFtcy5xdWVyeS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGFyeS5wdXNoKGAke2tleX09JHtwYXJhbXMucXVlcnlba2V5XX1gKVxuICAgICAgfVxuICAgIH1cbiAgICB1cmwgKz0gJz8nICsgYXJ5LmpvaW4oJyYnKSAvLyDkuLp1cmzmt7vliqDmn6Xor6Llj4LmlbBcbiAgfVxuICBjb25zb2xlLmxvZygn5q2j5Zyo6LCD55So55qEdXJs5pivOiAnICsgdXJsKVxuICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCByZXMgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6IHVybFxuICAgIH0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVzb2x2ZShyZXMpO1xuICAgIH0pO1xuICB9KVxufTtcblxuLy8g6I635Y+W5pyA5paw5Li76aKYXG5jb25zdCBnZXRMYXRlc3QgPSAocCkgPT4gd3hSZXF1ZXN0KHAsIGhvc3QgKyAnL2FwaS90b3BpY3MvbGF0ZXN0Lmpzb24nKVxuXG4vLyDojrflj5bmnIDng63kuLvpophcbmNvbnN0IGdldEhvdCA9IChwKSA9PiB3eFJlcXVlc3QocCwgaG9zdCArICcvYXBpL3RvcGljcy9ob3QuanNvbicpXG5cbi8vIOiOt+WPluaJgOacieiKgueCuVxuY29uc3QgZ2V0Tm9kZXMgPSAocCkgPT4gd3hSZXF1ZXN0KHAsIGhvc3QgKyAnL2FwaS9ub2Rlcy9hbGwuanNvbicpXG5cbi8vIOiOt+WPluS4u+mimOivpuaDhSBwYXJhbXMgLS0+IHtpZDogNDQ0fVxuY29uc3QgZ2V0RGV0YWlsID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgaG9zdCArICcvYXBpL3RvcGljcy9zaG93Lmpzb24nKVxuXG4vLyDojrflj5bkuLvpopjlm57luJYgcGFyYW1zIC0tPiB7dG9waWNfaWQ6IDQ0NH1cbmNvbnN0IGdldFJlcGxpZXMgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBob3N0ICsgJy9hcGkvcmVwbGllcy9zaG93Lmpzb24nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0TGF0ZXN0LFxuICBnZXRIb3QsXG4gIGdldE5vZGVzLFxuICBnZXREZXRhaWwsXG4gIGdldFJlcGxpZXNcbn07XG4iXX0=