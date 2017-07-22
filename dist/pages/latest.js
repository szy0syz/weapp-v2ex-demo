'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _topicList = require('./../components/topicList.js');

var _topicList2 = _interopRequireDefault(_topicList);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
      // navigationBarTitleText: 'test'
    }, _this.$props = { "list": { "xmlns:v-bind": "", "v-bind:topics.sync": "topics", "v-bind:obj.once": "obj", "str": "szyyyy" } }, _this.$events = {}, _this.components = {
      list: _topicList2.default
    }, _this.data = {
      topics: [1, 2, 3],
      obj: { name: 'szy' }
    }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.dir(this.topics);
                _context.next = 3;
                return _api2.default.getLatest();

              case 3:
                this.topics = _context.sent;

                this.topics = this.topics.data;
                this.$apply();
                console.log('我就是取得的数据： ');
                console.dir(this.topics);

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/latest'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhdGVzdC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibGlzdCIsImRhdGEiLCJ0b3BpY3MiLCJvYmoiLCJuYW1lIiwibWV0aG9kcyIsImV2ZW50cyIsImNvbnNvbGUiLCJkaXIiLCJnZXRMYXRlc3QiLCIkYXBwbHkiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQO0FBRE8sSyxRQUdWQyxNLEdBQVMsRUFBQyxRQUFPLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsc0JBQXFCLFFBQXhDLEVBQWlELG1CQUFrQixLQUFuRSxFQUF5RSxPQUFNLFFBQS9FLEVBQVIsRSxRQUNaQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFEUSxLLFFBSVZDLEksR0FBTztBQUNMQyxjQUFRLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBREg7QUFFTEMsV0FBSyxFQUFDQyxNQUFNLEtBQVA7QUFGQSxLLFFBS1BDLE8sR0FBVSxFLFFBR1ZDLE0sR0FBUyxFOzs7Ozs7Ozs7OztBQUlQQyx3QkFBUUMsR0FBUixDQUFZLEtBQUtOLE1BQWpCOzt1QkFDb0IsY0FBSU8sU0FBSixFOzs7QUFBcEIscUJBQUtQLE07O0FBQ0wscUJBQUtBLE1BQUwsR0FBYyxLQUFLQSxNQUFMLENBQVlELElBQTFCO0FBQ0EscUJBQUtTLE1BQUw7QUFDQUgsd0JBQVFJLEdBQVIsQ0FBWSxZQUFaO0FBQ0FKLHdCQUFRQyxHQUFSLENBQVksS0FBS04sTUFBakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEzQitCLGVBQUtVLEk7O2tCQUFuQmpCLEsiLCJmaWxlIjoibGF0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBUb3BpY0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy90b3BpY0xpc3QnXG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vYXBpL2FwaSdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC8vIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICd0ZXN0J1xuICAgIH1cbiAgICRwcm9wcyA9IHtcImxpc3RcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRvcGljcy5zeW5jXCI6XCJ0b3BpY3NcIixcInYtYmluZDpvYmoub25jZVwiOlwib2JqXCIsXCJzdHJcIjpcInN6eXl5eVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBsaXN0OiBUb3BpY0xpc3RcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgdG9waWNzOiBbMSwgMiwgM10sXG4gICAgICBvYmo6IHtuYW1lOiAnc3p5J31cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBhc3luYyBvbkxvYWQoKSB7XG4gICAgICBjb25zb2xlLmRpcih0aGlzLnRvcGljcylcbiAgICAgIHRoaXMudG9waWNzID0gYXdhaXQgYXBpLmdldExhdGVzdCgpXG4gICAgICB0aGlzLnRvcGljcyA9IHRoaXMudG9waWNzLmRhdGFcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIGNvbnNvbGUubG9nKCfmiJHlsLHmmK/lj5blvpfnmoTmlbDmja7vvJogJylcbiAgICAgIGNvbnNvbGUuZGlyKHRoaXMudG9waWNzKVxuICAgIH1cbiAgfVxuIl19