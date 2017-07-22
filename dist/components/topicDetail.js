'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var util = require('./../libs/utils.js');

var TopicList = function (_wepy$component) {
  _inherits(TopicList, _wepy$component);

  function TopicList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TopicList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TopicList.__proto__ || Object.getPrototypeOf(TopicList)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      topic_data: null,
      topic_relies: null,
      topic_created: ''
    }, _this.events = {}, _this.props = {
      tid: String
    }, _this.watch = {
      tid: function tid(newValue, oldValue) {
        this.loadTopic(newValue);
      }
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TopicList, [{
    key: 'onLoad',
    value: function onLoad() {
      // 记住：子组件的onload会在父页面onload前执行~靠~
      console.log('topicDetail com onLoad');
    }
  }, {
    key: 'loadTopic',
    value: function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(tid) {
        var t, r, i, len;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _api2.default.getDetail({ query: { id: tid } });

              case 2:
                t = _context.sent;
                _context.next = 5;
                return _api2.default.getReplies({ query: { topic_id: tid } });

              case 5:
                r = _context.sent;

                this.topic_data = t.data[0];
                this.topic_created = util.formatUTC(t.data[0].created);
                for (i = 0, len = r.data.length; i < len; i++) {
                  r.data[i].created = util.formatUTC(r.data[i].created);
                }
                this.topic_relies = r.data;
                this.$apply(); // 因为是异步，脏数据要处理

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadTopic(_x) {
        return _ref2.apply(this, arguments);
      }

      return loadTopic;
    }()
  }]);

  return TopicList;
}(_wepy2.default.component);

