'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

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

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, NodeList);

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NodeList.__proto__ || Object.getPrototypeOf(NodeList)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      nodes: []
    }, _this.components = {
      toast: _wepyComToast2.default
    }, _this.tdata = {
      allNodes: [],
      isFinished: false
    }, _this.events = {
      'getMoreNodes': function getMoreNodes() {
        // let $event = args[args.length - 1]
        if (_this.tdata.isFinished) return;
        var amount = _this.nodes.length;
        var ary = [];
        var index = 0;
        for (var i = 0, len = _this.tdata.allNodes.length; i < 80; i++) {
          index = amount + i;
          if (index >= len) {
            console.log('全部加载完毕');
            // let promise = this.$invoke('toast', 'show', {
            //   title: '全部加载完毕',
            //   img: 'https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png'
            // })
            // promise.then((d) => {
            //   this.tdata.isFinished = true // 设置flag，不再触发上拉触底事件
            // })
            break;
          }
          ary.push(_this.tdata.allNodes[index]);
        }
        index = null;
        ary = _this.nodes.concat(ary); // 有多少加多少
        _this.nodes = ary;
        _this.$apply();
      }
    }, _this.props = {
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
  }]);

  return NodeList;
}(_wepy2.default.component);

exports.default = NodeList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVMaXN0LmpzIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiTm9kZUxpc3QiLCJkYXRhIiwibm9kZXMiLCJjb21wb25lbnRzIiwidG9hc3QiLCJ0ZGF0YSIsImFsbE5vZGVzIiwiaXNGaW5pc2hlZCIsImV2ZW50cyIsImFtb3VudCIsImxlbmd0aCIsImFyeSIsImluZGV4IiwiaSIsImxlbiIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiY29uY2F0IiwiJGFwcGx5IiwicHJvcHMiLCJhcGlVcmwiLCJTdHJpbmciLCJtZXRob2RzIiwiZ2V0UmVxdWVzdERhdGEiLCJ1cmwiLCJjYiIsImQiLCJBcnJheSIsInRtcCIsInNsaWNlIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxPQUFPQyxRQUFRLGVBQVIsQ0FBWDs7SUFDcUJDLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsSSxHQUFPO0FBQ0xDLGFBQU87QUFERixLLFFBSVBDLFUsR0FBYTtBQUNYQztBQURXLEssUUFJYkMsSyxHQUFRO0FBQ05DLGdCQUFVLEVBREo7QUFFTkMsa0JBQVk7QUFGTixLLFFBS1JDLE0sR0FBUztBQUNQLHNCQUFnQix3QkFBYTtBQUMzQjtBQUNBLFlBQUksTUFBS0gsS0FBTCxDQUFXRSxVQUFmLEVBQTJCO0FBQzNCLFlBQU1FLFNBQVMsTUFBS1AsS0FBTCxDQUFXUSxNQUExQjtBQUNBLFlBQUlDLE1BQU0sRUFBVjtBQUNBLFlBQUlDLFFBQVEsQ0FBWjtBQUNBLGFBQUssSUFBSUMsSUFBSSxDQUFSLEVBQVdDLE1BQU0sTUFBS1QsS0FBTCxDQUFXQyxRQUFYLENBQW9CSSxNQUExQyxFQUFrREcsSUFBSSxFQUF0RCxFQUEwREEsR0FBMUQsRUFBK0Q7QUFDN0RELGtCQUFRSCxTQUFTSSxDQUFqQjtBQUNBLGNBQUlELFNBQVNFLEdBQWIsRUFBa0I7QUFDaEJDLG9CQUFRQyxHQUFSLENBQVksUUFBWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBQUNETCxjQUFJTSxJQUFKLENBQVMsTUFBS1osS0FBTCxDQUFXQyxRQUFYLENBQW9CTSxLQUFwQixDQUFUO0FBQ0Q7QUFDREEsZ0JBQVEsSUFBUjtBQUNBRCxjQUFNLE1BQUtULEtBQUwsQ0FBV2dCLE1BQVgsQ0FBa0JQLEdBQWxCLENBQU4sQ0F0QjJCLENBc0JFO0FBQzdCLGNBQUtULEtBQUwsR0FBYVMsR0FBYjtBQUNBLGNBQUtRLE1BQUw7QUFDRDtBQTFCTSxLLFFBNkJUQyxLLEdBQVE7QUFDTkMsY0FBUUM7QUFERixLLFFBSVJDLE8sR0FBVSxFOzs7Ozs2QkFHQTtBQUFBOztBQUNSekIsV0FBSzBCLGNBQUwsQ0FBb0I7QUFDbEJDLGFBQUsseUNBRGE7QUFFbEJDLFlBQUksWUFBQ0MsQ0FBRCxFQUFPO0FBQ1QsaUJBQUt0QixLQUFMLENBQVdDLFFBQVgsR0FBc0JxQixFQUFFMUIsSUFBeEI7QUFDQSxjQUFJMEIsRUFBRTFCLElBQUYsWUFBa0IyQixLQUF0QixFQUE2QjtBQUMzQixnQkFBSUMsTUFBTUYsRUFBRTFCLElBQUYsQ0FBTzZCLEtBQVAsQ0FBYSxDQUFiLEVBQWdCLEVBQWhCLENBQVY7QUFDQSxtQkFBSzVCLEtBQUwsR0FBYTJCLEdBQWI7QUFDQSxtQkFBS1YsTUFBTDtBQUNEO0FBQ0Y7QUFUaUIsT0FBcEI7QUFXRDs7OztFQTlEbUMsZUFBS1ksUzs7a0JBQXRCL0IsUSIsImZpbGUiOiJub2RlTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnXG4gIHZhciB1dGlsID0gcmVxdWlyZSgnLi4vbGlicy91dGlscycpXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGVMaXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIGRhdGEgPSB7XG4gICAgICBub2RlczogW11cbiAgICB9XG5cbiAgICBjb21wb25lbnRzID0ge1xuICAgICAgdG9hc3Q6IFRvYXN0XG4gICAgfVxuXG4gICAgdGRhdGEgPSB7XG4gICAgICBhbGxOb2RlczogW10sXG4gICAgICBpc0ZpbmlzaGVkOiBmYWxzZVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICAgICdnZXRNb3JlTm9kZXMnOiAoLi4uYXJncykgPT4ge1xuICAgICAgICAvLyBsZXQgJGV2ZW50ID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdXG4gICAgICAgIGlmICh0aGlzLnRkYXRhLmlzRmluaXNoZWQpIHJldHVyblxuICAgICAgICBjb25zdCBhbW91bnQgPSB0aGlzLm5vZGVzLmxlbmd0aFxuICAgICAgICBsZXQgYXJ5ID0gW11cbiAgICAgICAgbGV0IGluZGV4ID0gMFxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy50ZGF0YS5hbGxOb2Rlcy5sZW5ndGg7IGkgPCA4MDsgaSsrKSB7XG4gICAgICAgICAgaW5kZXggPSBhbW91bnQgKyBpXG4gICAgICAgICAgaWYgKGluZGV4ID49IGxlbikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ+WFqOmDqOWKoOi9veWujOavlScpXG4gICAgICAgICAgICAvLyBsZXQgcHJvbWlzZSA9IHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvdycsIHtcbiAgICAgICAgICAgIC8vICAgdGl0bGU6ICflhajpg6jliqDovb3lrozmr5UnLFxuICAgICAgICAgICAgLy8gICBpbWc6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20va2lpbmxhbS93ZXRvYXN0L21hc3Rlci9pbWFnZXMvc3Rhci5wbmcnXG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgLy8gcHJvbWlzZS50aGVuKChkKSA9PiB7XG4gICAgICAgICAgICAvLyAgIHRoaXMudGRhdGEuaXNGaW5pc2hlZCA9IHRydWUgLy8g6K6+572uZmxhZ++8jOS4jeWGjeinpuWPkeS4iuaLieinpuW6leS6i+S7tlxuICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICAgIGFyeS5wdXNoKHRoaXMudGRhdGEuYWxsTm9kZXNbaW5kZXhdKVxuICAgICAgICB9XG4gICAgICAgIGluZGV4ID0gbnVsbFxuICAgICAgICBhcnkgPSB0aGlzLm5vZGVzLmNvbmNhdChhcnkpIC8vIOacieWkmuWwkeWKoOWkmuWwkVxuICAgICAgICB0aGlzLm5vZGVzID0gYXJ5XG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9wcyA9IHtcbiAgICAgIGFwaVVybDogU3RyaW5nXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgdXRpbC5nZXRSZXF1ZXN0RGF0YSh7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LnYyZXguY29tL2FwaS9ub2Rlcy9hbGwuanNvbicsXG4gICAgICAgIGNiOiAoZCkgPT4ge1xuICAgICAgICAgIHRoaXMudGRhdGEuYWxsTm9kZXMgPSBkLmRhdGFcbiAgICAgICAgICBpZiAoZC5kYXRhIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIHZhciB0bXAgPSBkLmRhdGEuc2xpY2UoMCwgNTIpXG4gICAgICAgICAgICB0aGlzLm5vZGVzID0gdG1wXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19