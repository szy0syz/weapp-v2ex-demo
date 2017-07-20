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

var NodeList = function (_wepy$component) {
  _inherits(NodeList, _wepy$component);

  function NodeList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NodeList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NodeList.__proto__ || Object.getPrototypeOf(NodeList)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      nodes: []
    }, _this.tdata = {
      allNodes: [],
      isFinished: false
    }, _this.events = {}, _this.props = {
      apiUrl: String
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NodeList, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      util.getRequestData({
        url: 'https://www.v2ex.com/api/nodes/all.json',
        cb: function cb(d) {
          _this2.tdata.allNodes = d.data;
          if (d.data instanceof Array) {
            var tmp = d.data.slice(0, 52);
            _this2.nodes = tmp;
            _this2.$apply();
          }
        }
      });
    }
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      console.log('onReachBottom~~~~');
      if (this.data.isFinished) return;
      var amount = this.nodes.length;
      var ary = [];
      var index = 0;
      for (var i = 0, len = this.tdata.allNodes.length; i < 20; i++) {
        index = amount + i;
        if (index >= len) {
          // wx.showToast({
          //   title: '已经加载完毕',
          //   icon: 'success',
          //   duration: 2000
          // })
          this.tdata.isFinished = true; // 设置flag，不再触发上拉触底事件
          break;
        }
        ary.push(this.tdata.allNodes[index]);
      }
      index = null;
      ary = this.nodes.concat(ary); // 有多少加多少
      this.setData({ nodes: ary });
      this.nodes = ary;
      this.$apply();
    }
  }]);

  return NodeList;
}(_wepy2.default.component);

