'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _nodeList = require('./../components/nodeList.js');

var _nodeList2 = _interopRequireDefault(_nodeList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, Index);

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'test'
    }, _this.components = {
      toast: _wepyComToast2.default,
      nodeList: _nodeList2.default
    }, _this.data = {}, _this.tdata = {
      noReach: false
    }, _this.methods = {
      toast: function toast(e) {
        console.dir(_wepy2.default);
        _wepy2.default.switchTab({
          url: '/pages/index'
        });
      }
    }, _this.events = {
      'noReach': function noReach() {
        _this.tdata.noReach = true;
        var promise = _this.$invoke('toast', 'show', {
          title: '全部加载完毕',
          img: 'https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png'
        });
        promise.then(function (d) {
          _this.tdata.isFinished = true; // 设置flag，不再触发上拉触底事件
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      if (!this.tdata.noReach) {
        console.log('onReachBottom~!!!');
        this.$broadcast('getMoreNodes', 100);
      }
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/node'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsInRvYXN0Iiwibm9kZUxpc3QiLCJkYXRhIiwidGRhdGEiLCJub1JlYWNoIiwibWV0aG9kcyIsImUiLCJjb25zb2xlIiwiZGlyIiwic3dpdGNoVGFiIiwidXJsIiwiZXZlbnRzIiwicHJvbWlzZSIsIiRpbnZva2UiLCJ0aXRsZSIsImltZyIsInRoZW4iLCJkIiwiaXNGaW5pc2hlZCIsImxvZyIsIiRicm9hZGNhc3QiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhO0FBQ1hDLG1DQURXO0FBRVhDO0FBRlcsSyxRQUtiQyxJLEdBQU8sRSxRQUdQQyxLLEdBQVE7QUFDTkMsZUFBUztBQURILEssUUFJUkMsTyxHQUFVO0FBQ1JMLFdBRFEsaUJBQ0RNLENBREMsRUFDRTtBQUNSQyxnQkFBUUMsR0FBUjtBQUNBLHVCQUFLQyxTQUFMLENBQWU7QUFDYkMsZUFBSztBQURRLFNBQWY7QUFHRDtBQU5PLEssUUFTVkMsTSxHQUFTO0FBQ1AsaUJBQVcsbUJBQWE7QUFDdEIsY0FBS1IsS0FBTCxDQUFXQyxPQUFYLEdBQXFCLElBQXJCO0FBQ0EsWUFBSVEsVUFBVSxNQUFLQyxPQUFMLENBQWEsT0FBYixFQUFzQixNQUF0QixFQUE4QjtBQUMxQ0MsaUJBQU8sUUFEbUM7QUFFMUNDLGVBQUs7QUFGcUMsU0FBOUIsQ0FBZDtBQUlBSCxnQkFBUUksSUFBUixDQUFhLFVBQUNDLENBQUQsRUFBTztBQUNsQixnQkFBS2QsS0FBTCxDQUFXZSxVQUFYLEdBQXdCLElBQXhCLENBRGtCLENBQ1c7QUFDOUIsU0FGRDtBQUdEO0FBVk0sSzs7Ozs7NkJBYUEsQ0FDUjs7O29DQUVlO0FBQ2QsVUFBSSxDQUFDLEtBQUtmLEtBQUwsQ0FBV0MsT0FBaEIsRUFBeUI7QUFDdkJHLGdCQUFRWSxHQUFSLENBQVksbUJBQVo7QUFDQSxhQUFLQyxVQUFMLENBQWdCLGNBQWhCLEVBQWdDLEdBQWhDO0FBQ0Q7QUFDRjs7OztFQTlDZ0MsZUFBS0MsSTs7a0JBQW5CekIsSyIsImZpbGUiOiJub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBUb2FzdCBmcm9tICd3ZXB5LWNvbS10b2FzdCdcbiAgaW1wb3J0IE5vZGVMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbm9kZUxpc3QnXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAndGVzdCdcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICAgIHRvYXN0OiBUb2FzdCxcbiAgICAgIG5vZGVMaXN0OiBOb2RlTGlzdFxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgfVxuXG4gICAgdGRhdGEgPSB7XG4gICAgICBub1JlYWNoOiBmYWxzZVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0b2FzdCAoZSkge1xuICAgICAgICBjb25zb2xlLmRpcih3ZXB5KVxuICAgICAgICB3ZXB5LnN3aXRjaFRhYih7XG4gICAgICAgICAgdXJsOiAnL3BhZ2VzL2luZGV4J1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICAgICdub1JlYWNoJzogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgdGhpcy50ZGF0YS5ub1JlYWNoID0gdHJ1ZVxuICAgICAgICBsZXQgcHJvbWlzZSA9IHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvdycsIHtcbiAgICAgICAgICB0aXRsZTogJ+WFqOmDqOWKoOi9veWujOavlScsXG4gICAgICAgICAgaW1nOiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2tpaW5sYW0vd2V0b2FzdC9tYXN0ZXIvaW1hZ2VzL3N0YXIucG5nJ1xuICAgICAgICB9KVxuICAgICAgICBwcm9taXNlLnRoZW4oKGQpID0+IHtcbiAgICAgICAgICB0aGlzLnRkYXRhLmlzRmluaXNoZWQgPSB0cnVlIC8vIOiuvue9rmZsYWfvvIzkuI3lho3op6blj5HkuIrmi4nop6blupXkuovku7ZcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuXG4gICAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICAgIGlmICghdGhpcy50ZGF0YS5ub1JlYWNoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvblJlYWNoQm90dG9tfiEhIScpXG4gICAgICAgIHRoaXMuJGJyb2FkY2FzdCgnZ2V0TW9yZU5vZGVzJywgMTAwKVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19