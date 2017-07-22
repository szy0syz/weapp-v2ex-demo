'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
      pages: ['pages/index', 'pages/hot', 'pages/latest', 'pages/node', 'pages/detail'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      },
      tabBar: {
        'list': [{
          'pagePath': 'pages/index',
          'text': '测试主页'
        }, {
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
      userInfo: null,
      defaultUname: 'szy0syz',
      baseUrl: 'https://www.v2ex.com/api'
    };
    _this.use('requestfix');
    // 中间件：使用wepy.xxx(request)的方式请求小程序原生API都将Promise化
    _this.use('promisify');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      this.testAsync();
    }
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.sleep(3);

              case 2:
                data = _context.sent;

                console.log(data);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function testAsync() {
        return _ref.apply(this, arguments);
      }

      return testAsync;
    }()
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJkZWZhdWx0VW5hbWUiLCJiYXNlVXJsIiwidXNlIiwidGVzdEFzeW5jIiwicyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInNsZWVwIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjYiIsInRoYXQiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQTZDRSxzQkFBZTtBQUFBOztBQUViO0FBRmE7O0FBQUEsVUExQ2ZBLE1BMENlLEdBMUNOO0FBQ1BDLGFBQU8sQ0FDTCxhQURLLEVBRUwsV0FGSyxFQUdMLGNBSEssRUFJTCxZQUpLLEVBS0wsY0FMSyxDQURBO0FBUVBDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLE1BRnhCO0FBR05DLGdDQUF3QixRQUhsQjtBQUlOQyxnQ0FBd0I7QUFKbEIsT0FSRDtBQWNQQyxjQUFRO0FBQ04sZ0JBQVEsQ0FDTjtBQUNFLHNCQUFZLGFBRGQ7QUFFRSxrQkFBUTtBQUZWLFNBRE0sRUFLTjtBQUNFLHNCQUFZLFdBRGQ7QUFFRSxrQkFBUTtBQUZWLFNBTE0sRUFTTjtBQUNFLHNCQUFZLGNBRGQ7QUFFRSxrQkFBUTtBQUZWLFNBVE0sRUFhTjtBQUNFLHNCQUFZLFlBRGQ7QUFFRSxrQkFBUTtBQUZWLFNBYk07QUFERjtBQWRELEtBMENNO0FBQUEsVUFOZkMsVUFNZSxHQU5GO0FBQ1hDLGdCQUFVLElBREM7QUFFWEMsb0JBQWMsU0FGSDtBQUdYQyxlQUFTO0FBSEUsS0FNRTtBQUdiLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBQ0E7QUFDQSxVQUFLQSxHQUFMLENBQVMsV0FBVDtBQUxhO0FBTWQ7Ozs7K0JBRVU7QUFDVCxXQUFLQyxTQUFMO0FBQ0Q7OzswQkFFTUMsQyxFQUFHO0FBQ1IsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDQyxtQkFBVyxZQUFNO0FBQ2ZGLGtCQUFRLGtCQUFSO0FBQ0QsU0FGRCxFQUVHRixJQUFJLElBRlA7QUFHRCxPQUpNLENBQVA7QUFLRDs7Ozs7Ozs7Ozs7dUJBR29CLEtBQUtLLEtBQUwsQ0FBVyxDQUFYLEM7OztBQUFiQyxvQjs7QUFDTkMsd0JBQVFDLEdBQVIsQ0FBWUYsSUFBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQUdVRyxFLEVBQUk7QUFDZCxVQUFNQyxPQUFPLElBQWI7QUFDQSxVQUFJLEtBQUtoQixVQUFMLENBQWdCQyxRQUFwQixFQUE4QjtBQUM1QixlQUFPLEtBQUtELFVBQUwsQ0FBZ0JDLFFBQXZCO0FBQ0Q7QUFDRCxxQkFBS2dCLFdBQUwsQ0FBaUI7QUFDZkMsZUFEZSxtQkFDTkMsR0FETSxFQUNEO0FBQ1pILGVBQUtoQixVQUFMLENBQWdCQyxRQUFoQixHQUEyQmtCLElBQUlsQixRQUEvQjtBQUNBYyxnQkFBTUEsR0FBR0ksSUFBSWxCLFFBQVAsQ0FBTjtBQUNEO0FBSmMsT0FBakI7QUFNRDs7OztFQS9FMEIsZUFBS21CLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgY29uZmlnID0ge1xuICAgIHBhZ2VzOiBbXG4gICAgICAncGFnZXMvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL2hvdCcsXG4gICAgICAncGFnZXMvbGF0ZXN0JyxcbiAgICAgICdwYWdlcy9ub2RlJyxcbiAgICAgICdwYWdlcy9kZXRhaWwnXG4gICAgXSxcbiAgICB3aW5kb3c6IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnV2VDaGF0JyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcbiAgICB9LFxuICAgIHRhYkJhcjoge1xuICAgICAgJ2xpc3QnOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAncGFnZVBhdGgnOiAncGFnZXMvaW5kZXgnLFxuICAgICAgICAgICd0ZXh0JzogJ+a1i+ivleS4u+mhtSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdwYWdlUGF0aCc6ICdwYWdlcy9ob3QnLFxuICAgICAgICAgICd0ZXh0JzogJ+acgOeDreS4u+mimCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdwYWdlUGF0aCc6ICdwYWdlcy9sYXRlc3QnLFxuICAgICAgICAgICd0ZXh0JzogJ+S4u+mimOWIl+ihqCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdwYWdlUGF0aCc6ICdwYWdlcy9ub2RlJyxcbiAgICAgICAgICAndGV4dCc6ICfmiYDmnInoioLngrknXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH1cblxuICBnbG9iYWxEYXRhID0ge1xuICAgIHVzZXJJbmZvOiBudWxsLFxuICAgIGRlZmF1bHRVbmFtZTogJ3N6eTBzeXonLFxuICAgIGJhc2VVcmw6ICdodHRwczovL3d3dy52MmV4LmNvbS9hcGknXG4gIH1cblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICAgIC8vIOS4remXtOS7tu+8muS/ruWkjeWwj+eoi+W6j+ivt+axguW5tuWPkemXrumimFxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcbiAgICAvLyDkuK3pl7Tku7bvvJrkvb/nlKh3ZXB5Lnh4eChyZXF1ZXN0KeeahOaWueW8j+ivt+axguWwj+eoi+W6j+WOn+eUn0FQSemDveWwhlByb21pc2XljJZcbiAgICB0aGlzLnVzZSgncHJvbWlzaWZ5JylcbiAgfVxuXG4gIG9uTGF1bmNoKCkge1xuICAgIHRoaXMudGVzdEFzeW5jKClcbiAgfVxuXG4gIHNsZWVwIChzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXNvbHZlKCdwcm9taXNlIHJlc29sdmVkJylcbiAgICAgIH0sIHMgKiAxMDAwKVxuICAgIH0pXG4gIH1cblxuICBhc3luYyB0ZXN0QXN5bmMgKCkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnNsZWVwKDMpXG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgfVxuXG4gIGdldFVzZXJJbmZvKGNiKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXNcbiAgICBpZiAodGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XG4gICAgICByZXR1cm4gdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvXG4gICAgfVxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICBjYiAmJiBjYihyZXMudXNlckluZm8pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19