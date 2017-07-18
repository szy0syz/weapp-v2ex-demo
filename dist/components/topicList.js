'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2, _initialiseProps;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var util = require('./../libs/utils.js');
var List = (_temp2 = _class = function (_wepy$component) {
  _inherits(List, _wepy$component);

  function List() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, List);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(List, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      util.getRequestData({
        url: 'https://www.v2ex.com/api/topics/hot.json',
        cb: function cb(res) {
          _this2.topics = res.data;
          _this2.$apply(); // 没办法啊，异步空间了，咱手动通知哈view层，数据改变了。
        }
      });
    }
  }, {
    key: 'toDetail',
    value: function toDetail(e) {
      _wepy2.default.navigateTo({
        url: '/pages/index?id=' + e.currentTarget.id
      });
    }
  }]);

  return List;
}(_wepy2.default.component), _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.data = {
    topics: []
  };
  this.events = {
    'index-broadcast': function indexBroadcast() {
      var _ref2;

      var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
      console.log(_this3.$name + ' receive ' + $event.name + ' from ' + $event.source.name);
    }
  };
  this.methods = {
    tap: function tap() {
      // this.num = this.num + 1
      console.log(this.$name + ' tap');
    },
    add: function add() {
      var len = this.list.length;
      this.list.push({ id: len + 1, title: 'title_' + len });
    }
  };
}, _temp2);
exports.default = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcGljTGlzdC5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIkxpc3QiLCJnZXRSZXF1ZXN0RGF0YSIsInVybCIsImNiIiwicmVzIiwidG9waWNzIiwiZGF0YSIsIiRhcHBseSIsImUiLCJuYXZpZ2F0ZVRvIiwiY3VycmVudFRhcmdldCIsImlkIiwiY29tcG9uZW50IiwiZXZlbnRzIiwiJGV2ZW50IiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsIiRuYW1lIiwibmFtZSIsInNvdXJjZSIsIm1ldGhvZHMiLCJ0YXAiLCJhZGQiLCJsZW4iLCJsaXN0IiwicHVzaCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVFOzs7Ozs7Ozs7Ozs7QUFEQSxJQUFJQSxPQUFPQyxRQUFRLGVBQVIsQ0FBWDtJQUdxQkMsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkF3QlQ7QUFBQTs7QUFDUkYsV0FBS0csY0FBTCxDQUFvQjtBQUNsQkMsYUFBSywwQ0FEYTtBQUVsQkMsWUFBSSxZQUFDQyxHQUFELEVBQVM7QUFDWCxpQkFBS0MsTUFBTCxHQUFjRCxJQUFJRSxJQUFsQjtBQUNBLGlCQUFLQyxNQUFMLEdBRlcsQ0FFRztBQUNmO0FBTGlCLE9BQXBCO0FBT0Q7Ozs2QkFFU0MsQyxFQUFHO0FBQ1gscUJBQUtDLFVBQUwsQ0FBZ0I7QUFDWlAsYUFBSyxxQkFBcUJNLEVBQUVFLGFBQUYsQ0FBZ0JDO0FBRDlCLE9BQWhCO0FBR0Q7Ozs7RUF0QytCLGVBQUtDLFM7OztPQUNyQ04sSSxHQUFPO0FBQ0xELFlBQVE7QUFESCxHO09BS1BRLE0sR0FBUztBQUNQLHVCQUFtQiwwQkFBYTtBQUFBOztBQUM5QixVQUFJQyxrQkFBYyxVQUFLQyxNQUFMLEdBQWMsQ0FBNUIsMkRBQUo7QUFDQUMsY0FBUUMsR0FBUixDQUFlLE9BQUtDLEtBQXBCLGlCQUFxQ0osT0FBT0ssSUFBNUMsY0FBeURMLE9BQU9NLE1BQVAsQ0FBY0QsSUFBdkU7QUFDRDtBQUpNLEc7T0FPVEUsTyxHQUFVO0FBQ1JDLE9BRFEsaUJBQ0Q7QUFDTDtBQUNBTixjQUFRQyxHQUFSLENBQVksS0FBS0MsS0FBTCxHQUFhLE1BQXpCO0FBQ0QsS0FKTztBQUtSSyxPQUxRLGlCQUtEO0FBQ0wsVUFBSUMsTUFBTSxLQUFLQyxJQUFMLENBQVVWLE1BQXBCO0FBQ0EsV0FBS1UsSUFBTCxDQUFVQyxJQUFWLENBQWUsRUFBQ2YsSUFBSWEsTUFBTSxDQUFYLEVBQWNHLE9BQU8sV0FBV0gsR0FBaEMsRUFBZjtBQUNEO0FBUk8sRzs7a0JBYlN4QixJIiwiZmlsZSI6InRvcGljTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBsZXQgdXRpbCA9IHJlcXVpcmUoJy4uL2xpYnMvdXRpbHMnKVxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgZGF0YSA9IHtcbiAgICAgIHRvcGljczogW1xuICAgICAgXVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICAgICdpbmRleC1icm9hZGNhc3QnOiAoLi4uYXJncykgPT4ge1xuICAgICAgICBsZXQgJGV2ZW50ID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuJG5hbWV9IHJlY2VpdmUgJHskZXZlbnQubmFtZX0gZnJvbSAkeyRldmVudC5zb3VyY2UubmFtZX1gKVxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0YXAgKCkge1xuICAgICAgICAvLyB0aGlzLm51bSA9IHRoaXMubnVtICsgMVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiRuYW1lICsgJyB0YXAnKVxuICAgICAgfSxcbiAgICAgIGFkZCAoKSB7XG4gICAgICAgIGxldCBsZW4gPSB0aGlzLmxpc3QubGVuZ3RoXG4gICAgICAgIHRoaXMubGlzdC5wdXNoKHtpZDogbGVuICsgMSwgdGl0bGU6ICd0aXRsZV8nICsgbGVufSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgdXRpbC5nZXRSZXF1ZXN0RGF0YSh7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LnYyZXguY29tL2FwaS90b3BpY3MvaG90Lmpzb24nLFxuICAgICAgICBjYjogKHJlcykgPT4ge1xuICAgICAgICAgIHRoaXMudG9waWNzID0gcmVzLmRhdGFcbiAgICAgICAgICB0aGlzLiRhcHBseSgpIC8vIOayoeWKnuazleWViu+8jOW8guatpeepuumXtOS6hu+8jOWSseaJi+WKqOmAmuefpeWTiHZpZXflsYLvvIzmlbDmja7mlLnlj5jkuobjgIJcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0b0RldGFpbCAoZSkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvaW5kZXg/aWQ9JyArIGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgICB9KVxuICAgIH1cbiAgfVxuIl19