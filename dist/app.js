'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    // 中间件：修复小程序请求并发问题
    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/hot', 'pages/latest', 'pages/node', 'pages/detail'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      },
      tabBar: {
        'list': [{
          'pagePath': 'pages/hot',
          'text': '最热主题'
        }, {
          'pagePath': 'pages/latest',
          'text': '主题列表'
        }, {
          'pagePath': 'pages/node',
          'text': '所有节点'
        }]
      }
    };
    _this.globalData = {
      userInfo: null
    };
    _this.use('requestfix');
    // 中间件：使用wepy.xxx(request)的方式请求小程序原生API都将Promise化
    _this.use('promisify');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {}
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFzQ0Usc0JBQWU7QUFBQTs7QUFFYjtBQUZhOztBQUFBLFVBbkNmQSxNQW1DZSxHQW5DTjtBQUNQQyxhQUFPLENBQ0wsV0FESyxFQUVMLGNBRkssRUFHTCxZQUhLLEVBSUwsY0FKSyxDQURBO0FBT1BDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLE1BRnhCO0FBR05DLGdDQUF3QixRQUhsQjtBQUlOQyxnQ0FBd0I7QUFKbEIsT0FQRDtBQWFQQyxjQUFRO0FBQ04sZ0JBQVEsQ0FDTjtBQUNFLHNCQUFZLFdBRGQ7QUFFRSxrQkFBUTtBQUZWLFNBRE0sRUFLTjtBQUNFLHNCQUFZLGNBRGQ7QUFFRSxrQkFBUTtBQUZWLFNBTE0sRUFTTjtBQUNFLHNCQUFZLFlBRGQ7QUFFRSxrQkFBUTtBQUZWLFNBVE07QUFERjtBQWJELEtBbUNNO0FBQUEsVUFKZkMsVUFJZSxHQUpGO0FBQ1hDLGdCQUFVO0FBREMsS0FJRTtBQUdiLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBQ0E7QUFDQSxVQUFLQSxHQUFMLENBQVMsV0FBVDtBQUxhO0FBTWQ7Ozs7K0JBRVUsQ0FDVjs7OztFQTdDMEIsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25maWcgPSB7XG4gICAgcGFnZXM6IFtcbiAgICAgICdwYWdlcy9ob3QnLFxuICAgICAgJ3BhZ2VzL2xhdGVzdCcsXG4gICAgICAncGFnZXMvbm9kZScsXG4gICAgICAncGFnZXMvZGV0YWlsJ1xuICAgIF0sXG4gICAgd2luZG93OiB7XG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlQ2hhdCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXG4gICAgfSxcbiAgICB0YWJCYXI6IHtcbiAgICAgICdsaXN0JzogW1xuICAgICAgICB7XG4gICAgICAgICAgJ3BhZ2VQYXRoJzogJ3BhZ2VzL2hvdCcsXG4gICAgICAgICAgJ3RleHQnOiAn5pyA54Ot5Li76aKYJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ3BhZ2VQYXRoJzogJ3BhZ2VzL2xhdGVzdCcsXG4gICAgICAgICAgJ3RleHQnOiAn5Li76aKY5YiX6KGoJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ3BhZ2VQYXRoJzogJ3BhZ2VzL25vZGUnLFxuICAgICAgICAgICd0ZXh0JzogJ+aJgOacieiKgueCuSdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfVxuXG4gIGdsb2JhbERhdGEgPSB7XG4gICAgdXNlckluZm86IG51bGxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpXG4gICAgLy8g5Lit6Ze05Lu277ya5L+u5aSN5bCP56iL5bqP6K+35rGC5bm25Y+R6Zeu6aKYXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxuICAgIC8vIOS4remXtOS7tu+8muS9v+eUqHdlcHkueHh4KHJlcXVlc3Qp55qE5pa55byP6K+35rGC5bCP56iL5bqP5Y6f55SfQVBJ6YO95bCGUHJvbWlzZeWMllxuICAgIHRoaXMudXNlKCdwcm9taXNpZnknKVxuICB9XG5cbiAgb25MYXVuY2goKSB7XG4gIH1cbn1cbiJdfQ==