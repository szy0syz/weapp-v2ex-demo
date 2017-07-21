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
          url: '/pages/detail?id=' + e.currentTarget.id
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TopicList, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      console.dir(this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcGljTGlzdC5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIlRvcGljTGlzdCIsImRhdGEiLCJ0b3BpY3MiLCJldmVudHMiLCJwcm9wcyIsImRldGFpbFBhZ2UiLCJTdHJpbmciLCJhcGlVcmwiLCJtZXRob2RzIiwidG9EZXRhaWwiLCJlIiwibmF2aWdhdGVUbyIsInVybCIsImN1cnJlbnRUYXJnZXQiLCJpZCIsImNvbnNvbGUiLCJkaXIiLCJnZXRSZXF1ZXN0RGF0YSIsImNiIiwicmVzIiwiJGFwcGx5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFRTs7Ozs7Ozs7Ozs7O0FBREEsSUFBSUEsT0FBT0MsUUFBUSxlQUFSLENBQVg7O0lBR3FCQyxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLEksR0FBTztBQUNMQyxjQUFRO0FBREgsSyxRQUlQQyxNLEdBQVMsRSxRQUdUQyxLLEdBQVE7QUFDTkMsa0JBQVlDLE1BRE47QUFFTkMsY0FBUUQ7QUFGRixLLFFBS1JFLE8sR0FBVTtBQUNSQyxjQURRLG9CQUNFQyxDQURGLEVBQ0s7QUFDWCx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLLHNCQUFzQkYsRUFBRUcsYUFBRixDQUFnQkM7QUFEN0IsU0FBaEI7QUFHRDtBQUxPLEs7Ozs7OzZCQVFBO0FBQUE7O0FBQ1JDLGNBQVFDLEdBQVIsQ0FBWSxJQUFaO0FBQ0FsQixXQUFLbUIsY0FBTCxDQUFvQjtBQUNsQkwsYUFBSyxLQUFLTCxNQURRO0FBRWxCVyxZQUFJLFlBQUNDLEdBQUQsRUFBUztBQUNYLGlCQUFLakIsTUFBTCxHQUFjaUIsSUFBSWxCLElBQWxCO0FBQ0EsaUJBQUttQixNQUFMO0FBQ0Q7QUFMaUIsT0FBcEI7QUFPRDs7OztFQTlCb0MsZUFBS0MsUzs7a0JBQXZCckIsUyIsImZpbGUiOiJ0b3BpY0xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgdmFyIHV0aWwgPSByZXF1aXJlKCcuLi9saWJzL3V0aWxzJylcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BpY0xpc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgZGF0YSA9IHtcbiAgICAgIHRvcGljczogW11cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgcHJvcHMgPSB7XG4gICAgICBkZXRhaWxQYWdlOiBTdHJpbmcsXG4gICAgICBhcGlVcmw6IFN0cmluZ1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0b0RldGFpbCAoZSkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy9wYWdlcy9kZXRhaWw/aWQ9JyArIGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICBjb25zb2xlLmRpcih0aGlzKVxuICAgICAgdXRpbC5nZXRSZXF1ZXN0RGF0YSh7XG4gICAgICAgIHVybDogdGhpcy5hcGlVcmwsXG4gICAgICAgIGNiOiAocmVzKSA9PiB7XG4gICAgICAgICAgdGhpcy50b3BpY3MgPSByZXMuZGF0YVxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==