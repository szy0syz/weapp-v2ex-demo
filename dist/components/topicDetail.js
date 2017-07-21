'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// var util = require('./../libs/utils.js')


// var util = require('./../libs/utils.js')
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
      title: String,
      topicid: String
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TopicList, [{
    key: 'onShow',
    value: function onShow() {
      console.log('topicDetail page onShow');
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      console.log('topicDetail com onLoad');
      console.log('我是子组件的props.title ' + this.title);
      console.log('我是子组件的props.topicid ' + this.topicid);
      // 组件根本不知道自己要加载的文章id是多少，只能父组件传递进来
      // this.topic_id = options.id
      // util.getRequestData({
      //   url: 'https://www.v2ex.com/api/topics/show.json',
      //   data: {id: this.id},
      //   cb: (d) => {
      //     this.topic_data = d.data[0]
      //     this.topic_created = util.formatUTC(d.data[0].created)
      //     this.$apply()
      //     if (this.topic_data !== null) {
      //       util.getRequestData({
      //         url: 'https://www.v2ex.com/api/replies/show.json',
      //         data: {topic_id: this.topic_id},
      //         cb: (d) => {
      //           for (var i = 0, len = d.data.length; i < len; i++) {
      //             d.data[i].created = util.formatUTC(d.data[i].created)
      //           }
      //           this.topic_relies = d.data
      //           this.$apply()
      //         }
      //       })
      //     }
      //   }
      // })
    }
  }]);

  return TopicList;
}(_wepy2.default.component);

exports.default = TopicList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcGljRGV0YWlsLmpzIl0sIm5hbWVzIjpbIlRvcGljTGlzdCIsImRhdGEiLCJ0b3BpY19kYXRhIiwidG9waWNfcmVsaWVzIiwidG9waWNfY3JlYXRlZCIsImV2ZW50cyIsInByb3BzIiwidGl0bGUiLCJTdHJpbmciLCJ0b3BpY2lkIiwibWV0aG9kcyIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVFOzs7Ozs7Ozs7OztBQURBOzs7QUFFQTtJQUNxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxJLEdBQU87QUFDTEMsa0JBQVksSUFEUDtBQUVMQyxvQkFBYyxJQUZUO0FBR0xDLHFCQUFlO0FBSFYsSyxRQU1QQyxNLEdBQVMsRSxRQUdUQyxLLEdBQVE7QUFDTkMsYUFBT0MsTUFERDtBQUVOQyxlQUFTRDtBQUZILEssUUFLUkUsTyxHQUFVLEU7Ozs7OzZCQUdEO0FBQ1BDLGNBQVFDLEdBQVIsQ0FBWSx5QkFBWjtBQUNEOzs7NkJBRVM7QUFDUkQsY0FBUUMsR0FBUixDQUFZLHdCQUFaO0FBQ0FELGNBQVFDLEdBQVIsQ0FBWSx1QkFBdUIsS0FBS0wsS0FBeEM7QUFDQUksY0FBUUMsR0FBUixDQUFZLHlCQUF5QixLQUFLSCxPQUExQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7O0VBbERvQyxlQUFLSSxTOztrQkFBdkJiLFMiLCJmaWxlIjoidG9waWNEZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLy8gdmFyIHV0aWwgPSByZXF1aXJlKCcuLi9saWJzL3V0aWxzJylcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgLy8gdmFyIHV0aWwgPSByZXF1aXJlKCcuLi9saWJzL3V0aWxzJylcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9waWNMaXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIGRhdGEgPSB7XG4gICAgICB0b3BpY19kYXRhOiBudWxsLFxuICAgICAgdG9waWNfcmVsaWVzOiBudWxsLFxuICAgICAgdG9waWNfY3JlYXRlZDogJydcbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgcHJvcHMgPSB7XG4gICAgICB0aXRsZTogU3RyaW5nLFxuICAgICAgdG9waWNpZDogU3RyaW5nXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICB9XG5cbiAgICBvblNob3coKSB7XG4gICAgICBjb25zb2xlLmxvZygndG9waWNEZXRhaWwgcGFnZSBvblNob3cnKVxuICAgIH1cblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICBjb25zb2xlLmxvZygndG9waWNEZXRhaWwgY29tIG9uTG9hZCcpXG4gICAgICBjb25zb2xlLmxvZygn5oiR5piv5a2Q57uE5Lu255qEcHJvcHMudGl0bGUgJyArIHRoaXMudGl0bGUpXG4gICAgICBjb25zb2xlLmxvZygn5oiR5piv5a2Q57uE5Lu255qEcHJvcHMudG9waWNpZCAnICsgdGhpcy50b3BpY2lkKVxuICAgICAgLy8g57uE5Lu25qC55pys5LiN55+l6YGT6Ieq5bex6KaB5Yqg6L2955qE5paH56ugaWTmmK/lpJrlsJHvvIzlj6rog73niLbnu4Tku7bkvKDpgJLov5vmnaVcbiAgICAgIC8vIHRoaXMudG9waWNfaWQgPSBvcHRpb25zLmlkXG4gICAgICAvLyB1dGlsLmdldFJlcXVlc3REYXRhKHtcbiAgICAgIC8vICAgdXJsOiAnaHR0cHM6Ly93d3cudjJleC5jb20vYXBpL3RvcGljcy9zaG93Lmpzb24nLFxuICAgICAgLy8gICBkYXRhOiB7aWQ6IHRoaXMuaWR9LFxuICAgICAgLy8gICBjYjogKGQpID0+IHtcbiAgICAgIC8vICAgICB0aGlzLnRvcGljX2RhdGEgPSBkLmRhdGFbMF1cbiAgICAgIC8vICAgICB0aGlzLnRvcGljX2NyZWF0ZWQgPSB1dGlsLmZvcm1hdFVUQyhkLmRhdGFbMF0uY3JlYXRlZClcbiAgICAgIC8vICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAvLyAgICAgaWYgKHRoaXMudG9waWNfZGF0YSAhPT0gbnVsbCkge1xuICAgICAgLy8gICAgICAgdXRpbC5nZXRSZXF1ZXN0RGF0YSh7XG4gICAgICAvLyAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LnYyZXguY29tL2FwaS9yZXBsaWVzL3Nob3cuanNvbicsXG4gICAgICAvLyAgICAgICAgIGRhdGE6IHt0b3BpY19pZDogdGhpcy50b3BpY19pZH0sXG4gICAgICAvLyAgICAgICAgIGNiOiAoZCkgPT4ge1xuICAgICAgLy8gICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBkLmRhdGEubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIC8vICAgICAgICAgICAgIGQuZGF0YVtpXS5jcmVhdGVkID0gdXRpbC5mb3JtYXRVVEMoZC5kYXRhW2ldLmNyZWF0ZWQpXG4gICAgICAvLyAgICAgICAgICAgfVxuICAgICAgLy8gICAgICAgICAgIHRoaXMudG9waWNfcmVsaWVzID0gZC5kYXRhXG4gICAgICAvLyAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgLy8gICAgICAgICB9XG4gICAgICAvLyAgICAgICB9KVxuICAgICAgLy8gICAgIH1cbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSlcbiAgICB9XG4gIH1cbiJdfQ==