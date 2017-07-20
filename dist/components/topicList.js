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
      topics: []
    }, _this.events = {}, _this.props = {
      detailPage: String,
      apiUrl: String
    }, _this.methods = {
      toDetail: function toDetail(e) {
        _wepy2.default.navigateTo({
          url: this.detailPage + '?id=' + e.currentTarget.id
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TopicList, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      console.log(this.apiUrl + '******');
      util.getRequestData({
        url: this.apiUrl,
        cb: function cb(res) {
          _this2.topics = res.data;
          _this2.$apply();
        }
      });
    }
  }]);

  return TopicList;
}(_wepy2.default.component);

exports.default = TopicList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcGljTGlzdC5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIlRvcGljTGlzdCIsImRhdGEiLCJ0b3BpY3MiLCJldmVudHMiLCJwcm9wcyIsImRldGFpbFBhZ2UiLCJTdHJpbmciLCJhcGlVcmwiLCJtZXRob2RzIiwidG9EZXRhaWwiLCJlIiwibmF2aWdhdGVUbyIsInVybCIsImN1cnJlbnRUYXJnZXQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJnZXRSZXF1ZXN0RGF0YSIsImNiIiwicmVzIiwiJGFwcGx5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFRTs7Ozs7Ozs7Ozs7O0FBREEsSUFBSUEsT0FBT0MsUUFBUSxlQUFSLENBQVg7O0lBR3FCQyxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLEksR0FBTztBQUNMQyxjQUFRO0FBREgsSyxRQUlQQyxNLEdBQVMsRSxRQUdUQyxLLEdBQVE7QUFDTkMsa0JBQVlDLE1BRE47QUFFTkMsY0FBUUQ7QUFGRixLLFFBS1JFLE8sR0FBVTtBQUNSQyxjQURRLG9CQUNFQyxDQURGLEVBQ0s7QUFDWCx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLLEtBQUtQLFVBQUwsR0FBa0IsTUFBbEIsR0FBMkJLLEVBQUVHLGFBQUYsQ0FBZ0JDO0FBRGxDLFNBQWhCO0FBR0Q7QUFMTyxLOzs7Ozs2QkFRQTtBQUFBOztBQUNSQyxjQUFRQyxHQUFSLENBQVksS0FBS1QsTUFBTCxHQUFjLFFBQTFCO0FBQ0FULFdBQUttQixjQUFMLENBQW9CO0FBQ2xCTCxhQUFLLEtBQUtMLE1BRFE7QUFFbEJXLFlBQUksWUFBQ0MsR0FBRCxFQUFTO0FBQ1gsaUJBQUtqQixNQUFMLEdBQWNpQixJQUFJbEIsSUFBbEI7QUFDQSxpQkFBS21CLE1BQUw7QUFDRDtBQUxpQixPQUFwQjtBQU9EOzs7O0VBOUJvQyxlQUFLQyxTOztrQkFBdkJyQixTIiwiZmlsZSI6InRvcGljTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICB2YXIgdXRpbCA9IHJlcXVpcmUoJy4uL2xpYnMvdXRpbHMnKVxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcGljTGlzdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBkYXRhID0ge1xuICAgICAgdG9waWNzOiBbXVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBwcm9wcyA9IHtcbiAgICAgIGRldGFpbFBhZ2U6IFN0cmluZyxcbiAgICAgIGFwaVVybDogU3RyaW5nXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHRvRGV0YWlsIChlKSB7XG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiB0aGlzLmRldGFpbFBhZ2UgKyAnP2lkPScgKyBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgY29uc29sZS5sb2codGhpcy5hcGlVcmwgKyAnKioqKioqJylcbiAgICAgIHV0aWwuZ2V0UmVxdWVzdERhdGEoe1xuICAgICAgICB1cmw6IHRoaXMuYXBpVXJsLFxuICAgICAgICBjYjogKHJlcykgPT4ge1xuICAgICAgICAgIHRoaXMudG9waWNzID0gcmVzLmRhdGFcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=