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
      topic_id: null,
      topic_data: null,
      topic_relies: null,
      topic_created: ''
    }, _this.events = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TopicList, [{
    key: 'onLoad',
    value: function onLoad(options) {
      var _this2 = this;

      console.dir(arguments);
      this.topic_id = options.id;
      util.getRequestData({
        url: 'https://www.v2ex.com/api/topics/show.json',
        data: { id: this.topic_id },
        cb: function cb(d) {
          _this2.topic_data = d.data[0];
          _this2.topic_created = util.formatUTC(d.data[0].created);
          _this2.$apply();
          if (_this2.topic_data !== null) {
            util.getRequestData({
              url: 'https://www.v2ex.com/api/replies/show.json',
              data: { topic_id: _this2.topic_id },
              cb: function cb(d) {
                for (var i = 0, len = d.data.length; i < len; i++) {
                  d.data[i].created = util.formatUTC(d.data[i].created);
                }
                _this2.topic_relies = d.data;
                _this2.$apply();
              }
            });
          }
        }
      });
    }
  }]);

  return TopicList;
}(_wepy2.default.component);

exports.default = TopicList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcGljRGV0YWlsLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiVG9waWNMaXN0IiwiZGF0YSIsInRvcGljX2lkIiwidG9waWNfZGF0YSIsInRvcGljX3JlbGllcyIsInRvcGljX2NyZWF0ZWQiLCJldmVudHMiLCJtZXRob2RzIiwib3B0aW9ucyIsImNvbnNvbGUiLCJkaXIiLCJhcmd1bWVudHMiLCJpZCIsImdldFJlcXVlc3REYXRhIiwidXJsIiwiY2IiLCJkIiwiZm9ybWF0VVRDIiwiY3JlYXRlZCIsIiRhcHBseSIsImkiLCJsZW4iLCJsZW5ndGgiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVFOzs7Ozs7Ozs7OztBQURBOzs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLGVBQVIsQ0FBWDs7SUFDcUJDLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsSSxHQUFPO0FBQ0xDLGdCQUFVLElBREw7QUFFTEMsa0JBQVksSUFGUDtBQUdMQyxvQkFBYyxJQUhUO0FBSUxDLHFCQUFlO0FBSlYsSyxRQU9QQyxNLEdBQVMsRSxRQUdUQyxPLEdBQVUsRTs7Ozs7MkJBR0ZDLE8sRUFBUztBQUFBOztBQUNmQyxjQUFRQyxHQUFSLENBQVlDLFNBQVo7QUFDQSxXQUFLVCxRQUFMLEdBQWdCTSxRQUFRSSxFQUF4QjtBQUNBZCxXQUFLZSxjQUFMLENBQW9CO0FBQ2xCQyxhQUFLLDJDQURhO0FBRWxCYixjQUFNLEVBQUNXLElBQUksS0FBS1YsUUFBVixFQUZZO0FBR2xCYSxZQUFJLFlBQUNDLENBQUQsRUFBTztBQUNULGlCQUFLYixVQUFMLEdBQWtCYSxFQUFFZixJQUFGLENBQU8sQ0FBUCxDQUFsQjtBQUNBLGlCQUFLSSxhQUFMLEdBQXFCUCxLQUFLbUIsU0FBTCxDQUFlRCxFQUFFZixJQUFGLENBQU8sQ0FBUCxFQUFVaUIsT0FBekIsQ0FBckI7QUFDQSxpQkFBS0MsTUFBTDtBQUNBLGNBQUksT0FBS2hCLFVBQUwsS0FBb0IsSUFBeEIsRUFBOEI7QUFDNUJMLGlCQUFLZSxjQUFMLENBQW9CO0FBQ2xCQyxtQkFBSyw0Q0FEYTtBQUVsQmIsb0JBQU0sRUFBQ0MsVUFBVSxPQUFLQSxRQUFoQixFQUZZO0FBR2xCYSxrQkFBSSxZQUFDQyxDQUFELEVBQU87QUFDVCxxQkFBSyxJQUFJSSxJQUFJLENBQVIsRUFBV0MsTUFBTUwsRUFBRWYsSUFBRixDQUFPcUIsTUFBN0IsRUFBcUNGLElBQUlDLEdBQXpDLEVBQThDRCxHQUE5QyxFQUFtRDtBQUNqREosb0JBQUVmLElBQUYsQ0FBT21CLENBQVAsRUFBVUYsT0FBVixHQUFvQnBCLEtBQUttQixTQUFMLENBQWVELEVBQUVmLElBQUYsQ0FBT21CLENBQVAsRUFBVUYsT0FBekIsQ0FBcEI7QUFDRDtBQUNELHVCQUFLZCxZQUFMLEdBQW9CWSxFQUFFZixJQUF0QjtBQUNBLHVCQUFLa0IsTUFBTDtBQUNEO0FBVGlCLGFBQXBCO0FBV0Q7QUFDRjtBQXBCaUIsT0FBcEI7QUFzQkQ7Ozs7RUF2Q29DLGVBQUtJLFM7O2tCQUF2QnZCLFMiLCJmaWxlIjoidG9waWNEZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLy8gdmFyIHV0aWwgPSByZXF1aXJlKCcuLi9saWJzL3V0aWxzJylcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgdmFyIHV0aWwgPSByZXF1aXJlKCcuLi9saWJzL3V0aWxzJylcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9waWNMaXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIGRhdGEgPSB7XG4gICAgICB0b3BpY19pZDogbnVsbCxcbiAgICAgIHRvcGljX2RhdGE6IG51bGwsXG4gICAgICB0b3BpY19yZWxpZXM6IG51bGwsXG4gICAgICB0b3BpY19jcmVhdGVkOiAnJ1xuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCAob3B0aW9ucykge1xuICAgICAgY29uc29sZS5kaXIoYXJndW1lbnRzKVxuICAgICAgdGhpcy50b3BpY19pZCA9IG9wdGlvbnMuaWRcbiAgICAgIHV0aWwuZ2V0UmVxdWVzdERhdGEoe1xuICAgICAgICB1cmw6ICdodHRwczovL3d3dy52MmV4LmNvbS9hcGkvdG9waWNzL3Nob3cuanNvbicsXG4gICAgICAgIGRhdGE6IHtpZDogdGhpcy50b3BpY19pZH0sXG4gICAgICAgIGNiOiAoZCkgPT4ge1xuICAgICAgICAgIHRoaXMudG9waWNfZGF0YSA9IGQuZGF0YVswXVxuICAgICAgICAgIHRoaXMudG9waWNfY3JlYXRlZCA9IHV0aWwuZm9ybWF0VVRDKGQuZGF0YVswXS5jcmVhdGVkKVxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICBpZiAodGhpcy50b3BpY19kYXRhICE9PSBudWxsKSB7XG4gICAgICAgICAgICB1dGlsLmdldFJlcXVlc3REYXRhKHtcbiAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cudjJleC5jb20vYXBpL3JlcGxpZXMvc2hvdy5qc29uJyxcbiAgICAgICAgICAgICAgZGF0YToge3RvcGljX2lkOiB0aGlzLnRvcGljX2lkfSxcbiAgICAgICAgICAgICAgY2I6IChkKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGQuZGF0YS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgZC5kYXRhW2ldLmNyZWF0ZWQgPSB1dGlsLmZvcm1hdFVUQyhkLmRhdGFbaV0uY3JlYXRlZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy50b3BpY19yZWxpZXMgPSBkLmRhdGFcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19