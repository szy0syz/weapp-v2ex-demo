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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.$props = { "list": { "xmlns:v-bind": "", "v-bind:topics.sync": "topics" } }, _this.$events = {}, _this.components = {
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
                return _api2.default.getLatest();

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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/latest'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhdGVzdC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibGlzdCIsImRhdGEiLCJ0b3BpY3MiLCJtZXRob2RzIiwiZXZlbnRzIiwicmVsb2FkVG9waWNzIiwiZ2V0TGF0ZXN0IiwicmVzIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVMsRSxRQUVWQyxNLEdBQVMsRUFBQyxRQUFPLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsc0JBQXFCLFFBQXhDLEVBQVIsRSxRQUNaQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFEUSxLLFFBSVZDLEksR0FBTztBQUNMQyxjQUFRO0FBREgsSyxRQUlQQyxPLEdBQVUsRSxRQUdWQyxNLEdBQVMsRTs7Ozs7NkJBR0E7QUFDUCxXQUFLQyxZQUFMO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7Ozt1QkFFa0IsY0FBSUMsU0FBSixFOzs7QUFBWkMsbUI7O0FBQ0oscUJBQUtMLE1BQUwsR0FBY0ssSUFBSU4sSUFBbEI7QUFDQSxxQkFBS08sTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTNCK0IsZUFBS0MsSTs7a0JBQW5CZCxLIiwiZmlsZSI6ImxhdGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgVG9waWNMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvdG9waWNMaXN0J1xuICBpbXBvcnQgYXBpIGZyb20gJy4uL2FwaS9hcGknXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgfVxuICAgJHByb3BzID0ge1wibGlzdFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dG9waWNzLnN5bmNcIjpcInRvcGljc1wifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBsaXN0OiBUb3BpY0xpc3RcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgdG9waWNzOiBbXVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgIHRoaXMucmVsb2FkVG9waWNzKClcbiAgICB9XG5cbiAgICAvLyDihpPihpPihpPihpPihpPihpPoh6rlrprkuYnlh73mlbDihpPihpPihpPihpPihpPihpPihpPihpNcbiAgICBhc3luYyByZWxvYWRUb3BpY3MoKSB7XG4gICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLmdldExhdGVzdCgpXG4gICAgICB0aGlzLnRvcGljcyA9IHJlcy5kYXRhXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICB9XG4iXX0=