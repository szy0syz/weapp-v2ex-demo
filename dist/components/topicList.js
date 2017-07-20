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
    }, _this.events = {}, _this.methods = {
      tap: function tap() {
        // this.num = this.num + 1
        console.log(this.$name + ' tap');
      },
      add: function add() {
        var len = this.list.length;
        this.list.push({ id: len + 1, title: 'title_' + len });
      },
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

      util.getRequestData({
        url: 'https://www.v2ex.com/api/topics/hot.json',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcGljTGlzdC5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIlRvcGljTGlzdCIsImRhdGEiLCJ0b3BpY3MiLCJldmVudHMiLCJtZXRob2RzIiwidGFwIiwiY29uc29sZSIsImxvZyIsIiRuYW1lIiwiYWRkIiwibGVuIiwibGlzdCIsImxlbmd0aCIsInB1c2giLCJpZCIsInRpdGxlIiwidG9EZXRhaWwiLCJlIiwibmF2aWdhdGVUbyIsInVybCIsImN1cnJlbnRUYXJnZXQiLCJnZXRSZXF1ZXN0RGF0YSIsImNiIiwicmVzIiwiJGFwcGx5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFRTs7Ozs7Ozs7Ozs7O0FBREEsSUFBSUEsT0FBT0MsUUFBUSxlQUFSLENBQVg7O0lBR3FCQyxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLEksR0FBTztBQUNMQyxjQUFRO0FBREgsSyxRQUtQQyxNLEdBQVMsRSxRQUdUQyxPLEdBQVU7QUFDUkMsU0FEUSxpQkFDRDtBQUNMO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVksS0FBS0MsS0FBTCxHQUFhLE1BQXpCO0FBQ0QsT0FKTztBQUtSQyxTQUxRLGlCQUtEO0FBQ0wsWUFBSUMsTUFBTSxLQUFLQyxJQUFMLENBQVVDLE1BQXBCO0FBQ0EsYUFBS0QsSUFBTCxDQUFVRSxJQUFWLENBQWUsRUFBQ0MsSUFBSUosTUFBTSxDQUFYLEVBQWNLLE9BQU8sV0FBV0wsR0FBaEMsRUFBZjtBQUNELE9BUk87QUFTUk0sY0FUUSxvQkFTRUMsQ0FURixFQVNLO0FBQ1gsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSyxzQkFBc0JGLEVBQUVHLGFBQUYsQ0FBZ0JOO0FBRDdCLFNBQWhCO0FBR0Q7QUFiTyxLOzs7Ozs2QkFnQkE7QUFBQTs7QUFDUmhCLFdBQUt1QixjQUFMLENBQW9CO0FBQ2xCRixhQUFLLDBDQURhO0FBRWxCRyxZQUFJLFlBQUNDLEdBQUQsRUFBUztBQUNYLGlCQUFLckIsTUFBTCxHQUFjcUIsSUFBSXRCLElBQWxCO0FBQ0EsaUJBQUt1QixNQUFMO0FBQ0Q7QUFMaUIsT0FBcEI7QUFPRDs7OztFQWpDb0MsZUFBS0MsUzs7a0JBQXZCekIsUyIsImZpbGUiOiJ0b3BpY0xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgdmFyIHV0aWwgPSByZXF1aXJlKCcuLi9saWJzL3V0aWxzJylcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BpY0xpc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgZGF0YSA9IHtcbiAgICAgIHRvcGljczogW1xuICAgICAgXVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgdGFwICgpIHtcbiAgICAgICAgLy8gdGhpcy5udW0gPSB0aGlzLm51bSArIDFcbiAgICAgICAgY29uc29sZS5sb2codGhpcy4kbmFtZSArICcgdGFwJylcbiAgICAgIH0sXG4gICAgICBhZGQgKCkge1xuICAgICAgICBsZXQgbGVuID0gdGhpcy5saXN0Lmxlbmd0aFxuICAgICAgICB0aGlzLmxpc3QucHVzaCh7aWQ6IGxlbiArIDEsIHRpdGxlOiAndGl0bGVfJyArIGxlbn0pXG4gICAgICB9LFxuICAgICAgdG9EZXRhaWwgKGUpIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvZGV0YWlsP2lkPScgKyBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgdXRpbC5nZXRSZXF1ZXN0RGF0YSh7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LnYyZXguY29tL2FwaS90b3BpY3MvaG90Lmpzb24nLFxuICAgICAgICBjYjogKHJlcykgPT4ge1xuICAgICAgICAgIHRoaXMudG9waWNzID0gcmVzLmRhdGFcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=