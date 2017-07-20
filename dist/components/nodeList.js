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
      nodes: []
    }, _this.events = {}, _this.props = {
      apiUrl: String
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TopicList, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVMaXN0LmpzIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiVG9waWNMaXN0IiwiZGF0YSIsIm5vZGVzIiwiZXZlbnRzIiwicHJvcHMiLCJhcGlVcmwiLCJTdHJpbmciLCJtZXRob2RzIiwiZ2V0UmVxdWVzdERhdGEiLCJ1cmwiLCJjYiIsInJlcyIsInRvcGljcyIsIiRhcHBseSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUU7Ozs7Ozs7Ozs7OztBQURBLElBQUlBLE9BQU9DLFFBQVEsZUFBUixDQUFYOztJQUdxQkMsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxJLEdBQU87QUFDTEMsYUFBTztBQURGLEssUUFJUEMsTSxHQUFTLEUsUUFHVEMsSyxHQUFRO0FBQ05DLGNBQVFDO0FBREYsSyxRQUlSQyxPLEdBQVUsRTs7Ozs7NkJBR0E7QUFBQTs7QUFDUlQsV0FBS1UsY0FBTCxDQUFvQjtBQUNsQkMsYUFBSyxLQUFLSixNQURRO0FBRWxCSyxZQUFJLFlBQUNDLEdBQUQsRUFBUztBQUNYLGlCQUFLQyxNQUFMLEdBQWNELElBQUlWLElBQWxCO0FBQ0EsaUJBQUtZLE1BQUw7QUFDRDtBQUxpQixPQUFwQjtBQU9EOzs7O0VBdkJvQyxlQUFLQyxTOztrQkFBdkJkLFMiLCJmaWxlIjoibm9kZUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgdmFyIHV0aWwgPSByZXF1aXJlKCcuLi9saWJzL3V0aWxzJylcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BpY0xpc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgZGF0YSA9IHtcbiAgICAgIG5vZGVzOiBbXVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBwcm9wcyA9IHtcbiAgICAgIGFwaVVybDogU3RyaW5nXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgdXRpbC5nZXRSZXF1ZXN0RGF0YSh7XG4gICAgICAgIHVybDogdGhpcy5hcGlVcmwsXG4gICAgICAgIGNiOiAocmVzKSA9PiB7XG4gICAgICAgICAgdGhpcy50b3BpY3MgPSByZXMuZGF0YVxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==