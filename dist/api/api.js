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
    getNodes: getNodes
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJob3N0Iiwid3hSZXF1ZXN0IiwicGFyYW1zIiwidXJsIiwid3giLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdCIsIm1ldGhvZCIsImRhdGEiLCJoZWFkZXIiLCJyZXMiLCJoaWRlVG9hc3QiLCJnZXRMYXRlc3QiLCJnZXRIb3QiLCJnZXROb2RlcyIsImdldERldGFpbCIsImdldFJlcGxpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7OztBQUVBLElBQU1BLE9BQU8sc0JBQWI7QUFDQSxJQUFNQztBQUFBLHlEQUFZO0FBQUEsWUFBT0MsTUFBUCx1RUFBZ0IsRUFBaEI7QUFBQSxZQUFvQkMsR0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2Q7QUFDQUMsMkJBQUdDLFNBQUgsQ0FBYTtBQUNYQyxtQ0FBTyxLQURJO0FBRVhDLGtDQUFNO0FBRksseUJBQWI7QUFJQUMsZ0NBQVFDLEdBQVIsQ0FBWSxjQUFjTixHQUExQjtBQU5jO0FBQUEsK0JBT0UsZUFBS08sT0FBTCxDQUFhO0FBQ3pCUCxpQ0FBS0EsR0FEb0I7QUFFekJRLG9DQUFRVCxPQUFPUyxNQUFQLElBQWlCLEtBRkE7QUFHekJDLGtDQUFNVixPQUFPVSxJQUFQLElBQWUsRUFISTtBQUl6QkMsb0NBQVEsRUFBQyxnQkFBZ0Isa0JBQWpCO0FBSmlCLHlCQUFiLENBUEY7O0FBQUE7QUFPVkMsMkJBUFU7O0FBYWRWLDJCQUFHVyxTQUFIO0FBYmMseURBY1BELEdBZE87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBWjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOOztBQWlCQTtBQUNBLElBQU1FLFlBQVksU0FBWkEsU0FBWTtBQUFBLFdBQU1mLFVBQVUsSUFBVixFQUFnQkQsT0FBTyx5QkFBdkIsQ0FBTjtBQUFBLENBQWxCOztBQUVBO0FBQ0EsSUFBTWlCLFNBQVMsU0FBVEEsTUFBUztBQUFBLFdBQU1oQixVQUFVLElBQVYsRUFBZ0JELE9BQU8sc0JBQXZCLENBQU47QUFBQSxDQUFmOztBQUVBO0FBQ0EsSUFBTWtCLFdBQVcsU0FBWEEsUUFBVztBQUFBLFdBQU1qQixVQUFVLElBQVYsRUFBZ0JELE9BQU8scUJBQXZCLENBQU47QUFBQSxDQUFqQjs7QUFFQTtBQUNBLElBQU1tQixZQUFZLFNBQVpBLFNBQVksQ0FBQ2pCLE1BQUQ7QUFBQSxXQUFZRCxVQUFVQyxNQUFWLEVBQWtCRixPQUFPLHVCQUF6QixDQUFaO0FBQUEsQ0FBbEI7O0FBRUE7QUFDQSxJQUFNb0IsYUFBYSxTQUFiQSxVQUFhLENBQUNsQixNQUFEO0FBQUEsV0FBWUQsVUFBVUMsTUFBVixFQUFrQkYsT0FBTyx3QkFBekIsQ0FBWjtBQUFBLENBQW5COztBQUVBcUIsT0FBT0MsT0FBUCxHQUFpQjtBQUNmTix3QkFEZTtBQUVmQyxrQkFGZTtBQUdmQztBQUhlLENBQWpCIiwiZmlsZSI6ImFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG5jb25zdCBob3N0ID0gJ2h0dHBzOi8vd3d3LnYyZXguY29tJztcbmNvbnN0IHd4UmVxdWVzdCA9IGFzeW5jIChwYXJhbXMgPSB7fSwgdXJsKSA9PiB7XG4gICAgLy8g5Zug5Li65q2k5paH5Lu25pivanPvvIzmlYXlj6/nlKh3eOa3t+eUqFxuICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICB0aXRsZTogJ+WKoOi9veS4rScsXG4gICAgICBpY29uOiAnbG9hZGluZydcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZygn5q2j5Zyo6LCD55So55qEdXJs5pivJyArIHVybCk7XG4gICAgbGV0IHJlcyA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBtZXRob2Q6IHBhcmFtcy5tZXRob2QgfHwgJ0dFVCcsXG4gICAgICAgIGRhdGE6IHBhcmFtcy5kYXRhIHx8IHt9LFxuICAgICAgICBoZWFkZXI6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSxcbiAgICB9KTtcbiAgICB3eC5oaWRlVG9hc3QoKTtcbiAgICByZXR1cm4gcmVzO1xufTtcblxuLy8g6I635Y+W5pyA5paw5Li76aKYXG5jb25zdCBnZXRMYXRlc3QgPSAoKSA9PiB3eFJlcXVlc3QobnVsbCwgaG9zdCArICcvYXBpL3RvcGljcy9sYXRlc3QuanNvbicpO1xuXG4vLyDojrflj5bmnIDng63kuLvpophcbmNvbnN0IGdldEhvdCA9ICgpID0+IHd4UmVxdWVzdChudWxsLCBob3N0ICsgJy9hcGkvdG9waWNzL2hvdC5qc29uJyk7XG5cbi8vIOiOt+WPluaJgOacieiKgueCuVxuY29uc3QgZ2V0Tm9kZXMgPSAoKSA9PiB3eFJlcXVlc3QobnVsbCwgaG9zdCArICcvYXBpL25vZGVzL2FsbC5qc29uJyk7XG5cbi8vIOiOt+WPluS4u+mimOivpuaDhSBwYXJhbXMgLS0+IHtpZDogNDQ0fVxuY29uc3QgZ2V0RGV0YWlsID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgaG9zdCArICcvYXBpL3RvcGljcy9zaG93Lmpzb24nKTtcblxuLy8g6I635Y+W5Li76aKY5Zue5biWIHBhcmFtcyAtLT4ge3RvcGljX2lkOiA0NDR9XG5jb25zdCBnZXRSZXBsaWVzID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgaG9zdCArICcvYXBpL3JlcGxpZXMvc2hvdy5qc29uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRMYXRlc3QsXG4gIGdldEhvdCxcbiAgZ2V0Tm9kZXNcbn07XG4iXX0=