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
      navigationBarTitleText: 'test'
    }, _this.$props = { "list": { "xmlns:v-bind": "", "v-bind:topics.sync": "topics" } }, _this.$events = {}, _this.components = {
      list: _topicList2.default
    }, _this.data = {
      topics: []
    }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      this.reloadTopics();
    }

    // ↓↓↓↓↓↓自定义函数↓↓↓↓↓↓↓↓

  }, {
    key: 'reloadTopics',
    value: function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _api2.default.getHot();

              case 2:
                res = _context.sent;

                this.topics = res.data;
                this.$apply();

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function reloadTopics() {
        return _ref2.apply(this, arguments);
      }

      return reloadTopics;
    }()
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/hot'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvdC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImxpc3QiLCJkYXRhIiwidG9waWNzIiwibWV0aG9kcyIsImV2ZW50cyIsInJlbG9hZFRvcGljcyIsImdldEhvdCIsInJlcyIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE0sR0FBUyxFQUFDLFFBQU8sRUFBQyxnQkFBZSxFQUFoQixFQUFtQixzQkFBcUIsUUFBeEMsRUFBUixFLFFBQ1pDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUFJVkMsSSxHQUFPO0FBQ0xDLGNBQVE7QUFESCxLLFFBSVBDLE8sR0FBVSxFLFFBR1ZDLE0sR0FBUyxFOzs7Ozs2QkFHQTtBQUNQLFdBQUtDLFlBQUw7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7O3VCQUVrQixjQUFJQyxNQUFKLEU7OztBQUFaQyxtQjs7QUFDSixxQkFBS0wsTUFBTCxHQUFjSyxJQUFJTixJQUFsQjtBQUNBLHFCQUFLTyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBNUIrQixlQUFLQyxJOztrQkFBbkJmLEsiLCJmaWxlIjoiaG90LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBUb3BpY0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy90b3BpY0xpc3QnXG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vYXBpL2FwaSdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICd0ZXN0J1xuICAgIH1cbiAgICRwcm9wcyA9IHtcImxpc3RcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRvcGljcy5zeW5jXCI6XCJ0b3BpY3NcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgbGlzdDogVG9waWNMaXN0XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHRvcGljczogW11cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICB0aGlzLnJlbG9hZFRvcGljcygpXG4gICAgfVxuXG4gICAgLy8g4oaT4oaT4oaT4oaT4oaT4oaT6Ieq5a6a5LmJ5Ye95pWw4oaT4oaT4oaT4oaT4oaT4oaT4oaT4oaTXG4gICAgYXN5bmMgcmVsb2FkVG9waWNzKCkge1xuICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5nZXRIb3QoKVxuICAgICAgdGhpcy50b3BpY3MgPSByZXMuZGF0YVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgfVxuIl19