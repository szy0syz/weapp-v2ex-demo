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
            console.log('正在调用的url是' + url);
            _context.next = 4;
            return _wepy2.default.request({
              url: url,
              method: params.method || 'GET',
              data: params.data || {},
              header: { 'Content-Type': 'application/json' }
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

// Index
var getVolById = function getVolById(params) {
  return wxRequest(params, host + '/api/hp/detail/' + params.query.id);
};
var getVolIdList = function getVolIdList(params) {
  return wxRequest(params, host + '/api/hp/idlist/0');
};
var getVolsByMonth = function getVolsByMonth(params) {
  return wxRequest(params, host + '/api/hp/bymonth/' + params.query.month);
};
var getVolDetailById = function getVolDetailById(params) {
  return wxRequest(params, host + '/api/hp/detail/' + params.query.id);
};

// Reading
var getCarousel = function getCarousel(params) {
  return wxRequest(params, host + '/api/reading/carousel');
};
var getLastArticles = function getLastArticles(params) {
  return wxRequest(params, host + '/api/reading/index');
};
var getEssayById = function getEssayById(params) {
  return wxRequest(params, host + '/api/essay/' + params.query.id);
};
var getSerialById = function getSerialById(params) {
  return wxRequest(params, host + '/api/serialcontent/' + params.query.id);
};
var getQuestionById = function getQuestionById(params) {
  return wxRequest(params, host + '/api/question/' + params.query.id);
};
var getArticlesByMonth = function getArticlesByMonth(params) {
  wxRequest(params, host + '/api/' + params.query.type + '/bymonth/' + params.query.month);
};

// Music
var getMusicIdList = function getMusicIdList(params) {
  return wxRequest(params, host + '/api/music/idlist/0');
};
var getMusicsByMonth = function getMusicsByMonth(params) {
  return wxRequest(params, host + '/api/music/bymonth/' + params.query.month);
};
var getMusicDetailById = function getMusicDetailById(params) {
  return wxRequest(params, host + '/api/music/detail/' + params.query.id);
};

// Movie
var getMovieListById = function getMovieListById(params) {
  return wxRequest(params, host + '/api/movie/list/' + params.query.id);
};
var getMovieDetailById = function getMovieDetailById(params) {
  return wxRequest(params, host + '/api/movie/detail/' + params.query.id);
};
var getMovieStoryById = function getMovieStoryById(params) {
  return wxRequest(params, host + '/api/movie/' + params.query.id + '/story/1/0');
};

module.exports = {
  getVolById: getVolById,
  getVolIdList: getVolIdList,
  getVolsByMonth: getVolsByMonth,
  getVolDetailById: getVolDetailById,
  getCarousel: getCarousel,
  getLastArticles: getLastArticles,
  getEssayById: getEssayById,
  getSerialById: getSerialById,
  getQuestionById: getQuestionById,
  getArticlesByMonth: getArticlesByMonth,
  getMusicIdList: getMusicIdList,
  getMusicsByMonth: getMusicsByMonth,
  getMusicDetailById: getMusicDetailById,
  getMovieListById: getMovieListById,
  getMovieDetailById: getMovieDetailById,
  getMovieStoryById: getMovieStoryById
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJob3N0Iiwid3hSZXF1ZXN0IiwicGFyYW1zIiwidXJsIiwid3giLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdCIsIm1ldGhvZCIsImRhdGEiLCJoZWFkZXIiLCJyZXMiLCJoaWRlVG9hc3QiLCJnZXRWb2xCeUlkIiwicXVlcnkiLCJpZCIsImdldFZvbElkTGlzdCIsImdldFZvbHNCeU1vbnRoIiwibW9udGgiLCJnZXRWb2xEZXRhaWxCeUlkIiwiZ2V0Q2Fyb3VzZWwiLCJnZXRMYXN0QXJ0aWNsZXMiLCJnZXRFc3NheUJ5SWQiLCJnZXRTZXJpYWxCeUlkIiwiZ2V0UXVlc3Rpb25CeUlkIiwiZ2V0QXJ0aWNsZXNCeU1vbnRoIiwidHlwZSIsImdldE11c2ljSWRMaXN0IiwiZ2V0TXVzaWNzQnlNb250aCIsImdldE11c2ljRGV0YWlsQnlJZCIsImdldE1vdmllTGlzdEJ5SWQiLCJnZXRNb3ZpZURldGFpbEJ5SWQiLCJnZXRNb3ZpZVN0b3J5QnlJZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBTyxzQkFBYjtBQUNBLElBQU1DO0FBQUEsdURBQVk7QUFBQSxRQUFPQyxNQUFQLHVFQUFnQixFQUFoQjtBQUFBLFFBQW9CQyxHQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZDtBQUNBQyxlQUFHQyxTQUFILENBQWE7QUFDWEMscUJBQU8sS0FESTtBQUVYQyxvQkFBTTtBQUZLLGFBQWI7QUFJQUMsb0JBQVFDLEdBQVIsQ0FBWSxjQUFjTixHQUExQjtBQU5jO0FBQUEsbUJBT0UsZUFBS08sT0FBTCxDQUFhO0FBQ3pCUCxtQkFBS0EsR0FEb0I7QUFFekJRLHNCQUFRVCxPQUFPUyxNQUFQLElBQWlCLEtBRkE7QUFHekJDLG9CQUFNVixPQUFPVSxJQUFQLElBQWUsRUFISTtBQUl6QkMsc0JBQVEsRUFBQyxnQkFBZ0Is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QUFBLFNBQVlELFVBQVVDLE1BQVYsRUFBa0JGLE9BQU8sa0JBQVAsR0FBNEJFLE9BQU9lLEtBQVAsQ0FBYUMsRUFBM0QsQ0FBWjtBQUFBLENBQXpCO0FBQ0EsSUFBTWdCLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNoQyxNQUFEO0FBQUEsU0FBWUQsVUFBVUMsTUFBVixFQUFrQkYsT0FBTyxvQkFBUCxHQUE4QkUsT0FBT2UsS0FBUCxDQUFhQyxFQUE3RCxDQUFaO0FBQUEsQ0FBM0I7QUFDQSxJQUFNaUIsb0JBQW9CLFNBQXBCQSxpQkFBb0IsQ0FBQ2pDLE1BQUQ7QUFBQSxTQUFZRCxVQUFVQyxNQUFWLEVBQWtCRixPQUFPLGFBQVAsR0FBdUJFLE9BQU9lLEtBQVAsQ0FBYUMsRUFBcEMsR0FBeUMsWUFBM0QsQ0FBWjtBQUFBLENBQTFCOztBQUVBa0IsT0FBT0MsT0FBUCxHQUFpQjtBQUNmckIsd0JBRGU7QUFFZkcsNEJBRmU7QUFHZkMsZ0NBSGU7QUFJZkUsb0NBSmU7QUFLZkMsMEJBTGU7QUFNZkMsa0NBTmU7QUFPZkMsNEJBUGU7QUFRZkMsOEJBUmU7QUFTZkMsa0NBVGU7QUFVZkMsd0NBVmU7QUFXZkUsZ0NBWGU7QUFZZkMsb0NBWmU7QUFhZkMsd0NBYmU7QUFjZkMsb0NBZGU7QUFlZkMsd0NBZmU7QUFnQmZDO0FBaEJlLENBQWpCIiwiZmlsZSI6ImFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG5jb25zdCBob3N0ID0gJ2h0dHBzOi8vd3d3LnYyZXguY29tJztcbmNvbnN0IHd4UmVxdWVzdCA9IGFzeW5jIChwYXJhbXMgPSB7fSwgdXJsKSA9PiB7XG4gICAgLy8g5Zug5Li65q2k5paH5Lu25pivanPvvIzmlYXlj6/nlKh3eOa3t+eUqFxuICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICB0aXRsZTogJ+WKoOi9veS4rScsXG4gICAgICBpY29uOiAnbG9hZGluZydcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZygn5q2j5Zyo6LCD55So55qEdXJs5pivJyArIHVybCk7XG4gICAgbGV0IHJlcyA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBtZXRob2Q6IHBhcmFtcy5tZXRob2QgfHwgJ0dFVCcsXG4gICAgICAgIGRhdGE6IHBhcmFtcy5kYXRhIHx8IHt9LFxuICAgICAgICBoZWFkZXI6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSxcbiAgICB9KTtcbiAgICB3eC5oaWRlVG9hc3QoKTtcbiAgICByZXR1cm4gcmVzO1xufTtcblxuLy8gSW5kZXhcbmNvbnN0IGdldFZvbEJ5SWQgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBob3N0ICsgJy9hcGkvaHAvZGV0YWlsLycgKyBwYXJhbXMucXVlcnkuaWQpO1xuY29uc3QgZ2V0Vm9sSWRMaXN0ID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgaG9zdCArICcvYXBpL2hwL2lkbGlzdC8wJyk7XG5jb25zdCBnZXRWb2xzQnlNb250aCA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGhvc3QgKyAnL2FwaS9ocC9ieW1vbnRoLycgKyBwYXJhbXMucXVlcnkubW9udGgpO1xuY29uc3QgZ2V0Vm9sRGV0YWlsQnlJZCA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGhvc3QgKyAnL2FwaS9ocC9kZXRhaWwvJyArIHBhcmFtcy5xdWVyeS5pZCk7XG5cbi8vIFJlYWRpbmdcbmNvbnN0IGdldENhcm91c2VsID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgaG9zdCArICcvYXBpL3JlYWRpbmcvY2Fyb3VzZWwnKTtcbmNvbnN0IGdldExhc3RBcnRpY2xlcyA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGhvc3QgKyAnL2FwaS9yZWFkaW5nL2luZGV4Jyk7XG5jb25zdCBnZXRFc3NheUJ5SWQgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBob3N0ICsgJy9hcGkvZXNzYXkvJyArIHBhcmFtcy5xdWVyeS5pZCk7XG5jb25zdCBnZXRTZXJpYWxCeUlkID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgaG9zdCArICcvYXBpL3NlcmlhbGNvbnRlbnQvJyArIHBhcmFtcy5xdWVyeS5pZCk7XG5jb25zdCBnZXRRdWVzdGlvbkJ5SWQgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBob3N0ICsgJy9hcGkvcXVlc3Rpb24vJyArIHBhcmFtcy5xdWVyeS5pZCk7XG5jb25zdCBnZXRBcnRpY2xlc0J5TW9udGggPSAocGFyYW1zKSA9PiB7XG4gIHd4UmVxdWVzdChwYXJhbXMsIGhvc3QgKyAnL2FwaS8nICsgcGFyYW1zLnF1ZXJ5LnR5cGUgKyAnL2J5bW9udGgvJyArIHBhcmFtcy5xdWVyeS5tb250aClcbn07XG5cbi8vIE11c2ljXG5jb25zdCBnZXRNdXNpY0lkTGlzdCA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGhvc3QgKyAnL2FwaS9tdXNpYy9pZGxpc3QvMCcpO1xuY29uc3QgZ2V0TXVzaWNzQnlNb250aCA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGhvc3QgKyAnL2FwaS9tdXNpYy9ieW1vbnRoLycgKyBwYXJhbXMucXVlcnkubW9udGgpO1xuY29uc3QgZ2V0TXVzaWNEZXRhaWxCeUlkID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgaG9zdCArICcvYXBpL211c2ljL2RldGFpbC8nICsgcGFyYW1zLnF1ZXJ5LmlkKTtcblxuLy8gTW92aWVcbmNvbnN0IGdldE1vdmllTGlzdEJ5SWQgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBob3N0ICsgJy9hcGkvbW92aWUvbGlzdC8nICsgcGFyYW1zLnF1ZXJ5LmlkKTtcbmNvbnN0IGdldE1vdmllRGV0YWlsQnlJZCA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGhvc3QgKyAnL2FwaS9tb3ZpZS9kZXRhaWwvJyArIHBhcmFtcy5xdWVyeS5pZCk7XG5jb25zdCBnZXRNb3ZpZVN0b3J5QnlJZCA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGhvc3QgKyAnL2FwaS9tb3ZpZS8nICsgcGFyYW1zLnF1ZXJ5LmlkICsgJy9zdG9yeS8xLzAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldFZvbEJ5SWQsXG4gIGdldFZvbElkTGlzdCxcbiAgZ2V0Vm9sc0J5TW9udGgsXG4gIGdldFZvbERldGFpbEJ5SWQsXG4gIGdldENhcm91c2VsLFxuICBnZXRMYXN0QXJ0aWNsZXMsXG4gIGdldEVzc2F5QnlJZCxcbiAgZ2V0U2VyaWFsQnlJZCxcbiAgZ2V0UXVlc3Rpb25CeUlkLFxuICBnZXRBcnRpY2xlc0J5TW9udGgsXG4gIGdldE11c2ljSWRMaXN0LFxuICBnZXRNdXNpY3NCeU1vbnRoLFxuICBnZXRNdXNpY0RldGFpbEJ5SWQsXG4gIGdldE1vdmllTGlzdEJ5SWQsXG4gIGdldE1vdmllRGV0YWlsQnlJZCxcbiAgZ2V0TW92aWVTdG9yeUJ5SWRcbn07XG4iXX0=