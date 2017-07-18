'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'test'
    }, _this.components = {
      toast: _wepyComToast2.default
    }, _this.data = {
      mynum: 20
    }, _this.methods = {
      toast: function toast() {
        var promise = this.$invoke('toast', 'show', {
          title: '自定义标题',
          img: 'https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png'
        });
        promise.then(function (d) {
          console.dir(d);
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/node'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsInRvYXN0IiwiZGF0YSIsIm15bnVtIiwibWV0aG9kcyIsInByb21pc2UiLCIkaW52b2tlIiwidGl0bGUiLCJpbWciLCJ0aGVuIiwiZCIsImNvbnNvbGUiLCJkaXIiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYTtBQUNYQztBQURXLEssUUFJYkMsSSxHQUFPO0FBQ0xDLGFBQU87QUFERixLLFFBSVBDLE8sR0FBVTtBQUNSSCxXQURRLG1CQUNDO0FBQ1AsWUFBSUksVUFBVSxLQUFLQyxPQUFMLENBQWEsT0FBYixFQUFzQixNQUF0QixFQUE4QjtBQUMxQ0MsaUJBQU8sT0FEbUM7QUFFMUNDLGVBQUs7QUFGcUMsU0FBOUIsQ0FBZDtBQUlBSCxnQkFBUUksSUFBUixDQUFhLFVBQUNDLENBQUQsRUFBTztBQUNsQkMsa0JBQVFDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNELFNBRkQ7QUFHRDtBQVRPLEssUUFZVkcsTSxHQUFTLEU7Ozs7OzZCQUdBLENBQ1I7Ozs7RUE1QmdDLGVBQUtDLEk7O2tCQUFuQmpCLEsiLCJmaWxlIjoibm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICd0ZXN0J1xuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuICAgICAgdG9hc3Q6IFRvYXN0XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIG15bnVtOiAyMFxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0b2FzdCAoKSB7XG4gICAgICAgIGxldCBwcm9taXNlID0gdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93Jywge1xuICAgICAgICAgIHRpdGxlOiAn6Ieq5a6a5LmJ5qCH6aKYJyxcbiAgICAgICAgICBpbWc6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20va2lpbmxhbS93ZXRvYXN0L21hc3Rlci9pbWFnZXMvc3Rhci5wbmcnXG4gICAgICAgIH0pXG4gICAgICAgIHByb21pc2UudGhlbigoZCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZGlyKGQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==