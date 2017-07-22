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
  // wx.showToast({
  //     title: '加载中',
  //     icon: 'loading'
  //   });
  //   console.log('正在调用的url是: ' + url);
  //   let res = await wepy.request({
  //       url: url,
  //       method: params.method || 'GET',
  //       data: params.data || {}
  //   });
  //   wx.hideToast();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJob3N0Iiwid3hSZXF1ZXN0IiwicGFyYW1zIiwidXJsIiwiYXJ5IiwicXVlcnkiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJqb2luIiwiY29uc29sZSIsImxvZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsInJlcyIsImNiIiwiZ2V0TGF0ZXN0IiwicCIsImdldEhvdCIsImdldE5vZGVzIiwiZ2V0RGV0YWlsIiwiZ2V0UmVwbGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPLHNCQUFiO0FBQ0EsSUFBTUMsWUFBWSxTQUFaQSxTQUFZLEdBQXNCO0FBQUEsTUFBckJDLE1BQXFCLHVFQUFaLEVBQVk7QUFBQSxNQUFSQyxHQUFROztBQUN0QyxNQUFJQyxNQUFNLEVBQVY7QUFDQSxNQUFJLFFBQU9GLE9BQU9HLEtBQWQsTUFBd0IsUUFBNUIsRUFBc0M7QUFDcEMsU0FBSyxJQUFJQyxHQUFULElBQWdCSixPQUFPRyxLQUF2QixFQUE4QjtBQUM1QixVQUFJSCxPQUFPRyxLQUFQLENBQWFFLGNBQWIsQ0FBNEJELEdBQTVCLENBQUosRUFBc0M7QUFDcENGLFlBQUlJLElBQUosQ0FBWUYsR0FBWixTQUFtQkosT0FBT0csS0FBUCxDQUFhQyxHQUFiLENBQW5CO0FBQ0Q7QUFDRjtBQUNESCxXQUFPLE1BQU1DLElBQUlLLElBQUosQ0FBUyxHQUFULENBQWIsQ0FOb0MsQ0FNVDtBQUM1QjtBQUNEQyxVQUFRQyxHQUFSLENBQVksZ0JBQWdCUixHQUE1QjtBQUNBLFNBQU8sSUFBSVMsT0FBSjtBQUFBLHlEQUFZLGlCQUFPQyxPQUFQLEVBQWdCQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNELGVBQUtDLE9BQUwsQ0FBYSxFQUFDWixLQUFLQSxHQUFOLEVBQWIsQ0FEQzs7QUFBQTtBQUNiYSxpQkFEYTs7QUFFakIsa0JBQUlBLEdBQUosRUFBUztBQUNQSCx3QkFBUUcsR0FBUjtBQUNBLG9CQUFJZCxPQUFPZSxFQUFQLElBQWEsT0FBT2YsT0FBT2UsRUFBZCxLQUFxQixVQUF0QyxFQUFrRDtBQUNoRGYseUJBQU9lLEVBQVA7QUFDRDtBQUNGOztBQVBnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFaOztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsQ0EvQkQ7O0FBaUNBO0FBQ0EsSUFBTUMsWUFBWSxTQUFaQSxTQUFZLENBQUNDLENBQUQ7QUFBQSxTQUFPbEIsVUFBVWtCLENBQVYsRUFBYW5CLE9BQU8seUJBQXBCLENBQVA7QUFBQSxDQUFsQjs7QUFFQTtBQUNBLElBQU1vQixTQUFTLFNBQVRBLE1BQVMsQ0FBQ0QsQ0FBRDtBQUFBLFNBQU9sQixVQUFVa0IsQ0FBVixFQUFhbkIsT0FBTyxzQkFBcEIsQ0FBUDtBQUFBLENBQWY7O0FBRUE7QUFDQSxJQUFNcUIsV0FBVyxTQUFYQSxRQUFXLENBQUNGLENBQUQ7QUFBQSxTQUFPbEIsVUFBVWtCLENBQVYsRUFBYW5CLE9BQU8scUJBQXBCLENBQVA7QUFBQSxDQUFqQjs7QUFFQTtBQUNBLElBQU1zQixZQUFZLFNBQVpBLFNBQVksQ0FBQ3BCLE1BQUQ7QUFBQSxTQUFZRCxVQUFVQyxNQUFWLEVBQWtCRixPQUFPLHVCQUF6QixDQUFaO0FBQUEsQ0FBbEI7O0FBRUE7QUFDQSxJQUFNdUIsYUFBYSxTQUFiQSxVQUFhLENBQUNyQixNQUFEO0FBQUEsU0FBWUQsVUFBVUMsTUFBVixFQUFrQkYsT0FBTyx3QkFBekIsQ0FBWjtBQUFBLENBQW5COztBQUVBd0IsT0FBT0MsT0FBUCxHQUFpQjtBQUNmUCxzQkFEZTtBQUVmRSxnQkFGZTtBQUdmQyxvQkFIZTtBQUlmQyxzQkFKZTtBQUtmQztBQUxlLENBQWpCIiwiZmlsZSI6ImFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG5jb25zdCBob3N0ID0gJ2h0dHBzOi8vd3d3LnYyZXguY29tJztcbmNvbnN0IHd4UmVxdWVzdCA9IChwYXJhbXMgPSB7fSwgdXJsKSA9PiB7XG4gIHZhciBhcnkgPSBbXVxuICBpZiAodHlwZW9mIHBhcmFtcy5xdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gcGFyYW1zLnF1ZXJ5KSB7XG4gICAgICBpZiAocGFyYW1zLnF1ZXJ5Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgYXJ5LnB1c2goYCR7a2V5fT0ke3BhcmFtcy5xdWVyeVtrZXldfWApXG4gICAgICB9XG4gICAgfVxuICAgIHVybCArPSAnPycgKyBhcnkuam9pbignJicpIC8vIOS4unVybOa3u+WKoOafpeivouWPguaVsFxuICB9XG4gIGNvbnNvbGUubG9nKCfmraPlnKjosIPnlKjnmoR1cmzmmK86ICcgKyB1cmwpXG4gIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IHJlcyA9IGF3YWl0IHdlcHkucmVxdWVzdCh7dXJsOiB1cmx9KTtcbiAgICBpZiAocmVzKSB7XG4gICAgICByZXNvbHZlKHJlcylcbiAgICAgIGlmIChwYXJhbXMuY2IgJiYgdHlwZW9mIHBhcmFtcy5jYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwYXJhbXMuY2IoKVxuICAgICAgfVxuICAgIH1cbiAgfSlcbiAgLy8gd3guc2hvd1RvYXN0KHtcbiAgLy8gICAgIHRpdGxlOiAn5Yqg6L295LitJyxcbiAgLy8gICAgIGljb246ICdsb2FkaW5nJ1xuICAvLyAgIH0pO1xuICAvLyAgIGNvbnNvbGUubG9nKCfmraPlnKjosIPnlKjnmoR1cmzmmK86ICcgKyB1cmwpO1xuICAvLyAgIGxldCByZXMgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAvLyAgICAgICB1cmw6IHVybCxcbiAgLy8gICAgICAgbWV0aG9kOiBwYXJhbXMubWV0aG9kIHx8ICdHRVQnLFxuICAvLyAgICAgICBkYXRhOiBwYXJhbXMuZGF0YSB8fCB7fVxuICAvLyAgIH0pO1xuICAvLyAgIHd4LmhpZGVUb2FzdCgpO1xufVxuXG4vLyDojrflj5bmnIDmlrDkuLvpophcbmNvbnN0IGdldExhdGVzdCA9IChwKSA9PiB3eFJlcXVlc3QocCwgaG9zdCArICcvYXBpL3RvcGljcy9sYXRlc3QuanNvbicpXG5cbi8vIOiOt+WPluacgOeDreS4u+mimFxuY29uc3QgZ2V0SG90ID0gKHApID0+IHd4UmVxdWVzdChwLCBob3N0ICsgJy9hcGkvdG9waWNzL2hvdC5qc29uJylcblxuLy8g6I635Y+W5omA5pyJ6IqC54K5XG5jb25zdCBnZXROb2RlcyA9IChwKSA9PiB3eFJlcXVlc3QocCwgaG9zdCArICcvYXBpL25vZGVzL2FsbC5qc29uJylcblxuLy8g6I635Y+W5Li76aKY6K+m5oOFIHBhcmFtcyAtLT4ge2lkOiA0NDR9XG5jb25zdCBnZXREZXRhaWwgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBob3N0ICsgJy9hcGkvdG9waWNzL3Nob3cuanNvbicpXG5cbi8vIOiOt+WPluS4u+mimOWbnuW4liBwYXJhbXMgLS0+IHt0b3BpY19pZDogNDQ0fVxuY29uc3QgZ2V0UmVwbGllcyA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGhvc3QgKyAnL2FwaS9yZXBsaWVzL3Nob3cuanNvbicpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRMYXRlc3QsXG4gIGdldEhvdCxcbiAgZ2V0Tm9kZXMsXG4gIGdldERldGFpbCxcbiAgZ2V0UmVwbGllc1xufTtcbiJdfQ==