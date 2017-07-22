'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2, _initialiseProps;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// var util = require('./../libs/utils.js')
var NodeList = (_temp2 = _class = function (_wepy$component) {
  _inherits(NodeList, _wepy$component);

  function NodeList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NodeList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NodeList.__proto__ || Object.getPrototypeOf(NodeList)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NodeList, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return NodeList;
}(_wepy2.default.component), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.data = {
    nodes: []
  };
  this.components = {
    toast: _wepyComToast2.default
  };
  this.tdata = {
    isFinished: false
  };
  this.events = {
    'getMoreNodes': function getMoreNodes() {
      // let $event = args[args.length - 1]
      if (_this2.tdata.isFinished) return;
      var amount = _this2.nodes.length;
      var ary = [];
      var index = 0;
      var loadNum = arguments.length <= 0 ? undefined : arguments[0];
      for (var i = 0, len = _this2.allNodes.length; i < loadNum; i++) {
        index = amount + i;
        if (index >= len) {
          console.log('全部nodes加载完毕');
          _this2.$emit('noReach');
          break;
        }
        ary.push(_this2.allNodes[index]);
      }
      index = null;
      ary = _this2.nodes.concat(ary); // 有多少加多少
      _this2.nodes = ary;
      _this2.$apply();
    }
  };
  this.props = {
    allNodes: Array
  };
  this.methods = {
    testNav: function testNav() {
      console.dir(this.allNodes);
      console.dir(this.$parent.allNodes);
      this.nodes = this.allNodes;
    }
  };
  this.watch = {
    allNodes: function allNodes(newValue, oldValue) {
      // 因为父附件和子组件之间用了动态绑定属性，所以当父组件异步获取到了数据后子组件的props会发生改变
      // 此时就会被watcher监控到，则可以利用这点完成业务
      this.nodes = this.allNodes.slice(0, 100);
      this.$apply();
    }
  };
}, _temp2);
exports.default = NodeList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVMaXN0LmpzIl0sIm5hbWVzIjpbIk5vZGVMaXN0IiwiY29tcG9uZW50IiwiZGF0YSIsIm5vZGVzIiwiY29tcG9uZW50cyIsInRvYXN0IiwidGRhdGEiLCJpc0ZpbmlzaGVkIiwiZXZlbnRzIiwiYW1vdW50IiwibGVuZ3RoIiwiYXJ5IiwiaW5kZXgiLCJsb2FkTnVtIiwiaSIsImxlbiIsImFsbE5vZGVzIiwiY29uc29sZSIsImxvZyIsIiRlbWl0IiwicHVzaCIsImNvbmNhdCIsIiRhcHBseSIsInByb3BzIiwiQXJyYXkiLCJtZXRob2RzIiwidGVzdE5hdiIsImRpciIsIiRwYXJlbnQiLCJ3YXRjaCIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQTtJQUNxQkEsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkEwRFQsQ0FDVDs7OztFQTNEbUMsZUFBS0MsUzs7O09BQ3pDQyxJLEdBQU87QUFDTEMsV0FBTztBQURGLEc7T0FJUEMsVSxHQUFhO0FBQ1hDO0FBRFcsRztPQUliQyxLLEdBQVE7QUFDTkMsZ0JBQVk7QUFETixHO09BSVJDLE0sR0FBUztBQUNQLG9CQUFnQix3QkFBYTtBQUMzQjtBQUNBLFVBQUksT0FBS0YsS0FBTCxDQUFXQyxVQUFmLEVBQTJCO0FBQzNCLFVBQU1FLFNBQVMsT0FBS04sS0FBTCxDQUFXTyxNQUExQjtBQUNBLFVBQUlDLE1BQU0sRUFBVjtBQUNBLFVBQUlDLFFBQVEsQ0FBWjtBQUNBLFVBQUlDLDBEQUFKO0FBQ0EsV0FBSyxJQUFJQyxJQUFJLENBQVIsRUFBV0MsTUFBTSxPQUFLQyxRQUFMLENBQWNOLE1BQXBDLEVBQTRDSSxJQUFJRCxPQUFoRCxFQUF5REMsR0FBekQsRUFBOEQ7QUFDNURGLGdCQUFRSCxTQUFTSyxDQUFqQjtBQUNBLFlBQUlGLFNBQVNHLEdBQWIsRUFBa0I7QUFDaEJFLGtCQUFRQyxHQUFSLENBQVksYUFBWjtBQUNBLGlCQUFLQyxLQUFMLENBQVcsU0FBWDtBQUNBO0FBQ0Q7QUFDRFIsWUFBSVMsSUFBSixDQUFTLE9BQUtKLFFBQUwsQ0FBY0osS0FBZCxDQUFUO0FBQ0Q7QUFDREEsY0FBUSxJQUFSO0FBQ0FELFlBQU0sT0FBS1IsS0FBTCxDQUFXa0IsTUFBWCxDQUFrQlYsR0FBbEIsQ0FBTixDQWpCMkIsQ0FpQkU7QUFDN0IsYUFBS1IsS0FBTCxHQUFhUSxHQUFiO0FBQ0EsYUFBS1csTUFBTDtBQUNEO0FBckJNLEc7T0F3QlRDLEssR0FBUTtBQUNOUCxjQUFVUTtBQURKLEc7T0FJUkMsTyxHQUFVO0FBQ1JDLFdBRFEscUJBQ0U7QUFDUlQsY0FBUVUsR0FBUixDQUFZLEtBQUtYLFFBQWpCO0FBQ0FDLGNBQVFVLEdBQVIsQ0FBWSxLQUFLQyxPQUFMLENBQWFaLFFBQXpCO0FBQ0EsV0FBS2IsS0FBTCxHQUFhLEtBQUthLFFBQWxCO0FBQ0Q7QUFMTyxHO09BUVZhLEssR0FBUTtBQUNOYixZQURNLG9CQUNJYyxRQURKLEVBQ2NDLFFBRGQsRUFDd0I7QUFDNUI7QUFDQTtBQUNBLFdBQUs1QixLQUFMLEdBQWEsS0FBS2EsUUFBTCxDQUFjZ0IsS0FBZCxDQUFvQixDQUFwQixFQUF1QixHQUF2QixDQUFiO0FBQ0EsV0FBS1YsTUFBTDtBQUNEO0FBTkssRzs7a0JBakRXdEIsUSIsImZpbGUiOiJub2RlTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnXG4gIC8vIHZhciB1dGlsID0gcmVxdWlyZSgnLi4vbGlicy91dGlscycpXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGVMaXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIGRhdGEgPSB7XG4gICAgICBub2RlczogW11cbiAgICB9XG5cbiAgICBjb21wb25lbnRzID0ge1xuICAgICAgdG9hc3Q6IFRvYXN0XG4gICAgfVxuXG4gICAgdGRhdGEgPSB7XG4gICAgICBpc0ZpbmlzaGVkOiBmYWxzZVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICAgICdnZXRNb3JlTm9kZXMnOiAoLi4uYXJncykgPT4ge1xuICAgICAgICAvLyBsZXQgJGV2ZW50ID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdXG4gICAgICAgIGlmICh0aGlzLnRkYXRhLmlzRmluaXNoZWQpIHJldHVyblxuICAgICAgICBjb25zdCBhbW91bnQgPSB0aGlzLm5vZGVzLmxlbmd0aFxuICAgICAgICBsZXQgYXJ5ID0gW11cbiAgICAgICAgbGV0IGluZGV4ID0gMFxuICAgICAgICBsZXQgbG9hZE51bSA9IGFyZ3NbMF1cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMuYWxsTm9kZXMubGVuZ3RoOyBpIDwgbG9hZE51bTsgaSsrKSB7XG4gICAgICAgICAgaW5kZXggPSBhbW91bnQgKyBpXG4gICAgICAgICAgaWYgKGluZGV4ID49IGxlbikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ+WFqOmDqG5vZGVz5Yqg6L295a6M5q+VJylcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ25vUmVhY2gnKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgICAgYXJ5LnB1c2godGhpcy5hbGxOb2Rlc1tpbmRleF0pXG4gICAgICAgIH1cbiAgICAgICAgaW5kZXggPSBudWxsXG4gICAgICAgIGFyeSA9IHRoaXMubm9kZXMuY29uY2F0KGFyeSkgLy8g5pyJ5aSa5bCR5Yqg5aSa5bCRXG4gICAgICAgIHRoaXMubm9kZXMgPSBhcnlcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfVxuICAgIH1cblxuICAgIHByb3BzID0ge1xuICAgICAgYWxsTm9kZXM6IEFycmF5XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHRlc3ROYXYoKSB7XG4gICAgICAgIGNvbnNvbGUuZGlyKHRoaXMuYWxsTm9kZXMpXG4gICAgICAgIGNvbnNvbGUuZGlyKHRoaXMuJHBhcmVudC5hbGxOb2RlcylcbiAgICAgICAgdGhpcy5ub2RlcyA9IHRoaXMuYWxsTm9kZXNcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3YXRjaCA9IHtcbiAgICAgIGFsbE5vZGVzIChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgLy8g5Zug5Li654i26ZmE5Lu25ZKM5a2Q57uE5Lu25LmL6Ze055So5LqG5Yqo5oCB57uR5a6a5bGe5oCn77yM5omA5Lul5b2T54i257uE5Lu25byC5q2l6I635Y+W5Yiw5LqG5pWw5o2u5ZCO5a2Q57uE5Lu255qEcHJvcHPkvJrlj5HnlJ/mlLnlj5hcbiAgICAgICAgLy8g5q2k5pe25bCx5Lya6KKrd2F0Y2hlcuebkeaOp+WIsO+8jOWImeWPr+S7peWIqeeUqOi/meeCueWujOaIkOS4muWKoVxuICAgICAgICB0aGlzLm5vZGVzID0gdGhpcy5hbGxOb2Rlcy5zbGljZSgwLCAxMDApXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQgKCkge1xuICAgIH1cbiAgfVxuIl19