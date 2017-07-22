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
              return _wepy2.default.request({ url: url });

            case 2:
              res = _context.sent;

              if (res) {
                resolve(res);
                if (params.cb && typeof params.cb === 'function') {
                  params.cb();
                }
              }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJob3N0Iiwid3hSZXF1ZXN0IiwicGFyYW1zIiwidXJsIiwiYXJ5IiwicXVlcnkiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJqb2luIiwiY29uc29sZSIsImxvZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsInJlcyIsImNiIiwiZ2V0TGF0ZXN0IiwicCIsImdldEhvdCIsImdldE5vZGVzIiwiZ2V0RGV0YWlsIiwiZ2V0UmVwbGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPLHNCQUFiO0FBQ0EsSUFBTUMsWUFBWSxTQUFaQSxTQUFZLEdBQXNCO0FBQUEsTUFBckJDLE1BQXFCLHVFQUFaLEVBQVk7QUFBQSxNQUFSQyxHQUFROztBQUN0QyxNQUFJQyxNQUFNLEVBQVY7QUFDQSxNQUFJLFFBQU9GLE9BQU9HLEtBQWQsTUFBd0IsUUFBNUIsRUFBc0M7QUFDcEMsU0FBSyxJQUFJQyxHQUFULElBQWdCSixPQUFPRyxLQUF2QixFQUE4QjtBQUM1QixVQUFJSCxPQUFPRyxLQUFQLENBQWFFLGNBQWIsQ0FBNEJELEdBQTVCLENBQUosRUFBc0M7QUFDcENGLFlBQUlJLElBQUosQ0FBWUYsR0FBWixTQUFtQkosT0FBT0csS0FBUCxDQUFhQyxHQUFiLENBQW5CO0FBQ0Q7QUFDRjtBQUNESCxXQUFPLE1BQU1DLElBQUlLLElBQUosQ0FBUyxHQUFULENBQWIsQ0FOb0MsQ0FNVDtBQUM1QjtBQUNEQyxVQUFRQyxHQUFSLENBQVksZ0JBQWdCUixHQUE1QjtBQUNBLFNBQU8sSUFBSVMsT0FBSjtBQUFBLHlEQUFZLGlCQUFPQyxPQUFQLEVBQWdCQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNELGVBQUtDLE9BQUwsQ0FBYSxFQUFDWixLQUFLQSxHQUFOLEVBQWIsQ0FEQzs7QUFBQTtBQUNiYSxpQkFEYTs7QUFFakIsa0JBQUlBLEdBQUosRUFBUztBQUNQSCx3QkFBUUcsR0FBUjtBQUNBLG9CQUFJZCxPQUFPZSxFQUFQLElBQWEsT0FBT2YsT0FBT2UsRUFBZCxLQUFxQixVQUF0QyxFQUFrRDtBQUNoRGYseUJBQU9lLEVBQVA7QUFDRDtBQUNGOztBQVBnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFaOztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFTRCxDQXBCRDs7QUFzQkE7QUFDQSxJQUFNQyxZQUFZLFNBQVpBLFNBQVksQ0FBQ0MsQ0FBRDtBQUFBLFNBQU9sQixVQUFVa0IsQ0FBVixFQUFhbkIsT0FBTyx5QkFBcEIsQ0FBUDtBQUFBLENBQWxCOztBQUVBO0FBQ0EsSUFBTW9CLFNBQVMsU0FBVEEsTUFBUyxDQUFDRCxDQUFEO0FBQUEsU0FBT2xCLFVBQVVrQixDQUFWLEVBQWFuQixPQUFPLHNCQUFwQixDQUFQO0FBQUEsQ0FBZjs7QUFFQTtBQUNBLElBQU1xQixXQUFXLFNBQVhBLFFBQVcsQ0FBQ0YsQ0FBRDtBQUFBLFNBQU9sQixVQUFVa0IsQ0FBVixFQUFhbkIsT0FBTyxxQkFBcEIsQ0FBUDtBQUFBLENBQWpCOztBQUVBO0FBQ0EsSUFBTXNCLFlBQVksU0FBWkEsU0FBWSxDQUFDcEIsTUFBRDtBQUFBLFNBQVlELFVBQVVDLE1BQVYsRUFBa0JGLE9BQU8sdUJBQXpCLENBQVo7QUFBQSxDQUFsQjs7QUFFQTtBQUNBLElBQU11QixhQUFhLFNBQWJBLFVBQWEsQ0FBQ3JCLE1BQUQ7QUFBQSxTQUFZRCxVQUFVQyxNQUFWLEVBQWtCRixPQUFPLHdCQUF6QixDQUFaO0FBQUEsQ0FBbkI7O0FBRUF3QixPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZQLHNCQURlO0FBRWZFLGdCQUZlO0FBR2ZDLG9CQUhlO0FBSWZDLHNCQUplO0FBS2ZDO0FBTGUsQ0FBakIiLCJmaWxlIjoiYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbmNvbnN0IGhvc3QgPSAnaHR0cHM6Ly93d3cudjJleC5jb20nO1xuY29uc3Qgd3hSZXF1ZXN0ID0gKHBhcmFtcyA9IHt9LCB1cmwpID0+IHtcbiAgdmFyIGFyeSA9IFtdXG4gIGlmICh0eXBlb2YgcGFyYW1zLnF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIGZvciAodmFyIGtleSBpbiBwYXJhbXMucXVlcnkpIHtcbiAgICAgIGlmIChwYXJhbXMucXVlcnkuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBhcnkucHVzaChgJHtrZXl9PSR7cGFyYW1zLnF1ZXJ5W2tleV19YClcbiAgICAgIH1cbiAgICB9XG4gICAgdXJsICs9ICc/JyArIGFyeS5qb2luKCcmJykgLy8g5Li6dXJs5re75Yqg5p+l6K+i5Y+C5pWwXG4gIH1cbiAgY29uc29sZS5sb2coJ+ato+WcqOiwg+eUqOeahHVybOaYrzogJyArIHVybClcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgcmVzID0gYXdhaXQgd2VweS5yZXF1ZXN0KHt1cmw6IHVybH0pO1xuICAgIGlmIChyZXMpIHtcbiAgICAgIHJlc29sdmUocmVzKVxuICAgICAgaWYgKHBhcmFtcy5jYiAmJiB0eXBlb2YgcGFyYW1zLmNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBhcmFtcy5jYigpXG4gICAgICB9XG4gICAgfVxuICB9KVxufTtcblxuLy8g6I635Y+W5pyA5paw5Li76aKYXG5jb25zdCBnZXRMYXRlc3QgPSAocCkgPT4gd3hSZXF1ZXN0KHAsIGhvc3QgKyAnL2FwaS90b3BpY3MvbGF0ZXN0Lmpzb24nKVxuXG4vLyDojrflj5bmnIDng63kuLvpophcbmNvbnN0IGdldEhvdCA9IChwKSA9PiB3eFJlcXVlc3QocCwgaG9zdCArICcvYXBpL3RvcGljcy9ob3QuanNvbicpXG5cbi8vIOiOt+WPluaJgOacieiKgueCuVxuY29uc3QgZ2V0Tm9kZXMgPSAocCkgPT4gd3hSZXF1ZXN0KHAsIGhvc3QgKyAnL2FwaS9ub2Rlcy9hbGwuanNvbicpXG5cbi8vIOiOt+WPluS4u+mimOivpuaDhSBwYXJhbXMgLS0+IHtpZDogNDQ0fVxuY29uc3QgZ2V0RGV0YWlsID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgaG9zdCArICcvYXBpL3RvcGljcy9zaG93Lmpzb24nKVxuXG4vLyDojrflj5bkuLvpopjlm57luJYgcGFyYW1zIC0tPiB7dG9waWNfaWQ6IDQ0NH1cbmNvbnN0IGdldFJlcGxpZXMgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBob3N0ICsgJy9hcGkvcmVwbGllcy9zaG93Lmpzb24nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0TGF0ZXN0LFxuICBnZXRIb3QsXG4gIGdldE5vZGVzLFxuICBnZXREZXRhaWwsXG4gIGdldFJlcGxpZXNcbn07XG4iXX0=