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

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, Index);

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '所有节点列表'
    }, _this.$props = { "nodeList": { "xmlns:v-bind": "", "v-bind:allNodes.sync": "allNodes" } }, _this.$events = {}, _this.components = {
      toast: _wepyComToast2.default,
      nodeList: _nodeList2.default
    }, _this.data = {
      allNodes: []
    }, _this.tdata = {
      noReach: false
    }, _this.methods = {
      toast: function toast(e) {
        console.dir(_wepy2.default);
        _wepy2.default.switchTab({
          url: '/pages/index'
        });
      }
    }, _this.events = {
      'noReach': function noReach() {
        _this.tdata.noReach = true;
        var promise = _this.$invoke('toast', 'show', {
          title: '全部加载完毕',
          img: 'https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png'
        });
        promise.then(function (d) {
          _this.tdata.isFinished = true; // 设置flag，不再触发上拉触底事件
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'getAllNodes',
    value: function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _api2.default.getNodes({
                  cb: this.loadingNodes
                });

              case 2:
                res = _context.sent;

                this.allNodes = res.data;
                this.$apply();

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAllNodes() {
        return _ref2.apply(this, arguments);
      }

      return getAllNodes;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.getAllNodes();
    }
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      if (!this.tdata.noReach) {
        console.log('onReachBottom~!!!');
        this.$broadcast('getMoreNodes', 100);
      }
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/node'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJ0b2FzdCIsIm5vZGVMaXN0IiwiZGF0YSIsImFsbE5vZGVzIiwidGRhdGEiLCJub1JlYWNoIiwibWV0aG9kcyIsImUiLCJjb25zb2xlIiwiZGlyIiwic3dpdGNoVGFiIiwidXJsIiwiZXZlbnRzIiwicHJvbWlzZSIsIiRpbnZva2UiLCJ0aXRsZSIsImltZyIsInRoZW4iLCJkIiwiaXNGaW5pc2hlZCIsImdldE5vZGVzIiwiY2IiLCJsb2FkaW5nTm9kZXMiLCJyZXMiLCIkYXBwbHkiLCJnZXRBbGxOb2RlcyIsImxvZyIsIiRicm9hZGNhc3QiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQyxnQkFBZSxFQUFoQixFQUFtQix3QkFBdUIsVUFBMUMsRUFBWixFLFFBQ1pDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxtQ0FEUTtBQUVSQztBQUZRLEssUUFLVkMsSSxHQUFPO0FBQ0xDLGdCQUFVO0FBREwsSyxRQUlQQyxLLEdBQVE7QUFDTkMsZUFBUztBQURILEssUUFJUkMsTyxHQUFVO0FBQ1JOLFdBRFEsaUJBQ0RPLENBREMsRUFDRTtBQUNSQyxnQkFBUUMsR0FBUjtBQUNBLHVCQUFLQyxTQUFMLENBQWU7QUFDYkMsZUFBSztBQURRLFNBQWY7QUFHRDtBQU5PLEssUUFTVkMsTSxHQUFTO0FBQ1AsaUJBQVcsbUJBQWE7QUFDdEIsY0FBS1IsS0FBTCxDQUFXQyxPQUFYLEdBQXFCLElBQXJCO0FBQ0EsWUFBSVEsVUFBVSxNQUFLQyxPQUFMLENBQWEsT0FBYixFQUFzQixNQUF0QixFQUE4QjtBQUMxQ0MsaUJBQU8sUUFEbUM7QUFFMUNDLGVBQUs7QUFGcUMsU0FBOUIsQ0FBZDtBQUlBSCxnQkFBUUksSUFBUixDQUFhLFVBQUNDLENBQUQsRUFBTztBQUNsQixnQkFBS2QsS0FBTCxDQUFXZSxVQUFYLEdBQXdCLElBQXhCLENBRGtCLENBQ1c7QUFDOUIsU0FGRDtBQUdEO0FBVk0sSzs7Ozs7Ozs7Ozs7Ozt1QkFjUyxjQUFJQyxRQUFKLENBQWE7QUFDM0JDLHNCQUFJLEtBQUtDO0FBRGtCLGlCQUFiLEM7OztBQUFaQyxtQjs7QUFHSixxQkFBS3BCLFFBQUwsR0FBZ0JvQixJQUFJckIsSUFBcEI7QUFDQSxxQkFBS3NCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFHTztBQUNQLFdBQUtDLFdBQUw7QUFDRDs7O29DQUVlO0FBQ2QsVUFBSSxDQUFDLEtBQUtyQixLQUFMLENBQVdDLE9BQWhCLEVBQXlCO0FBQ3ZCRyxnQkFBUWtCLEdBQVIsQ0FBWSxtQkFBWjtBQUNBLGFBQUtDLFVBQUwsQ0FBZ0IsY0FBaEIsRUFBZ0MsR0FBaEM7QUFDRDtBQUNGOzs7O0VBMURnQyxlQUFLQyxJOztrQkFBbkJsQyxLIiwiZmlsZSI6Im5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xuICBpbXBvcnQgTm9kZUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9ub2RlTGlzdCdcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi9hcGkvYXBpJ1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aJgOacieiKgueCueWIl+ihqCdcbiAgICB9XG4gICAkcHJvcHMgPSB7XCJub2RlTGlzdFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6YWxsTm9kZXMuc3luY1wiOlwiYWxsTm9kZXNcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgdG9hc3Q6IFRvYXN0LFxuICAgICAgbm9kZUxpc3Q6IE5vZGVMaXN0XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGFsbE5vZGVzOiBbXVxuICAgIH1cblxuICAgIHRkYXRhID0ge1xuICAgICAgbm9SZWFjaDogZmFsc2VcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgdG9hc3QgKGUpIHtcbiAgICAgICAgY29uc29sZS5kaXIod2VweSlcbiAgICAgICAgd2VweS5zd2l0Y2hUYWIoe1xuICAgICAgICAgIHVybDogJy9wYWdlcy9pbmRleCdcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgICAnbm9SZWFjaCc6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIHRoaXMudGRhdGEubm9SZWFjaCA9IHRydWVcbiAgICAgICAgbGV0IHByb21pc2UgPSB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3cnLCB7XG4gICAgICAgICAgdGl0bGU6ICflhajpg6jliqDovb3lrozmr5UnLFxuICAgICAgICAgIGltZzogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9raWlubGFtL3dldG9hc3QvbWFzdGVyL2ltYWdlcy9zdGFyLnBuZydcbiAgICAgICAgfSlcbiAgICAgICAgcHJvbWlzZS50aGVuKChkKSA9PiB7XG4gICAgICAgICAgdGhpcy50ZGF0YS5pc0ZpbmlzaGVkID0gdHJ1ZSAvLyDorr7nva5mbGFn77yM5LiN5YaN6Kem5Y+R5LiK5ouJ6Kem5bqV5LqL5Lu2XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0QWxsTm9kZXMoKSB7XG4gICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLmdldE5vZGVzKHtcbiAgICAgICAgY2I6IHRoaXMubG9hZGluZ05vZGVzXG4gICAgICB9KVxuICAgICAgdGhpcy5hbGxOb2RlcyA9IHJlcy5kYXRhXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgdGhpcy5nZXRBbGxOb2RlcygpXG4gICAgfVxuXG4gICAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICAgIGlmICghdGhpcy50ZGF0YS5ub1JlYWNoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvblJlYWNoQm90dG9tfiEhIScpXG4gICAgICAgIHRoaXMuJGJyb2FkY2FzdCgnZ2V0TW9yZU5vZGVzJywgMTAwKVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19