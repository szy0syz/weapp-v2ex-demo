'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _topicDetail = require('./../components/topicDetail.js');

var _topicDetail2 = _interopRequireDefault(_topicDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.$props = { "topicDetail": { "xmlns:v-bind": "", "v-bind:topicid.once": "topicid", "v-bind:title.once": "title" } }, _this.$events = {}, _this.components = {
      topicDetail: _topicDetail2.default
    }, _this.data = {
      title: 'szytitle',
      topicid: -1
    }, _this.methods = {
      toast: function toast(e) {
        console.dir(_wepy2.default);
        _wepy2.default.switchTab({
          url: '/pages/index'
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onShow',
    value: function onShow() {
      console.log('detail page onShow');
    }
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      console.log('detail page onLoad');
      this.topicid = options.id;
      console.log('页面上的this.topicid：' + this.topicid);
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwidG9waWNEZXRhaWwiLCJkYXRhIiwidGl0bGUiLCJ0b3BpY2lkIiwibWV0aG9kcyIsInRvYXN0IiwiZSIsImNvbnNvbGUiLCJkaXIiLCJzd2l0Y2hUYWIiLCJ1cmwiLCJldmVudHMiLCJsb2ciLCJvcHRpb25zIiwiaWQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTLEUsUUFFVkMsTSxHQUFTLEVBQUMsZUFBYyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHVCQUFzQixTQUF6QyxFQUFtRCxxQkFBb0IsT0FBdkUsRUFBZixFLFFBQ1pDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUFJVkMsSSxHQUFPO0FBQ0xDLGFBQU8sVUFERjtBQUVMQyxlQUFTLENBQUM7QUFGTCxLLFFBS1BDLE8sR0FBVTtBQUNSQyxXQURRLGlCQUNEQyxDQURDLEVBQ0U7QUFDUkMsZ0JBQVFDLEdBQVI7QUFDQSx1QkFBS0MsU0FBTCxDQUFlO0FBQ2JDLGVBQUs7QUFEUSxTQUFmO0FBR0Q7QUFOTyxLLFFBU1ZDLE0sR0FBUyxFOzs7Ozs2QkFHQTtBQUNQSixjQUFRSyxHQUFSLENBQVksb0JBQVo7QUFDRDs7OzJCQUVNQyxPLEVBQVM7QUFDZE4sY0FBUUssR0FBUixDQUFZLG9CQUFaO0FBQ0EsV0FBS1QsT0FBTCxHQUFlVSxRQUFRQyxFQUF2QjtBQUNBUCxjQUFRSyxHQUFSLENBQVksc0JBQXNCLEtBQUtULE9BQXZDO0FBQ0Q7Ozs7RUFsQ2dDLGVBQUtZLEk7O2tCQUFuQnBCLEsiLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBUb3BpY0RldGFpbCBmcm9tICcuLi9jb21wb25lbnRzL3RvcGljRGV0YWlsJ1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgIH1cbiAgICRwcm9wcyA9IHtcInRvcGljRGV0YWlsXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0b3BpY2lkLm9uY2VcIjpcInRvcGljaWRcIixcInYtYmluZDp0aXRsZS5vbmNlXCI6XCJ0aXRsZVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICB0b3BpY0RldGFpbDogVG9waWNEZXRhaWxcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgdGl0bGU6ICdzenl0aXRsZScsXG4gICAgICB0b3BpY2lkOiAtMVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0b2FzdCAoZSkge1xuICAgICAgICBjb25zb2xlLmRpcih3ZXB5KVxuICAgICAgICB3ZXB5LnN3aXRjaFRhYih7XG4gICAgICAgICAgdXJsOiAnL3BhZ2VzL2luZGV4J1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvblNob3coKSB7XG4gICAgICBjb25zb2xlLmxvZygnZGV0YWlsIHBhZ2Ugb25TaG93JylcbiAgICB9XG5cbiAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgY29uc29sZS5sb2coJ2RldGFpbCBwYWdlIG9uTG9hZCcpXG4gICAgICB0aGlzLnRvcGljaWQgPSBvcHRpb25zLmlkXG4gICAgICBjb25zb2xlLmxvZygn6aG16Z2i5LiK55qEdGhpcy50b3BpY2lk77yaJyArIHRoaXMudG9waWNpZClcbiAgICB9XG4gIH1cbiJdfQ==