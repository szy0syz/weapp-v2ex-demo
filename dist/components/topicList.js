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

var TopicList = function (_wepy$component) {
  _inherits(TopicList, _wepy$component);

  function TopicList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TopicList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TopicList.__proto__ || Object.getPrototypeOf(TopicList)).call.apply(_ref, [this].concat(args))), _this), _this.data = {}, _this.events = {}, _this.props = {
      topics: Array,
      obj: Object,
      str: String
    }, _this.methods = {
      toDetail: function toDetail(e) {
        _wepy2.default.navigateTo({
          url: '/pages/detail?id=' + e.currentTarget.id
        });
      },
      test: function test() {
        console.dir(this.topics);
        console.dir(this.$parent.topics);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TopicList, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('我在组件topicList里');
      console.dir(this.topics);
      console.dir(this.obj);
      console.log(this.str);
    }
  }]);

  return TopicList;
}(_wepy2.default.component);

exports.default = TopicList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcGljTGlzdC5qcyJdLCJuYW1lcyI6WyJUb3BpY0xpc3QiLCJkYXRhIiwiZXZlbnRzIiwicHJvcHMiLCJ0b3BpY3MiLCJBcnJheSIsIm9iaiIsIk9iamVjdCIsInN0ciIsIlN0cmluZyIsIm1ldGhvZHMiLCJ0b0RldGFpbCIsImUiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiY3VycmVudFRhcmdldCIsImlkIiwidGVzdCIsImNvbnNvbGUiLCJkaXIiLCIkcGFyZW50IiwibG9nIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLEksR0FBTyxFLFFBR1BDLE0sR0FBUyxFLFFBR1RDLEssR0FBUTtBQUNOQyxjQUFRQyxLQURGO0FBRU5DLFdBQUtDLE1BRkM7QUFHTkMsV0FBS0M7QUFIQyxLLFFBTVJDLE8sR0FBVTtBQUNSQyxjQURRLG9CQUNFQyxDQURGLEVBQ0s7QUFDWCx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLLHNCQUFzQkYsRUFBRUcsYUFBRixDQUFnQkM7QUFEN0IsU0FBaEI7QUFHRCxPQUxPO0FBTVJDLFVBTlEsa0JBTUE7QUFDTkMsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFLZixNQUFqQjtBQUNBYyxnQkFBUUMsR0FBUixDQUFZLEtBQUtDLE9BQUwsQ0FBYWhCLE1BQXpCO0FBQ0Q7QUFUTyxLOzs7Ozs2QkFZQTtBQUNSYyxjQUFRRyxHQUFSLENBQVksZ0JBQVo7QUFDQUgsY0FBUUMsR0FBUixDQUFZLEtBQUtmLE1BQWpCO0FBQ0FjLGNBQVFDLEdBQVIsQ0FBWSxLQUFLYixHQUFqQjtBQUNBWSxjQUFRRyxHQUFSLENBQVksS0FBS2IsR0FBakI7QUFDRDs7OztFQTlCb0MsZUFBS2MsUzs7a0JBQXZCdEIsUyIsImZpbGUiOiJ0b3BpY0xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BpY0xpc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgZGF0YSA9IHtcbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgcHJvcHMgPSB7XG4gICAgICB0b3BpY3M6IEFycmF5LFxuICAgICAgb2JqOiBPYmplY3QsXG4gICAgICBzdHI6IFN0cmluZ1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0b0RldGFpbCAoZSkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy9wYWdlcy9kZXRhaWw/aWQ9JyArIGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIHRlc3QgKCkge1xuICAgICAgICBjb25zb2xlLmRpcih0aGlzLnRvcGljcylcbiAgICAgICAgY29uc29sZS5kaXIodGhpcy4kcGFyZW50LnRvcGljcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgY29uc29sZS5sb2coJ+aIkeWcqOe7hOS7tnRvcGljTGlzdOmHjCcpXG4gICAgICBjb25zb2xlLmRpcih0aGlzLnRvcGljcylcbiAgICAgIGNvbnNvbGUuZGlyKHRoaXMub2JqKVxuICAgICAgY29uc29sZS5sb2codGhpcy5zdHIpXG4gICAgfVxuICB9XG4iXX0=