exports.default = TopicList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcGljRGV0YWlsLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiVG9waWNMaXN0IiwiZGF0YSIsInRvcGljX2RhdGEiLCJ0b3BpY19yZWxpZXMiLCJ0b3BpY19jcmVhdGVkIiwiZXZlbnRzIiwicHJvcHMiLCJ0aWQiLCJTdHJpbmciLCJ3YXRjaCIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJsb2FkVG9waWMiLCJtZXRob2RzIiwiY29uc29sZSIsImxvZyIsImdldERldGFpbCIsInF1ZXJ5IiwiaWQiLCJ0IiwiZ2V0UmVwbGllcyIsInRvcGljX2lkIiwiciIsImZvcm1hdFVUQyIsImNyZWF0ZWQiLCJpIiwibGVuIiwibGVuZ3RoIiwiJGFwcGx5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUVBOzs7Ozs7Ozs7Ozs7OztBQURBLElBQU1BLE9BQU9DLFFBQVEsZUFBUixDQUFiOztJQUVxQkMsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxJLEdBQU87QUFDTEMsa0JBQVksSUFEUDtBQUVMQyxvQkFBYyxJQUZUO0FBR0xDLHFCQUFlO0FBSFYsSyxRQU1QQyxNLEdBQVMsRSxRQUdUQyxLLEdBQVE7QUFDTkMsV0FBS0M7QUFEQyxLLFFBSVJDLEssR0FBUTtBQUNORixTQURNLGVBQ0RHLFFBREMsRUFDU0MsUUFEVCxFQUNtQjtBQUN2QixhQUFLQyxTQUFMLENBQWVGLFFBQWY7QUFDRDtBQUhLLEssUUFNUkcsTyxHQUFVLEU7Ozs7OzZCQUdBO0FBQ1I7QUFDQUMsY0FBUUMsR0FBUixDQUFZLHdCQUFaO0FBQ0Q7Ozs7NkVBRWVSLEc7Ozs7Ozs7dUJBQ0EsY0FBSVMsU0FBSixDQUFjLEVBQUNDLE9BQU8sRUFBRUMsSUFBSVgsR0FBTixFQUFSLEVBQWQsQzs7O0FBQVZZLGlCOzt1QkFDVSxjQUFJQyxVQUFKLENBQWUsRUFBQ0gsT0FBTyxFQUFFSSxVQUFVZCxHQUFaLEVBQVIsRUFBZixDOzs7QUFBVmUsaUI7O0FBQ0oscUJBQUtwQixVQUFMLEdBQWtCaUIsRUFBRWxCLElBQUYsQ0FBTyxDQUFQLENBQWxCO0FBQ0EscUJBQUtHLGFBQUwsR0FBcUJOLEtBQUt5QixTQUFMLENBQWVKLEVBQUVsQixJQUFGLENBQU8sQ0FBUCxFQUFVdUIsT0FBekIsQ0FBckI7QUFDQSxxQkFBU0MsQ0FBVCxHQUFhLENBQWIsRUFBZ0JDLEdBQWhCLEdBQXNCSixFQUFFckIsSUFBRixDQUFPMEIsTUFBN0IsRUFBcUNGLElBQUlDLEdBQXpDLEVBQThDRCxHQUE5QyxFQUFtRDtBQUNqREgsb0JBQUVyQixJQUFGLENBQU93QixDQUFQLEVBQVVELE9BQVYsR0FBb0IxQixLQUFLeUIsU0FBTCxDQUFlRCxFQUFFckIsSUFBRixDQUFPd0IsQ0FBUCxFQUFVRCxPQUF6QixDQUFwQjtBQUNEO0FBQ0QscUJBQUtyQixZQUFMLEdBQW9CbUIsRUFBRXJCLElBQXRCO0FBQ0EscUJBQUsyQixNQUFMLEcsQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXJDcUIsZUFBS0MsUzs7a0JBQXZCN0IsUyIsImZpbGUiOiJ0b3BpY0RldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBjb25zdCB1dGlsID0gcmVxdWlyZSgnLi4vbGlicy91dGlscycpXG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vYXBpL2FwaSdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9waWNMaXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIGRhdGEgPSB7XG4gICAgICB0b3BpY19kYXRhOiBudWxsLFxuICAgICAgdG9waWNfcmVsaWVzOiBudWxsLFxuICAgICAgdG9waWNfY3JlYXRlZDogJydcbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgcHJvcHMgPSB7XG4gICAgICB0aWQ6IFN0cmluZ1xuICAgIH1cblxuICAgIHdhdGNoID0ge1xuICAgICAgdGlkIChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdGhpcy5sb2FkVG9waWMobmV3VmFsdWUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgLy8g6K6w5L2P77ya5a2Q57uE5Lu255qEb25sb2Fk5Lya5Zyo54i26aG16Z2ib25sb2Fk5YmN5omn6KGMfumdoH5cbiAgICAgIGNvbnNvbGUubG9nKCd0b3BpY0RldGFpbCBjb20gb25Mb2FkJylcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkVG9waWModGlkKSB7XG4gICAgICBsZXQgdCA9IGF3YWl0IGFwaS5nZXREZXRhaWwoe3F1ZXJ5OiB7IGlkOiB0aWQgfX0pXG4gICAgICBsZXQgciA9IGF3YWl0IGFwaS5nZXRSZXBsaWVzKHtxdWVyeTogeyB0b3BpY19pZDogdGlkIH19KVxuICAgICAgdGhpcy50b3BpY19kYXRhID0gdC5kYXRhWzBdXG4gICAgICB0aGlzLnRvcGljX2NyZWF0ZWQgPSB1dGlsLmZvcm1hdFVUQyh0LmRhdGFbMF0uY3JlYXRlZClcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSByLmRhdGEubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgci5kYXRhW2ldLmNyZWF0ZWQgPSB1dGlsLmZvcm1hdFVUQyhyLmRhdGFbaV0uY3JlYXRlZClcbiAgICAgIH1cbiAgICAgIHRoaXMudG9waWNfcmVsaWVzID0gci5kYXRhXG4gICAgICB0aGlzLiRhcHBseSgpIC8vIOWboOS4uuaYr+W8guatpe+8jOiEj+aVsOaNruimgeWkhOeQhlxuICAgIH1cbiAgfVxuIl19