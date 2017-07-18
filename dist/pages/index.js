'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2, _initialiseProps;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _list = require('./../components/list.js');

var _list2 = _interopRequireDefault(_list);

var _panel = require('./../components/panel.js');

var _panel2 = _interopRequireDefault(_panel);

var _counter = require('./../components/counter.js');

var _counter2 = _interopRequireDefault(_counter);

var _group = require('./../components/group.js');

var _group2 = _interopRequireDefault(_group);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      this.$parent.getUserInfo(function (userInfo) {
        if (userInfo) {
          self.userInfo = userInfo;
        }
        self.normalTitle = '标题已被修改';

        self.setTimeoutTitle = '标题三秒后会被修改';
        setTimeout(function () {
          self.setTimeoutTitle = '到三秒了';
          self.$apply();
        }, 3000);

        self.$apply();
      });
    }
  }]);

  return Index;
}(_wepy2.default.page), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.config = {
    navigationBarTitleText: 'index'
  };
  this.$props = { "group": { "v-bind:grouplist.once": { "for": "groupList", "item": "item", "index": "index", "key": "key", "value": "index" }, "v-bind:indexa.once": { "for": "groupList", "item": "item", "index": "index", "key": "key", "value": "index" } }, "counter1": { "bindindex-emit": "counterEmit" }, "counter2": { "xmlns:v-bind": "", "v-bind:num.sync": "mynum" } };
  this.$events = {};
  this.components = {
    panel: _panel2.default,
    counter1: _counter2.default,
    counter2: _counter2.default,
    list: _list2.default,
    group: _group2.default,
    toast: _wepyComToast2.default
  };
  this.mixins = [_test2.default];
  this.data = {
    mynum: 20,
    userInfo: {
      nickName: '加载中...'
    },
    normalTitle: '原始标题',
    setTimeoutTitle: '标题三秒后会被修改',
    count: 0,
    netrst: '',
    groupList: [{
      id: 1,
      name: '点击改变',
      list: [{
        childid: '1.1',
        childname: '子项，点我改变'
      }, {
        childid: '1.2',
        childname: '子项，点我改变'
      }, {
        childid: '1.3',
        childname: '子项，点我改变'
      }]
    }, {
      id: 2,
      name: '点击改变',
      list: [{
        childid: '2.1',
        childname: '子项，点我改变'
      }, {
        childid: '2.2',
        childname: '子项，点我改变'
      }, {
        childid: '2.3',
        childname: '子项，点我改变'
      }]
    }, {
      id: 3,
      name: '点击改变',
      list: [{
        childid: '3.1',
        childname: '子项，点我改变'
      }]
    }]
  };
  this.computed = {
    now: function now() {
      return +new Date();
    }
  };
  this.methods = {
    plus: function plus() {
      this.mynum++;
    },
    toast: function toast() {
      var _arguments = arguments;

      var promise = this.$invoke('toast', 'show', {
        title: '自定义标题',
        img: 'https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png'
      });
      var t = arguments;
      promise.then(function (d) {
        console.dir(d);
        console.dir(_arguments);
        console.log(t === _arguments);
      });
    },
    tap: function tap() {
      console.log('do noting from ' + this.$name);
    },
    communicate: function communicate() {
      console.log(this.$name + ' tap');

      this.$invoke('counter2', 'minus', 45, 6);
      this.$invoke('counter1', 'plus', 45, 6);

      this.$broadcast('index-broadcast', 1, 3, 4);
    },
    request: function request() {
      var self = this;
      var i = 10;
      var map = ['MA==', 'MQo=', 'Mg==', 'Mw==', 'NA==', 'NQ==', 'Ng==', 'Nw==', 'OA==', 'OQ=='];
      while (i--) {
        _wepy2.default.request({
          url: 'https://www.madcoder.cn/tests/sleep.php?time=1&t=css&c=' + map[i] + '&i=' + i,
          success: function success(d) {
            self.netrst += d.data + '.';
            self.$apply();
          }
        });
      }
    },
    counterEmit: function counterEmit() {
      var _ref2;

      var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
      console.log(this.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
  this.events = {
    'index-emit': function indexEmit() {
      var _ref3;

      var $event = (_ref3 = arguments.length - 1, arguments.length <= _ref3 ? undefined : arguments[_ref3]);
      console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
}, _temp2);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4Iiwic2VsZiIsIiRwYXJlbnQiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwibm9ybWFsVGl0bGUiLCJzZXRUaW1lb3V0VGl0bGUiLCJzZXRUaW1lb3V0IiwiJGFwcGx5IiwicGFnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInBhbmVsIiwiY291bnRlcjEiLCJjb3VudGVyMiIsImxpc3QiLCJncm91cCIsInRvYXN0IiwibWl4aW5zIiwiZGF0YSIsIm15bnVtIiwibmlja05hbWUiLCJjb3VudCIsIm5ldHJzdCIsImdyb3VwTGlzdCIsImlkIiwibmFtZSIsImNoaWxkaWQiLCJjaGlsZG5hbWUiLCJjb21wdXRlZCIsIm5vdyIsIkRhdGUiLCJtZXRob2RzIiwicGx1cyIsInByb21pc2UiLCIkaW52b2tlIiwidGl0bGUiLCJpbWciLCJ0IiwiYXJndW1lbnRzIiwidGhlbiIsImQiLCJjb25zb2xlIiwiZGlyIiwibG9nIiwidGFwIiwiJG5hbWUiLCJjb21tdW5pY2F0ZSIsIiRicm9hZGNhc3QiLCJyZXF1ZXN0IiwiaSIsIm1hcCIsInVybCIsInN1Y2Nlc3MiLCJjb3VudGVyRW1pdCIsIiRldmVudCIsImxlbmd0aCIsInNvdXJjZSIsImV2ZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQW9JVjtBQUNQLFVBQUlDLE9BQU8sSUFBWDtBQUNBLFdBQUtDLE9BQUwsQ0FBYUMsV0FBYixDQUF5QixVQUFVQyxRQUFWLEVBQW9CO0FBQzNDLFlBQUlBLFFBQUosRUFBYztBQUNaSCxlQUFLRyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEO0FBQ0RILGFBQUtJLFdBQUwsR0FBbUIsUUFB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QUFMLEdBQWMsQ0FBNUIsMkRBQUo7QUFDQWQsY0FBUUUsR0FBUixDQUFlLE9BQUtFLEtBQXBCLGlCQUFxQ1MsT0FBTzdCLElBQTVDLGNBQXlENkIsT0FBT0UsTUFBUCxDQUFjWCxLQUF2RTtBQUNEO0FBSk0sRzs7a0JBN0hVakQsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2xpc3QnXG4gIGltcG9ydCBQYW5lbCBmcm9tICcuLi9jb21wb25lbnRzL3BhbmVsJ1xuICBpbXBvcnQgQ291bnRlciBmcm9tICcuLi9jb21wb25lbnRzL2NvdW50ZXInXG4gIGltcG9ydCBHcm91cCBmcm9tICcuLi9jb21wb25lbnRzL2dyb3VwJ1xuICBpbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnXG4gIGltcG9ydCB0ZXN0TWl4aW4gZnJvbSAnLi4vbWl4aW5zL3Rlc3QnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdpbmRleCdcbiAgICB9XG4gICAkcHJvcHMgPSB7XCJncm91cFwiOntcInYtYmluZDpncm91cGxpc3Qub25jZVwiOntcImZvclwiOlwiZ3JvdXBMaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCIsXCJ2YWx1ZVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6aW5kZXhhLm9uY2VcIjp7XCJmb3JcIjpcImdyb3VwTGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwiLFwidmFsdWVcIjpcImluZGV4XCJ9fSxcImNvdW50ZXIxXCI6e1wiYmluZGluZGV4LWVtaXRcIjpcImNvdW50ZXJFbWl0XCJ9LFwiY291bnRlcjJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm51bS5zeW5jXCI6XCJteW51bVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBwYW5lbDogUGFuZWwsXG4gICAgICBjb3VudGVyMTogQ291bnRlcixcbiAgICAgIGNvdW50ZXIyOiBDb3VudGVyLFxuICAgICAgbGlzdDogTGlzdCxcbiAgICAgIGdyb3VwOiBHcm91cCxcbiAgICAgIHRvYXN0OiBUb2FzdFxuICAgIH1cblxuICAgIG1peGlucyA9IFt0ZXN0TWl4aW5dXG5cbiAgICBkYXRhID0ge1xuICAgICAgbXludW06IDIwLFxuICAgICAgdXNlckluZm86IHtcbiAgICAgICAgbmlja05hbWU6ICfliqDovb3kuK0uLi4nXG4gICAgICB9LFxuICAgICAgbm9ybWFsVGl0bGU6ICfljp/lp4vmoIfpopgnLFxuICAgICAgc2V0VGltZW91dFRpdGxlOiAn5qCH6aKY5LiJ56eS5ZCO5Lya6KKr5L+u5pS5JyxcbiAgICAgIGNvdW50OiAwLFxuICAgICAgbmV0cnN0OiAnJyxcbiAgICAgIGdyb3VwTGlzdDogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXG4gICAgICAgICAgbGlzdDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjaGlsZGlkOiAnMS4xJyxcbiAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBjaGlsZGlkOiAnMS4yJyxcbiAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBjaGlsZGlkOiAnMS4zJyxcbiAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgIG5hbWU6ICfngrnlh7vmlLnlj5gnLFxuICAgICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2hpbGRpZDogJzIuMScsXG4gICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgY2hpbGRpZDogJzIuMicsXG4gICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgY2hpbGRpZDogJzIuMycsXG4gICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMyxcbiAgICAgICAgICBuYW1lOiAn54K55Ye75pS55Y+YJyxcbiAgICAgICAgICBsaXN0OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICczLjEnLFxuICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBub3cgKCkge1xuICAgICAgICByZXR1cm4gK25ldyBEYXRlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgcGx1cyAoKSB7XG4gICAgICAgIHRoaXMubXludW0rK1xuICAgICAgfSxcbiAgICAgIHRvYXN0ICgpIHtcbiAgICAgICAgbGV0IHByb21pc2UgPSB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3cnLCB7XG4gICAgICAgICAgdGl0bGU6ICfoh6rlrprkuYnmoIfpopgnLFxuICAgICAgICAgIGltZzogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9raWlubGFtL3dldG9hc3QvbWFzdGVyL2ltYWdlcy9zdGFyLnBuZydcbiAgICAgICAgfSlcbiAgICAgICAgdmFyIHQgPSBhcmd1bWVudHNcbiAgICAgICAgcHJvbWlzZS50aGVuKChkKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5kaXIoZClcbiAgICAgICAgICBjb25zb2xlLmRpcihhcmd1bWVudHMpXG4gICAgICAgICAgY29uc29sZS5sb2codCA9PT0gYXJndW1lbnRzKVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIHRhcCAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkbyBub3RpbmcgZnJvbSAnICsgdGhpcy4kbmFtZSlcbiAgICAgIH0sXG4gICAgICBjb21tdW5pY2F0ZSAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuJG5hbWUgKyAnIHRhcCcpXG5cbiAgICAgICAgdGhpcy4kaW52b2tlKCdjb3VudGVyMicsICdtaW51cycsIDQ1LCA2KVxuICAgICAgICB0aGlzLiRpbnZva2UoJ2NvdW50ZXIxJywgJ3BsdXMnLCA0NSwgNilcblxuICAgICAgICB0aGlzLiRicm9hZGNhc3QoJ2luZGV4LWJyb2FkY2FzdCcsIDEsIDMsIDQpXG4gICAgICB9LFxuICAgICAgcmVxdWVzdCAoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBsZXQgaSA9IDEwXG4gICAgICAgIGxldCBtYXAgPSBbJ01BPT0nLCAnTVFvPScsICdNZz09JywgJ013PT0nLCAnTkE9PScsICdOUT09JywgJ05nPT0nLCAnTnc9PScsICdPQT09JywgJ09RPT0nXVxuICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3Lm1hZGNvZGVyLmNuL3Rlc3RzL3NsZWVwLnBocD90aW1lPTEmdD1jc3MmYz0nICsgbWFwW2ldICsgJyZpPScgKyBpLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgc2VsZi5uZXRyc3QgKz0gZC5kYXRhICsgJy4nXG4gICAgICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY291bnRlckVtaXQgKC4uLmFyZ3MpIHtcbiAgICAgICAgbGV0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXVxuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLiRuYW1lfWApXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgICAgJ2luZGV4LWVtaXQnOiAoLi4uYXJncykgPT4ge1xuICAgICAgICBsZXQgJGV2ZW50ID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuJG5hbWV9IHJlY2VpdmUgJHskZXZlbnQubmFtZX0gZnJvbSAkeyRldmVudC5zb3VyY2UuJG5hbWV9YClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHRoaXMuJHBhcmVudC5nZXRVc2VySW5mbyhmdW5jdGlvbiAodXNlckluZm8pIHtcbiAgICAgICAgaWYgKHVzZXJJbmZvKSB7XG4gICAgICAgICAgc2VsZi51c2VySW5mbyA9IHVzZXJJbmZvXG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5ub3JtYWxUaXRsZSA9ICfmoIfpopjlt7Looqvkv67mlLknXG5cbiAgICAgICAgc2VsZi5zZXRUaW1lb3V0VGl0bGUgPSAn5qCH6aKY5LiJ56eS5ZCO5Lya6KKr5L+u5pS5J1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzZWxmLnNldFRpbWVvdXRUaXRsZSA9ICfliLDkuInnp5LkuoYnXG4gICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICB9LCAzMDAwKVxuXG4gICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=