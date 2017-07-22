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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '主题详情'
    }, _this.data = {
      tid: -1
    }, _this.methods = {
      toast: function toast(e) {
        console.dir(_wepy2.default);
        _wepy2.default.switchTab({
          url: '/pages/index'
        });
      }
    }, _this.$props = { "topicDetail": { "xmlns:v-bind": "", "v-bind:tid.sync": "tid" } }, _this.$events = {}, _this.components = {
      topicDetail: _topicDetail2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.tid = options.id;
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidGlkIiwibWV0aG9kcyIsInRvYXN0IiwiZSIsImNvbnNvbGUiLCJkaXIiLCJzd2l0Y2hUYWIiLCJ1cmwiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInRvcGljRGV0YWlsIiwib3B0aW9ucyIsImlkIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsV0FBSyxDQUFDO0FBREQsSyxRQUlQQyxPLEdBQVU7QUFDUkMsV0FEUSxpQkFDREMsQ0FEQyxFQUNFO0FBQ1JDLGdCQUFRQyxHQUFSO0FBQ0EsdUJBQUtDLFNBQUwsQ0FBZTtBQUNiQyxlQUFLO0FBRFEsU0FBZjtBQUdEO0FBTk8sSyxRQWFYQyxNLEdBQVMsRUFBQyxlQUFjLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsbUJBQWtCLEtBQXJDLEVBQWYsRSxRQUNaQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFEUSxLOzs7OzsyQkFOSEMsTyxFQUFTO0FBQ2QsV0FBS1osR0FBTCxHQUFXWSxRQUFRQyxFQUFuQjtBQUNEOzs7O0VBcEJnQyxlQUFLQyxJOztrQkFBbkJsQixLIiwiZmlsZSI6ImRldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgVG9waWNEZXRhaWwgZnJvbSAnLi4vY29tcG9uZW50cy90b3BpY0RldGFpbCdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuLvpopjor6bmg4UnXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHRpZDogLTFcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgdG9hc3QgKGUpIHtcbiAgICAgICAgY29uc29sZS5kaXIod2VweSlcbiAgICAgICAgd2VweS5zd2l0Y2hUYWIoe1xuICAgICAgICAgIHVybDogJy9wYWdlcy9pbmRleCdcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgdGhpcy50aWQgPSBvcHRpb25zLmlkXG4gICAgfVxuXG4gICAkcHJvcHMgPSB7XCJ0b3BpY0RldGFpbFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGlkLnN5bmNcIjpcInRpZFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICB0b3BpY0RldGFpbDogVG9waWNEZXRhaWxcbiAgICB9XG4gIH1cbiJdfQ==