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

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'test'
    }, _this.components = {
      toast: _wepyComToast2.default,
      nodeList: _nodeList2.default
    }, _this.data = {}, _this.methods = {
      toast: function toast(e) {
        console.dir(_wepy2.default);
        _wepy2.default.switchTab({
          url: '/pages/index'
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      console.log('onReachBottom~!!!');
      this.$broadcast('getMoreNodes');
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/node'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsInRvYXN0Iiwibm9kZUxpc3QiLCJkYXRhIiwibWV0aG9kcyIsImUiLCJjb25zb2xlIiwiZGlyIiwic3dpdGNoVGFiIiwidXJsIiwiZXZlbnRzIiwibG9nIiwiJGJyb2FkY2FzdCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWE7QUFDWEMsbUNBRFc7QUFFWEM7QUFGVyxLLFFBS2JDLEksR0FBTyxFLFFBR1BDLE8sR0FBVTtBQUNSSCxXQURRLGlCQUNESSxDQURDLEVBQ0U7QUFDUkMsZ0JBQVFDLEdBQVI7QUFDQSx1QkFBS0MsU0FBTCxDQUFlO0FBQ2JDLGVBQUs7QUFEUSxTQUFmO0FBR0Q7QUFOTyxLLFFBU1ZDLE0sR0FBUyxFOzs7Ozs2QkFHQSxDQUNSOzs7b0NBRWU7QUFDZEosY0FBUUssR0FBUixDQUFZLG1CQUFaO0FBQ0EsV0FBS0MsVUFBTCxDQUFnQixjQUFoQjtBQUNEOzs7O0VBOUJnQyxlQUFLQyxJOztrQkFBbkJoQixLIiwiZmlsZSI6Im5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xuICBpbXBvcnQgTm9kZUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9ub2RlTGlzdCdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICd0ZXN0J1xuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuICAgICAgdG9hc3Q6IFRvYXN0LFxuICAgICAgbm9kZUxpc3Q6IE5vZGVMaXN0XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgdG9hc3QgKGUpIHtcbiAgICAgICAgY29uc29sZS5kaXIod2VweSlcbiAgICAgICAgd2VweS5zd2l0Y2hUYWIoe1xuICAgICAgICAgIHVybDogJy9wYWdlcy9pbmRleCdcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgIH1cblxuICAgIG9uUmVhY2hCb3R0b20oKSB7XG4gICAgICBjb25zb2xlLmxvZygnb25SZWFjaEJvdHRvbX4hISEnKVxuICAgICAgdGhpcy4kYnJvYWRjYXN0KCdnZXRNb3JlTm9kZXMnKVxuICAgIH1cbiAgfVxuIl19