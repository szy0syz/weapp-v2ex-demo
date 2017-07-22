'use strict';

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var host = 'http://v3.wufazhuce.com:8000';
var wxRequest = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var url = arguments[1];
    var res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            wx.showToast({
              title: '加载中',
              icon: 'loading'
            });
            console.log(url);
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
            console.log('###############');
            console.dir(res);
            console.log('###############');
            return _context.abrupt('return', res);

          case 10:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaTIuanMiXSwibmFtZXMiOlsiaG9zdCIsInd4UmVxdWVzdCIsInBhcmFtcyIsInVybCIsInd4Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3QiLCJtZXRob2QiLCJkYXRhIiwiaGVhZGVyIiwicmVzIiwiaGlkZVRvYXN0IiwiZGlyIiwiZ2V0Vm9sQnlJZCIsInF1ZXJ5IiwiaWQiLCJnZXRWb2xJZExpc3QiLCJnZXRWb2xzQnlNb250aCIsIm1vbnRoIiwiZ2V0Vm9sRGV0YWlsQnlJZCIsImdldENhcm91c2VsIiwiZ2V0TGFzdEFydGljbGVzIiwiZ2V0RXNzYXlCeUlkIiwiZ2V0U2VyaWFsQnlJZCIsImdldFF1ZXN0aW9uQnlJZCIsImdldEFydGljbGVzQnlNb250aCIsInR5cGUiLCJnZXRNdXNpY0lkTGlzdCIsImdldE11c2ljc0J5TW9udGgiLCJnZXRNdXNpY0RldGFpbEJ5SWQiLCJnZXRNb3ZpZUxpc3RCeUlkIiwiZ2V0TW92aWVEZXRhaWxCeUlkIiwiZ2V0TW92aWVTdG9yeUJ5SWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7OztBQUVBLElBQU1BLE9BQU8sOEJBQWI7QUFDQSxJQUFNQztBQUFBLHVEQUFZO0FBQUEsUUFBT0MsTUFBUCx1RUFBZ0IsRUFBaEI7QUFBQSxRQUFvQkMsR0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2RDLGVBQUdDLFNBQUgsQ0FBYTtBQUNYQyxxQkFBTyxLQURJO0FBRVhDLG9CQUFNO0FBRkssYUFBYjtBQUlBQyxvQkFBUUMsR0FBUixDQUFZTixHQUFaO0FBTGM7QUFBQSxtQkFNRSxlQUFLTyxPQUFMLENBQWE7QUFDekJQLG1CQUFLQSxHQURvQjtBQUV6QlEsc0JBQVFULE9BQU9TLE1BQVAsSUFBaUIsS0FGQTtBQUd6QkMsb0JBQU1WLE9BQU9VLElBQVAsSUFBZSxFQUhJO0FBSXpCQyxzQkFBUSxFQUFDLGdCQUFnQixrQkFB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OEJFLE9BQU9nQixLQUFQLENBQWFDLEVBQTdELENBQVo7QUFBQSxDQUEzQjs7QUFFQTtBQUNBLElBQU1lLG1CQUFtQixTQUFuQkEsZ0JBQW1CLENBQUNoQyxNQUFEO0FBQUEsU0FBWUQsVUFBVUMsTUFBVixFQUFrQkYsT0FBTyxrQkFBUCxHQUE0QkUsT0FBT2dCLEtBQVAsQ0FBYUMsRUFBM0QsQ0FBWjtBQUFBLENBQXpCO0FBQ0EsSUFBTWdCLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNqQyxNQUFEO0FBQUEsU0FBWUQsVUFBVUMsTUFBVixFQUFrQkYsT0FBTyxvQkFBUCxHQUE4QkUsT0FBT2dCLEtBQVAsQ0FBYUMsRUFBN0QsQ0FBWjtBQUFBLENBQTNCO0FBQ0EsSUFBTWlCLG9CQUFvQixTQUFwQkEsaUJBQW9CLENBQUNsQyxNQUFEO0FBQUEsU0FBWUQsVUFBVUMsTUFBVixFQUFrQkYsT0FBTyxhQUFQLEdBQXVCRSxPQUFPZ0IsS0FBUCxDQUFhQyxFQUFwQyxHQUF5QyxZQUEzRCxDQUFaO0FBQUEsQ0FBMUI7O0FBRUFrQixPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZyQix3QkFEZTtBQUVmRyw0QkFGZTtBQUdmQyxnQ0FIZTtBQUlmRSxvQ0FKZTtBQUtmQywwQkFMZTtBQU1mQyxrQ0FOZTtBQU9mQyw0QkFQZTtBQVFmQyw4QkFSZTtBQVNmQyxrQ0FUZTtBQVVmQyx3Q0FWZTtBQVdmRSxnQ0FYZTtBQVlmQyxvQ0FaZTtBQWFmQyx3Q0FiZTtBQWNmQyxvQ0FkZTtBQWVmQyx3Q0FmZTtBQWdCZkM7QUFoQmUsQ0FBakIiLCJmaWxlIjoiYXBpMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG5jb25zdCBob3N0ID0gJ2h0dHA6Ly92My53dWZhemh1Y2UuY29tOjgwMDAnO1xuY29uc3Qgd3hSZXF1ZXN0ID0gYXN5bmMgKHBhcmFtcyA9IHt9LCB1cmwpID0+IHtcbiAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgdGl0bGU6ICfliqDovb3kuK0nLFxuICAgICAgaWNvbjogJ2xvYWRpbmcnXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2codXJsKTtcbiAgICBsZXQgcmVzID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIG1ldGhvZDogcGFyYW1zLm1ldGhvZCB8fCAnR0VUJyxcbiAgICAgICAgZGF0YTogcGFyYW1zLmRhdGEgfHwge30sXG4gICAgICAgIGhlYWRlcjogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LFxuICAgIH0pO1xuICAgIHd4LmhpZGVUb2FzdCgpO1xuICAgIGNvbnNvbGUubG9nKCcjIyMjIyMjIyMjIyMjIyMnKVxuICAgIGNvbnNvbGUuZGlyKHJlcylcbiAgICBjb25zb2xlLmxvZygnIyMjIyMjIyMjIyMjIyMjJylcbiAgICByZXR1cm4gcmVzO1xufTtcblxuLy8gSW5kZXhcbmNvbnN0IGdldFZvbEJ5SWQgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBob3N0ICsgJy9hcGkvaHAvZGV0YWlsLycgKyBwYXJhbXMucXVlcnkuaWQpO1xuY29uc3QgZ2V0Vm9sSWRMaXN0ID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgaG9zdCArICcvYXBpL2hwL2lkbGlzdC8wJyk7XG5jb25zdCBnZXRWb2xzQnlNb250aCA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGhvc3QgKyAnL2FwaS9ocC9ieW1vbnRoLycgKyBwYXJhbXMucXVlcnkubW9udGgpO1xuY29uc3QgZ2V0Vm9sRGV0YWlsQnlJZCA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGhvc3QgKyAnL2FwaS9ocC9kZXRhaWwvJyArIHBhcmFtcy5xdWVyeS5pZCk7XG5cbi8vIFJlYWRpbmdcbmNvbnN0IGdldENhcm91c2VsID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgaG9zdCArICcvYXBpL3JlYWRpbmcvY2Fyb3VzZWwnKTtcbmNvbnN0IGdldExhc3RBcnRpY2xlcyA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGhvc3QgKyAnL2FwaS9yZWFkaW5nL2luZGV4Jyk7XG5jb25zdCBnZXRFc3NheUJ5SWQgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBob3N0ICsgJy9hcGkvZXNzYXkvJyArIHBhcmFtcy5xdWVyeS5pZCk7XG5jb25zdCBnZXRTZXJpYWxCeUlkID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgaG9zdCArICcvYXBpL3NlcmlhbGNvbnRlbnQvJyArIHBhcmFtcy5xdWVyeS5pZCk7XG5jb25zdCBnZXRRdWVzdGlvbkJ5SWQgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBob3N0ICsgJy9hcGkvcXVlc3Rpb24vJyArIHBhcmFtcy5xdWVyeS5pZCk7XG5jb25zdCBnZXRBcnRpY2xlc0J5TW9udGggPSAocGFyYW1zKSA9PiB7XG4gIHd4UmVxdWVzdChwYXJhbXMsIGhvc3QgKyAnL2FwaS8nICsgcGFyYW1zLnF1ZXJ5LnR5cGUgKyAnL2J5bW9udGgvJyArIHBhcmFtcy5xdWVyeS5tb250aClcbn07XG5cbi8vIE11c2ljXG5jb25zdCBnZXRNdXNpY0lkTGlzdCA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGhvc3QgKyAnL2FwaS9tdXNpYy9pZGxpc3QvMCcpO1xuY29uc3QgZ2V0TXVzaWNzQnlNb250aCA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGhvc3QgKyAnL2FwaS9tdXNpYy9ieW1vbnRoLycgKyBwYXJhbXMucXVlcnkubW9udGgpO1xuY29uc3QgZ2V0TXVzaWNEZXRhaWxCeUlkID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgaG9zdCArICcvYXBpL211c2ljL2RldGFpbC8nICsgcGFyYW1zLnF1ZXJ5LmlkKTtcblxuLy8gTW92aWVcbmNvbnN0IGdldE1vdmllTGlzdEJ5SWQgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBob3N0ICsgJy9hcGkvbW92aWUvbGlzdC8nICsgcGFyYW1zLnF1ZXJ5LmlkKTtcbmNvbnN0IGdldE1vdmllRGV0YWlsQnlJZCA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGhvc3QgKyAnL2FwaS9tb3ZpZS9kZXRhaWwvJyArIHBhcmFtcy5xdWVyeS5pZCk7XG5jb25zdCBnZXRNb3ZpZVN0b3J5QnlJZCA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGhvc3QgKyAnL2FwaS9tb3ZpZS8nICsgcGFyYW1zLnF1ZXJ5LmlkICsgJy9zdG9yeS8xLzAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldFZvbEJ5SWQsXG4gIGdldFZvbElkTGlzdCxcbiAgZ2V0Vm9sc0J5TW9udGgsXG4gIGdldFZvbERldGFpbEJ5SWQsXG4gIGdldENhcm91c2VsLFxuICBnZXRMYXN0QXJ0aWNsZXMsXG4gIGdldEVzc2F5QnlJZCxcbiAgZ2V0U2VyaWFsQnlJZCxcbiAgZ2V0UXVlc3Rpb25CeUlkLFxuICBnZXRBcnRpY2xlc0J5TW9udGgsXG4gIGdldE11c2ljSWRMaXN0LFxuICBnZXRNdXNpY3NCeU1vbnRoLFxuICBnZXRNdXNpY0RldGFpbEJ5SWQsXG4gIGdldE1vdmllTGlzdEJ5SWQsXG4gIGdldE1vdmllRGV0YWlsQnlJZCxcbiAgZ2V0TW92aWVTdG9yeUJ5SWRcbn07XG4iXX0=