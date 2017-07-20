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

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, NodeList);

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NodeList.__proto__ || Object.getPrototypeOf(NodeList)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      nodes: []
    }, _this.tdata = {
      allNodes: [],
      isFinished: false
    }, _this.events = {
      'getMoreNodes': function getMoreNodes() {
        // let $event = args[args.length - 1]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVMaXN0LmpzIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiTm9kZUxpc3QiLCJkYXRhIiwibm9kZXMiLCJ0ZGF0YSIsImFsbE5vZGVzIiwiaXNGaW5pc2hlZCIsImV2ZW50cyIsInByb3BzIiwiYXBpVXJsIiwiU3RyaW5nIiwibWV0aG9kcyIsImdldFJlcXVlc3REYXRhIiwidXJsIiwiY2IiLCJkIiwiQXJyYXkiLCJ0bXAiLCJzbGljZSIsIiRhcHBseSIsImNvbnNvbGUiLCJsb2ciLCJhbW91bnQiLCJsZW5ndGgiLCJhcnkiLCJpbmRleCIsImkiLCJsZW4iLCJwdXNoIiwiY29uY2F0Iiwic2V0RGF0YSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLE9BQU9DLFFBQVEsZUFBUixDQUFYOztJQUNxQkMsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxJLEdBQU87QUFDTEMsYUFBTztBQURGLEssUUFJUEMsSyxHQUFRO0FBQ05DLGdCQUFVLEVBREo7QUFFTkMsa0JBQVk7QUFGTixLLFFBS1JDLE0sR0FBUztBQUNQLHNCQUFnQix3QkFBYTtBQUMzQjtBQUNEO0FBSE0sSyxRQU1UQyxLLEdBQVE7QUFDTkMsY0FBUUM7QUFERixLLFFBSVJDLE8sR0FBVSxFOzs7Ozs2QkFHQTtBQUFBOztBQUNSWixXQUFLYSxjQUFMLENBQW9CO0FBQ2xCQyxhQUFLLHlDQURhO0FBRWxCQyxZQUFJLFlBQUNDLENBQUQsRUFBTztBQUNULGlCQUFLWCxLQUFMLENBQVdDLFFBQVgsR0FBc0JVLEVBQUViLElBQXhCO0FBQ0EsY0FBSWEsRUFBRWIsSUFBRixZQUFrQmMsS0FBdEIsRUFBNkI7QUFDM0IsZ0JBQUlDLE1BQU1GLEVBQUViLElBQUYsQ0FBT2dCLEtBQVAsQ0FBYSxDQUFiLEVBQWdCLEVBQWhCLENBQVY7QUFDQSxtQkFBS2YsS0FBTCxHQUFhYyxHQUFiO0FBQ0EsbUJBQUtFLE1BQUw7QUFDRDtBQUNGO0FBVGlCLE9BQXBCO0FBV0Q7OztvQ0FFZTtBQUNkQyxjQUFRQyxHQUFSLENBQVksbUJBQVo7QUFDQSxVQUFJLEtBQUtuQixJQUFMLENBQVVJLFVBQWQsRUFBMEI7QUFDMUIsVUFBTWdCLFNBQVMsS0FBS25CLEtBQUwsQ0FBV29CLE1BQTFCO0FBQ0EsVUFBSUMsTUFBTSxFQUFWO0FBQ0EsVUFBSUMsUUFBUSxDQUFaO0FBQ0EsV0FBSyxJQUFJQyxJQUFJLENBQVIsRUFBV0MsTUFBTSxLQUFLdkIsS0FBTCxDQUFXQyxRQUFYLENBQW9Ca0IsTUFBMUMsRUFBa0RHLElBQUksRUFBdEQsRUFBMERBLEdBQTFELEVBQStEO0FBQzdERCxnQkFBUUgsU0FBU0ksQ0FBakI7QUFDQSxZQUFJRCxTQUFTRSxHQUFiLEVBQWtCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFLdkIsS0FBTCxDQUFXRSxVQUFYLEdBQXdCLElBQXhCLENBTmdCLENBTWE7QUFDN0I7QUFDRDtBQUNEa0IsWUFBSUksSUFBSixDQUFTLEtBQUt4QixLQUFMLENBQVdDLFFBQVgsQ0FBb0JvQixLQUFwQixDQUFUO0FBQ0Q7QUFDREEsY0FBUSxJQUFSO0FBQ0FELFlBQU0sS0FBS3JCLEtBQUwsQ0FBVzBCLE1BQVgsQ0FBa0JMLEdBQWxCLENBQU4sQ0FwQmMsQ0FvQmU7QUFDN0IsV0FBS00sT0FBTCxDQUFhLEVBQUUzQixPQUFPcUIsR0FBVCxFQUFiO0FBQ0EsV0FBS3JCLEtBQUwsR0FBYXFCLEdBQWI7QUFDQSxXQUFLTCxNQUFMO0FBQ0Q7Ozs7RUE3RG1DLGVBQUtZLFM7O2tCQUF0QjlCLFEiLCJmaWxlIjoibm9kZUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgdmFyIHV0aWwgPSByZXF1aXJlKCcuLi9saWJzL3V0aWxzJylcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZUxpc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgZGF0YSA9IHtcbiAgICAgIG5vZGVzOiBbXVxuICAgIH1cblxuICAgIHRkYXRhID0ge1xuICAgICAgYWxsTm9kZXM6IFtdLFxuICAgICAgaXNGaW5pc2hlZDogZmFsc2VcbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgICAnZ2V0TW9yZU5vZGVzJzogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgLy8gbGV0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXVxuICAgICAgfVxuICAgIH1cblxuICAgIHByb3BzID0ge1xuICAgICAgYXBpVXJsOiBTdHJpbmdcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICB1dGlsLmdldFJlcXVlc3REYXRhKHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cudjJleC5jb20vYXBpL25vZGVzL2FsbC5qc29uJyxcbiAgICAgICAgY2I6IChkKSA9PiB7XG4gICAgICAgICAgdGhpcy50ZGF0YS5hbGxOb2RlcyA9IGQuZGF0YVxuICAgICAgICAgIGlmIChkLmRhdGEgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgdmFyIHRtcCA9IGQuZGF0YS5zbGljZSgwLCA1MilcbiAgICAgICAgICAgIHRoaXMubm9kZXMgPSB0bXBcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdvblJlYWNoQm90dG9tfn5+ficpXG4gICAgICBpZiAodGhpcy5kYXRhLmlzRmluaXNoZWQpIHJldHVyblxuICAgICAgY29uc3QgYW1vdW50ID0gdGhpcy5ub2Rlcy5sZW5ndGhcbiAgICAgIGxldCBhcnkgPSBbXVxuICAgICAgbGV0IGluZGV4ID0gMFxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMudGRhdGEuYWxsTm9kZXMubGVuZ3RoOyBpIDwgMjA7IGkrKykge1xuICAgICAgICBpbmRleCA9IGFtb3VudCArIGlcbiAgICAgICAgaWYgKGluZGV4ID49IGxlbikge1xuICAgICAgICAgIC8vIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgLy8gICB0aXRsZTogJ+W3sue7j+WKoOi9veWujOavlScsXG4gICAgICAgICAgLy8gICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgLy8gICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgdGhpcy50ZGF0YS5pc0ZpbmlzaGVkID0gdHJ1ZSAvLyDorr7nva5mbGFn77yM5LiN5YaN6Kem5Y+R5LiK5ouJ6Kem5bqV5LqL5Lu2XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBhcnkucHVzaCh0aGlzLnRkYXRhLmFsbE5vZGVzW2luZGV4XSlcbiAgICAgIH1cbiAgICAgIGluZGV4ID0gbnVsbFxuICAgICAgYXJ5ID0gdGhpcy5ub2Rlcy5jb25jYXQoYXJ5KSAvLyDmnInlpJrlsJHliqDlpJrlsJFcbiAgICAgIHRoaXMuc2V0RGF0YSh7IG5vZGVzOiBhcnkgfSlcbiAgICAgIHRoaXMubm9kZXMgPSBhcnlcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG4gIH1cbiJdfQ==