exports.default = NodeList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVMaXN0LmpzIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiTm9kZUxpc3QiLCJkYXRhIiwibm9kZXMiLCJ0ZGF0YSIsImFsbE5vZGVzIiwiaXNGaW5pc2hlZCIsImV2ZW50cyIsInByb3BzIiwiYXBpVXJsIiwiU3RyaW5nIiwibWV0aG9kcyIsImdldFJlcXVlc3REYXRhIiwidXJsIiwiY2IiLCJkIiwiQXJyYXkiLCJ0bXAiLCJzbGljZSIsIiRhcHBseSIsImNvbnNvbGUiLCJsb2ciLCJhbW91bnQiLCJsZW5ndGgiLCJhcnkiLCJpbmRleCIsImkiLCJsZW4iLCJwdXNoIiwiY29uY2F0Iiwic2V0RGF0YSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLE9BQU9DLFFBQVEsZUFBUixDQUFYOztJQUNxQkMsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxJLEdBQU87QUFDTEMsYUFBTztBQURGLEssUUFJUEMsSyxHQUFRO0FBQ05DLGdCQUFVLEVBREo7QUFFTkMsa0JBQVk7QUFGTixLLFFBS1JDLE0sR0FBUyxFLFFBR1RDLEssR0FBUTtBQUNOQyxjQUFRQztBQURGLEssUUFJUkMsTyxHQUFVLEU7Ozs7OzZCQUdBO0FBQUE7O0FBQ1JaLFdBQUthLGNBQUwsQ0FBb0I7QUFDbEJDLGFBQUsseUNBRGE7QUFFbEJDLFlBQUksWUFBQ0MsQ0FBRCxFQUFPO0FBQ1QsaUJBQUtYLEtBQUwsQ0FBV0MsUUFBWCxHQUFzQlUsRUFBRWIsSUFBeEI7QUFDQSxjQUFJYSxFQUFFYixJQUFGLFlBQWtCYyxLQUF0QixFQUE2QjtBQUMzQixnQkFBSUMsTUFBTUYsRUFBRWIsSUFBRixDQUFPZ0IsS0FBUCxDQUFhLENBQWIsRUFBZ0IsRUFBaEIsQ0FBVjtBQUNBLG1CQUFLZixLQUFMLEdBQWFjLEdBQWI7QUFDQSxtQkFBS0UsTUFBTDtBQUNEO0FBQ0Y7QUFUaUIsT0FBcEI7QUFXRDs7O29DQUVlO0FBQ2RDLGNBQVFDLEdBQVIsQ0FBWSxtQkFBWjtBQUNBLFVBQUksS0FBS25CLElBQUwsQ0FBVUksVUFBZCxFQUEwQjtBQUMxQixVQUFNZ0IsU0FBUyxLQUFLbkIsS0FBTCxDQUFXb0IsTUFBMUI7QUFDQSxVQUFJQyxNQUFNLEVBQVY7QUFDQSxVQUFJQyxRQUFRLENBQVo7QUFDQSxXQUFLLElBQUlDLElBQUksQ0FBUixFQUFXQyxNQUFNLEtBQUt2QixLQUFMLENBQVdDLFFBQVgsQ0FBb0JrQixNQUExQyxFQUFrREcsSUFBSSxFQUF0RCxFQUEwREEsR0FBMUQsRUFBK0Q7QUFDN0RELGdCQUFRSCxTQUFTSSxDQUFqQjtBQUNBLFlBQUlELFNBQVNFLEdBQWIsRUFBa0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQUt2QixLQUFMLENBQVdFLFVBQVgsR0FBd0IsSUFBeEIsQ0FOZ0IsQ0FNYTtBQUM3QjtBQUNEO0FBQ0RrQixZQUFJSSxJQUFKLENBQVMsS0FBS3hCLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQm9CLEtBQXBCLENBQVQ7QUFDRDtBQUNEQSxjQUFRLElBQVI7QUFDQUQsWUFBTSxLQUFLckIsS0FBTCxDQUFXMEIsTUFBWCxDQUFrQkwsR0FBbEIsQ0FBTixDQXBCYyxDQW9CZTtBQUM3QixXQUFLTSxPQUFMLENBQWEsRUFBRTNCLE9BQU9xQixHQUFULEVBQWI7QUFDQSxXQUFLckIsS0FBTCxHQUFhcUIsR0FBYjtBQUNBLFdBQUtMLE1BQUw7QUFDRDs7OztFQTFEbUMsZUFBS1ksUzs7a0JBQXRCOUIsUSIsImZpbGUiOiJub2RlTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICB2YXIgdXRpbCA9IHJlcXVpcmUoJy4uL2xpYnMvdXRpbHMnKVxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlTGlzdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBkYXRhID0ge1xuICAgICAgbm9kZXM6IFtdXG4gICAgfVxuXG4gICAgdGRhdGEgPSB7XG4gICAgICBhbGxOb2RlczogW10sXG4gICAgICBpc0ZpbmlzaGVkOiBmYWxzZVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBwcm9wcyA9IHtcbiAgICAgIGFwaVVybDogU3RyaW5nXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgdXRpbC5nZXRSZXF1ZXN0RGF0YSh7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LnYyZXguY29tL2FwaS9ub2Rlcy9hbGwuanNvbicsXG4gICAgICAgIGNiOiAoZCkgPT4ge1xuICAgICAgICAgIHRoaXMudGRhdGEuYWxsTm9kZXMgPSBkLmRhdGFcbiAgICAgICAgICBpZiAoZC5kYXRhIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIHZhciB0bXAgPSBkLmRhdGEuc2xpY2UoMCwgNTIpXG4gICAgICAgICAgICB0aGlzLm5vZGVzID0gdG1wXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIG9uUmVhY2hCb3R0b20oKSB7XG4gICAgICBjb25zb2xlLmxvZygnb25SZWFjaEJvdHRvbX5+fn4nKVxuICAgICAgaWYgKHRoaXMuZGF0YS5pc0ZpbmlzaGVkKSByZXR1cm5cbiAgICAgIGNvbnN0IGFtb3VudCA9IHRoaXMubm9kZXMubGVuZ3RoXG4gICAgICBsZXQgYXJ5ID0gW11cbiAgICAgIGxldCBpbmRleCA9IDBcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLnRkYXRhLmFsbE5vZGVzLmxlbmd0aDsgaSA8IDIwOyBpKyspIHtcbiAgICAgICAgaW5kZXggPSBhbW91bnQgKyBpXG4gICAgICAgIGlmIChpbmRleCA+PSBsZW4pIHtcbiAgICAgICAgICAvLyB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgIC8vICAgdGl0bGU6ICflt7Lnu4/liqDovb3lrozmr5UnLFxuICAgICAgICAgIC8vICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgIC8vICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICAvLyB9KVxuICAgICAgICAgIHRoaXMudGRhdGEuaXNGaW5pc2hlZCA9IHRydWUgLy8g6K6+572uZmxhZ++8jOS4jeWGjeinpuWPkeS4iuaLieinpuW6leS6i+S7tlxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgYXJ5LnB1c2godGhpcy50ZGF0YS5hbGxOb2Rlc1tpbmRleF0pXG4gICAgICB9XG4gICAgICBpbmRleCA9IG51bGxcbiAgICAgIGFyeSA9IHRoaXMubm9kZXMuY29uY2F0KGFyeSkgLy8g5pyJ5aSa5bCR5Yqg5aSa5bCRXG4gICAgICB0aGlzLnNldERhdGEoeyBub2RlczogYXJ5IH0pXG4gICAgICB0aGlzLm5vZGVzID0gYXJ5XG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICB9XG4iXX0=