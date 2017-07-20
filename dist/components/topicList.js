'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var util = require('./../libs/utils.js');

var TopicList = function (_wepy$component) {
  _inherits(TopicList, _wepy$component);

  function TopicList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TopicList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TopicList.__proto__ || Object.getPrototypeOf(TopicList)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      topics: []
    }, _this.events = {}, _this.props = {
      detailPage: String,
      apiUrl: String
    }, _this.methods = {
      toDetail: function toDetail(e) {
        _wepy2.default.navigateTo({
          url: this.detailPage + '?id=' + e.currentTarget.id
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TopicList, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      util.getRequestData({
        url: this.apiUrl,
        cb: function cb(res) {
          _this2.topics = res.data;
          _this2.$apply();
        }
      });
    }
  }]);

  return TopicList;
}(_wepy2.default.component);

exports.default = TopicList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcGljTGlzdC5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIlRvcGljTGlzdCIsImRhdGEiLCJ0b3BpY3MiLCJldmVudHMiLCJwcm9wcyIsImRldGFpbFBhZ2UiLCJTdHJpbmciLCJhcGlVcmwiLCJtZXRob2RzIiwidG9EZXRhaWwiLCJlIiwibmF2aWdhdGVUbyIsInVybCIsImN1cnJlbnRUYXJnZXQiLCJpZCIsImdldFJlcXVlc3REYXRhIiwiY2IiLCJyZXMiLCIkYXBwbHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVFOzs7Ozs7Ozs7Ozs7QUFEQSxJQUFJQSxPQUFPQyxRQUFRLGVBQVIsQ0FBWDs7SUFHcUJDLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsSSxHQUFPO0FBQ0xDLGNBQVE7QUFESCxLLFFBSVBDLE0sR0FBUyxFLFFBR1RDLEssR0FBUTtBQUNOQyxrQkFBWUMsTUFETjtBQUVOQyxjQUFRRDtBQUZGLEssUUFLUkUsTyxHQUFVO0FBQ1JDLGNBRFEsb0JBQ0VDLENBREYsRUFDSztBQUNYLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUssS0FBS1AsVUFBTCxHQUFrQixNQUFsQixHQUEyQkssRUFBRUcsYUFBRixDQUFnQkM7QUFEbEMsU0FBaEI7QUFHRDtBQUxPLEs7Ozs7OzZCQVFBO0FBQUE7O0FBQ1JoQixXQUFLaUIsY0FBTCxDQUFvQjtBQUNsQkgsYUFBSyxLQUFLTCxNQURRO0FBRWxCUyxZQUFJLFlBQUNDLEdBQUQsRUFBUztBQUNYLGlCQUFLZixNQUFMLEdBQWNlLElBQUloQixJQUFsQjtBQUNBLGlCQUFLaUIsTUFBTDtBQUNEO0FBTGlCLE9BQXBCO0FBT0Q7Ozs7RUE3Qm9DLGVBQUtDLFM7O2tCQUF2Qm5CLFMiLCJmaWxlIjoidG9waWNMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIHZhciB1dGlsID0gcmVxdWlyZSgnLi4vbGlicy91dGlscycpXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9waWNMaXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIGRhdGEgPSB7XG4gICAgICB0b3BpY3M6IFtdXG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIHByb3BzID0ge1xuICAgICAgZGV0YWlsUGFnZTogU3RyaW5nLFxuICAgICAgYXBpVXJsOiBTdHJpbmdcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgdG9EZXRhaWwgKGUpIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6IHRoaXMuZGV0YWlsUGFnZSArICc/aWQ9JyArIGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICB1dGlsLmdldFJlcXVlc3REYXRhKHtcbiAgICAgICAgdXJsOiB0aGlzLmFwaVVybCxcbiAgICAgICAgY2I6IChyZXMpID0+IHtcbiAgICAgICAgICB0aGlzLnRvcGljcyA9IHJlcy5kYXRhXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19