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

var util = require('./../libs/utils.js');
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
}(_wepy2.default.component), _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.data = {
    nodes: []
  };
  this.components = {
    toast: _wepyComToast2.default
  };
  this.tdata = {
    allNodes: [],
    isFinished: false
  };
  this.events = {
    'getMoreNodes': function getMoreNodes() {
      // let $event = args[args.length - 1]
      if (_this3.tdata.isFinished) return;
      var amount = _this3.nodes.length;
      var ary = [];
      var index = 0;
      var loadNum = arguments.length <= 0 ? undefined : arguments[0];
      for (var i = 0, len = _this3.tdata.allNodes.length; i < loadNum; i++) {
        index = amount + i;
        if (index >= len) {
          console.log('全部nodes加载完毕');
          _this3.$emit('noReach');
          break;
        }
        ary.push(_this3.tdata.allNodes[index]);
      }
      index = null;
      ary = _this3.nodes.concat(ary); // 有多少加多少
      _this3.nodes = ary;
      _this3.$apply();
    }
  };
  this.props = {
    apiUrl: String
  };
  this.methods = {};
}, _temp2);
exports.default = NodeList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVMaXN0LmpzIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiTm9kZUxpc3QiLCJnZXRSZXF1ZXN0RGF0YSIsInVybCIsImNiIiwiZCIsInRkYXRhIiwiYWxsTm9kZXMiLCJkYXRhIiwiQXJyYXkiLCJ0bXAiLCJzbGljZSIsIm5vZGVzIiwiJGFwcGx5IiwiY29tcG9uZW50IiwiY29tcG9uZW50cyIsInRvYXN0IiwiaXNGaW5pc2hlZCIsImV2ZW50cyIsImFtb3VudCIsImxlbmd0aCIsImFyeSIsImluZGV4IiwibG9hZE51bSIsImkiLCJsZW4iLCJjb25zb2xlIiwibG9nIiwiJGVtaXQiLCJwdXNoIiwiY29uY2F0IiwicHJvcHMiLCJhcGlVcmwiLCJTdHJpbmciLCJtZXRob2RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLE9BQU9DLFFBQVEsZUFBUixDQUFYO0lBQ3FCQyxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQTZDVDtBQUFBOztBQUNSRixXQUFLRyxjQUFMLENBQW9CO0FBQ2xCQyxhQUFLLHlDQURhO0FBRWxCQyxZQUFJLFlBQUNDLENBQUQsRUFBTztBQUNULGlCQUFLQyxLQUFMLENBQVdDLFFBQVgsR0FBc0JGLEVBQUVHLElBQXhCO0FBQ0EsY0FBSUgsRUFBRUcsSUFBRixZQUFrQkMsS0FBdEIsRUFBNkI7QUFDM0IsZ0JBQUlDLE1BQU1MLEVBQUVHLElBQUYsQ0FBT0csS0FBUCxDQUFhLENBQWIsRUFBZ0IsRUFBaEIsQ0FBVjtBQUNBLG1CQUFLQyxLQUFMLEdBQWFGLEdBQWI7QUFDQSxtQkFBS0csTUFBTDtBQUNEO0FBQ0Y7QUFUaUIsT0FBcEI7QUFXRDs7OztFQXpEbUMsZUFBS0MsUzs7O09BQ3pDTixJLEdBQU87QUFDTEksV0FBTztBQURGLEc7T0FJUEcsVSxHQUFhO0FBQ1hDO0FBRFcsRztPQUliVixLLEdBQVE7QUFDTkMsY0FBVSxFQURKO0FBRU5VLGdCQUFZO0FBRk4sRztPQUtSQyxNLEdBQVM7QUFDUCxvQkFBZ0Isd0JBQWE7QUFDM0I7QUFDQSxVQUFJLE9BQUtaLEtBQUwsQ0FBV1csVUFBZixFQUEyQjtBQUMzQixVQUFNRSxTQUFTLE9BQUtQLEtBQUwsQ0FBV1EsTUFBMUI7QUFDQSxVQUFJQyxNQUFNLEVBQVY7QUFDQSxVQUFJQyxRQUFRLENBQVo7QUFDQSxVQUFJQywwREFBSjtBQUNBLFdBQUssSUFBSUMsSUFBSSxDQUFSLEVBQVdDLE1BQU0sT0FBS25CLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQmEsTUFBMUMsRUFBa0RJLElBQUlELE9BQXRELEVBQStEQyxHQUEvRCxFQUFvRTtBQUNsRUYsZ0JBQVFILFNBQVNLLENBQWpCO0FBQ0EsWUFBSUYsU0FBU0csR0FBYixFQUFrQjtBQUNoQkMsa0JBQVFDLEdBQVIsQ0FBWSxhQUFaO0FBQ0EsaUJBQUtDLEtBQUwsQ0FBVyxTQUFYO0FBQ0E7QUFDRDtBQUNEUCxZQUFJUSxJQUFKLENBQVMsT0FBS3ZCLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQmUsS0FBcEIsQ0FBVDtBQUNEO0FBQ0RBLGNBQVEsSUFBUjtBQUNBRCxZQUFNLE9BQUtULEtBQUwsQ0FBV2tCLE1BQVgsQ0FBa0JULEdBQWxCLENBQU4sQ0FqQjJCLENBaUJFO0FBQzdCLGFBQUtULEtBQUwsR0FBYVMsR0FBYjtBQUNBLGFBQUtSLE1BQUw7QUFDRDtBQXJCTSxHO09Bd0JUa0IsSyxHQUFRO0FBQ05DLFlBQVFDO0FBREYsRztPQUlSQyxPLEdBQVUsRTs7a0JBMUNTakMsUSIsImZpbGUiOiJub2RlTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnXG4gIHZhciB1dGlsID0gcmVxdWlyZSgnLi4vbGlicy91dGlscycpXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGVMaXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIGRhdGEgPSB7XG4gICAgICBub2RlczogW11cbiAgICB9XG5cbiAgICBjb21wb25lbnRzID0ge1xuICAgICAgdG9hc3Q6IFRvYXN0XG4gICAgfVxuXG4gICAgdGRhdGEgPSB7XG4gICAgICBhbGxOb2RlczogW10sXG4gICAgICBpc0ZpbmlzaGVkOiBmYWxzZVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICAgICdnZXRNb3JlTm9kZXMnOiAoLi4uYXJncykgPT4ge1xuICAgICAgICAvLyBsZXQgJGV2ZW50ID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdXG4gICAgICAgIGlmICh0aGlzLnRkYXRhLmlzRmluaXNoZWQpIHJldHVyblxuICAgICAgICBjb25zdCBhbW91bnQgPSB0aGlzLm5vZGVzLmxlbmd0aFxuICAgICAgICBsZXQgYXJ5ID0gW11cbiAgICAgICAgbGV0IGluZGV4ID0gMFxuICAgICAgICBsZXQgbG9hZE51bSA9IGFyZ3NbMF1cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMudGRhdGEuYWxsTm9kZXMubGVuZ3RoOyBpIDwgbG9hZE51bTsgaSsrKSB7XG4gICAgICAgICAgaW5kZXggPSBhbW91bnQgKyBpXG4gICAgICAgICAgaWYgKGluZGV4ID49IGxlbikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ+WFqOmDqG5vZGVz5Yqg6L295a6M5q+VJylcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ25vUmVhY2gnKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgICAgYXJ5LnB1c2godGhpcy50ZGF0YS5hbGxOb2Rlc1tpbmRleF0pXG4gICAgICAgIH1cbiAgICAgICAgaW5kZXggPSBudWxsXG4gICAgICAgIGFyeSA9IHRoaXMubm9kZXMuY29uY2F0KGFyeSkgLy8g5pyJ5aSa5bCR5Yqg5aSa5bCRXG4gICAgICAgIHRoaXMubm9kZXMgPSBhcnlcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfVxuICAgIH1cblxuICAgIHByb3BzID0ge1xuICAgICAgYXBpVXJsOiBTdHJpbmdcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICB1dGlsLmdldFJlcXVlc3REYXRhKHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cudjJleC5jb20vYXBpL25vZGVzL2FsbC5qc29uJyxcbiAgICAgICAgY2I6IChkKSA9PiB7XG4gICAgICAgICAgdGhpcy50ZGF0YS5hbGxOb2RlcyA9IGQuZGF0YVxuICAgICAgICAgIGlmIChkLmRhdGEgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgdmFyIHRtcCA9IGQuZGF0YS5zbGljZSgwLCA1MilcbiAgICAgICAgICAgIHRoaXMubm9kZXMgPSB0bXBcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=