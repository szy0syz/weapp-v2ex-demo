'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function formatUTC(num) {
  return new Date(num * 1000).toLocaleString();
}

function getRequestData() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      url = _ref.url,
      _ref$data = _ref.data,
      data = _ref$data === undefined ? null : _ref$data,
      _ref$flag = _ref.flag,
      flag = _ref$flag === undefined ? true : _ref$flag,
      cb = _ref.cb;

  var ary = [];
  if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        ary.push(key + '=' + data[key]);
      }
    }
  }
  url += flag ? '?' : null;
  url += ary.join('&');
  ary = null;
  _wepy2.default.request({
    url: url,
    success: cb
  });
}

module.exports = {
  formatUTC: formatUTC,
  getRequestData: getRequestData
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmpzIl0sIm5hbWVzIjpbImZvcm1hdFVUQyIsIm51bSIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImdldFJlcXVlc3REYXRhIiwidXJsIiwiZGF0YSIsImZsYWciLCJjYiIsImFyeSIsImtleSIsImhhc093blByb3BlcnR5IiwicHVzaCIsImpvaW4iLCJyZXF1ZXN0Iiwic3VjY2VzcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7O0FBRUEsU0FBU0EsU0FBVCxDQUFtQkMsR0FBbkIsRUFBd0I7QUFDdEIsU0FBTyxJQUFJQyxJQUFKLENBQVNELE1BQU0sSUFBZixFQUFxQkUsY0FBckIsRUFBUDtBQUNEOztBQUVELFNBQVNDLGNBQVQsR0FBa0U7QUFBQSxpRkFBSixFQUFJO0FBQUEsTUFBekNDLEdBQXlDLFFBQXpDQSxHQUF5QztBQUFBLHVCQUFwQ0MsSUFBb0M7QUFBQSxNQUFwQ0EsSUFBb0MsNkJBQTdCLElBQTZCO0FBQUEsdUJBQXZCQyxJQUF1QjtBQUFBLE1BQXZCQSxJQUF1Qiw2QkFBaEIsSUFBZ0I7QUFBQSxNQUFWQyxFQUFVLFFBQVZBLEVBQVU7O0FBQ2hFLE1BQUlDLE1BQU0sRUFBVjtBQUNBLE1BQUksUUFBT0gsSUFBUCx5Q0FBT0EsSUFBUCxPQUFnQixRQUFwQixFQUE4QjtBQUM1QixTQUFLLElBQUlJLEdBQVQsSUFBZ0JKLElBQWhCLEVBQXNCO0FBQ3BCLFVBQUlBLEtBQUtLLGNBQUwsQ0FBb0JELEdBQXBCLENBQUosRUFBOEI7QUFDNUJELFlBQUlHLElBQUosQ0FBWUYsR0FBWixTQUFtQkosS0FBS0ksR0FBTCxDQUFuQjtBQUNEO0FBQ0Y7QUFDRjtBQUNETCxTQUFPRSxPQUFPLEdBQVAsR0FBYSxJQUFwQjtBQUNBRixTQUFPSSxJQUFJSSxJQUFKLENBQVMsR0FBVCxDQUFQO0FBQ0FKLFFBQU0sSUFBTjtBQUNBLGlCQUFLSyxPQUFMLENBQWE7QUFDWFQsWUFEVztBQUVYVSxhQUFTUDtBQUZFLEdBQWI7QUFJRDs7QUFFRFEsT0FBT0MsT0FBUCxHQUFpQjtBQUNmakIsYUFBV0EsU0FESTtBQUVmSSxrQkFBZ0JBO0FBRkQsQ0FBakIiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5mdW5jdGlvbiBmb3JtYXRVVEMobnVtKSB7XG4gIHJldHVybiBuZXcgRGF0ZShudW0gKiAxMDAwKS50b0xvY2FsZVN0cmluZygpXG59XG5cbmZ1bmN0aW9uIGdldFJlcXVlc3REYXRhKHt1cmwsIGRhdGEgPSBudWxsLCBmbGFnID0gdHJ1ZSwgY2J9ID0ge30pIHtcbiAgdmFyIGFyeSA9IFtdXG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBhcnkucHVzaChgJHtrZXl9PSR7ZGF0YVtrZXldfWApXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHVybCArPSBmbGFnID8gJz8nIDogbnVsbFxuICB1cmwgKz0gYXJ5LmpvaW4oJyYnKVxuICBhcnkgPSBudWxsXG4gIHdlcHkucmVxdWVzdCh7XG4gICAgdXJsLFxuICAgIHN1Y2Nlc3M6IGNiXG4gIH0pXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBmb3JtYXRVVEM6IGZvcm1hdFVUQyxcbiAgZ2V0UmVxdWVzdERhdGE6IGdldFJlcXVlc3REYXRhXG59Il19