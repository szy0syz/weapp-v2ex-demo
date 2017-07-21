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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.data = {
      title: 'szytitle',
      tid: -1
    }, _this.watch = {
      id: function id(newValue, oldValue) {
        console.log('tid value: ' + oldValue + ' -> ' + newValue);
      }
    }, _this.methods = {
      toast: function toast(e) {
        console.dir(_wepy2.default);
        _wepy2.default.switchTab({
          url: '/pages/index'
        });
      }
    }, _this.events = {}, _this.$props = { "topicDetail": { "xmlns:v-bind": "", "v-bind:tid.sync": "tid", "v-bind:title.once": "title" } }, _this.$events = {}, _this.components = {
      topicDetail: _topicDetail2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      console.log('detail page onLoad | options.id' + options.id);
      this.tid = options.id;
      console.log('页面上的this.id：' + this.tid);
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsImRhdGEiLCJ0aXRsZSIsInRpZCIsIndhdGNoIiwiaWQiLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZHMiLCJ0b2FzdCIsImUiLCJkaXIiLCJzd2l0Y2hUYWIiLCJ1cmwiLCJldmVudHMiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInRvcGljRGV0YWlsIiwib3B0aW9ucyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVMsRSxRQUdUQyxJLEdBQU87QUFDTEMsYUFBTyxVQURGO0FBRUxDLFdBQUssQ0FBQztBQUZELEssUUFLUEMsSyxHQUFRO0FBQ05DLFFBRE0sY0FDRkMsUUFERSxFQUNRQyxRQURSLEVBQ2tCO0FBQ3RCQyxnQkFBUUMsR0FBUixpQkFBMEJGLFFBQTFCLFlBQXlDRCxRQUF6QztBQUNEO0FBSEssSyxRQU1SSSxPLEdBQVU7QUFDUkMsV0FEUSxpQkFDREMsQ0FEQyxFQUNFO0FBQ1JKLGdCQUFRSyxHQUFSO0FBQ0EsdUJBQUtDLFNBQUwsQ0FBZTtBQUNiQyxlQUFLO0FBRFEsU0FBZjtBQUdEO0FBTk8sSyxRQVNWQyxNLEdBQVMsRSxRQVNWQyxNLEdBQVMsRUFBQyxlQUFjLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsbUJBQWtCLEtBQXJDLEVBQTJDLHFCQUFvQixPQUEvRCxFQUFmLEUsUUFDWkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSzs7Ozs7MkJBUkhDLE8sRUFBUztBQUNkYixjQUFRQyxHQUFSLENBQVksb0NBQW9DWSxRQUFRaEIsRUFBeEQ7QUFDQSxXQUFLRixHQUFMLEdBQVdrQixRQUFRaEIsRUFBbkI7QUFDQUcsY0FBUUMsR0FBUixDQUFZLGlCQUFpQixLQUFLTixHQUFsQztBQUNEOzs7O0VBL0JnQyxlQUFLbUIsSTs7a0JBQW5CdkIsSyIsImZpbGUiOiJkZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IFRvcGljRGV0YWlsIGZyb20gJy4uL2NvbXBvbmVudHMvdG9waWNEZXRhaWwnXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHRpdGxlOiAnc3p5dGl0bGUnLFxuICAgICAgdGlkOiAtMVxuICAgIH1cblxuICAgIHdhdGNoID0ge1xuICAgICAgaWQgKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgdGlkIHZhbHVlOiAke29sZFZhbHVlfSAtPiAke25ld1ZhbHVlfWApXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHRvYXN0IChlKSB7XG4gICAgICAgIGNvbnNvbGUuZGlyKHdlcHkpXG4gICAgICAgIHdlcHkuc3dpdGNoVGFiKHtcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvaW5kZXgnXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICBjb25zb2xlLmxvZygnZGV0YWlsIHBhZ2Ugb25Mb2FkIHwgb3B0aW9ucy5pZCcgKyBvcHRpb25zLmlkKVxuICAgICAgdGhpcy50aWQgPSBvcHRpb25zLmlkXG4gICAgICBjb25zb2xlLmxvZygn6aG16Z2i5LiK55qEdGhpcy5pZO+8micgKyB0aGlzLnRpZClcbiAgICB9XG5cbiAgICRwcm9wcyA9IHtcInRvcGljRGV0YWlsXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aWQuc3luY1wiOlwidGlkXCIsXCJ2LWJpbmQ6dGl0bGUub25jZVwiOlwidGl0bGVcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgdG9waWNEZXRhaWw6IFRvcGljRGV0YWlsXG4gICAgfVxuICB9XG4iXX0=