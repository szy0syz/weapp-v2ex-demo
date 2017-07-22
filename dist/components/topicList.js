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
      topics: Array
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
      console.log('我在组件topicList里');
      console.dir(this.topics);
      console.dir(this.obj);
      console.log(this.str);
    }
  }]);

  return TopicList;
}(_wepy2.default.component);

exports.default = TopicList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcGljTGlzdC5qcyJdLCJuYW1lcyI6WyJUb3BpY0xpc3QiLCJkYXRhIiwiZXZlbnRzIiwicHJvcHMiLCJ0b3BpY3MiLCJBcnJheSIsIm1ldGhvZHMiLCJ0b0RldGFpbCIsImUiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiY3VycmVudFRhcmdldCIsImlkIiwiY29uc29sZSIsImxvZyIsImRpciIsIm9iaiIsInN0ciIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxJLEdBQU8sRSxRQUdQQyxNLEdBQVMsRSxRQUdUQyxLLEdBQVE7QUFDTkMsY0FBUUM7QUFERixLLFFBSVJDLE8sR0FBVTtBQUNSQyxjQURRLG9CQUNFQyxDQURGLEVBQ0s7QUFDWCx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLLHNCQUFzQkYsRUFBRUcsYUFBRixDQUFnQkM7QUFEN0IsU0FBaEI7QUFHRDtBQUxPLEs7Ozs7OzZCQVFBO0FBQ1JDLGNBQVFDLEdBQVIsQ0FBWSxnQkFBWjtBQUNBRCxjQUFRRSxHQUFSLENBQVksS0FBS1gsTUFBakI7QUFDQVMsY0FBUUUsR0FBUixDQUFZLEtBQUtDLEdBQWpCO0FBQ0FILGNBQVFDLEdBQVIsQ0FBWSxLQUFLRyxHQUFqQjtBQUNEOzs7O0VBeEJvQyxlQUFLQyxTOztrQkFBdkJsQixTIiwiZmlsZSI6InRvcGljTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcGljTGlzdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBkYXRhID0ge1xuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBwcm9wcyA9IHtcbiAgICAgIHRvcGljczogQXJyYXlcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgdG9EZXRhaWwgKGUpIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvZGV0YWlsP2lkPScgKyBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgY29uc29sZS5sb2coJ+aIkeWcqOe7hOS7tnRvcGljTGlzdOmHjCcpXG4gICAgICBjb25zb2xlLmRpcih0aGlzLnRvcGljcylcbiAgICAgIGNvbnNvbGUuZGlyKHRoaXMub2JqKVxuICAgICAgY29uc29sZS5sb2codGhpcy5zdHIpXG4gICAgfVxuICB9XG4iXX0=