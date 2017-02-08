angular.module('angularAdminUi').run(['$templateCache', function($templateCache) {$templateCache.put('app/components/main-footer/index.html','<footer class="main-footer">\n  <p><strong>Copyright &copy; 2014-2015 <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.</strong> All rights reserved.</p>\n</footer>\n');
$templateCache.put('app/components/main-sidebar/index.html','<aside class="col-3 main-sidebar">\n  <!-- sidebar: style can be found in sidebar.less -->\n  <section class="sidebar">\n    <!-- Sidebar user panel -->\n    <div class="user-panel">\n      <div class="pull-left image">\n        <img src="../../../bower_components/AdminLTE/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">\n      </div>\n      <div class="pull-left info">\n        <p>Alexander Pierce</p>\n        <a href="javascript:;"><i class="fa fa-circle text-success"></i> Online</a>\n      </div>\n    </div>\n    <!-- sidebar menu: : style can be found in sidebar.less -->\n    <ul class="sidebar-menu">\n      <li class="header">\u4E3B\u529F\u80FD\u533A</li>\n      <li ui-sref-active="active"><a ui-sref="dashboard"><i class="fa fa-gg"></i> <span>\u7CFB\u7EDF\u6982\u51B5</span></a></li>\n      <li ui-sref-active="active"><a ui-sref="pay"><i class="fa fa-credit-card"></i> <span>\u652F\u4ED8\u8BBE\u7F6E</span></a></li>\n      <li ui-sref-active="active">\n        <a ui-sref="notice">\n          <i class="fa fa-bell-o"></i>\n          <span>\u516C\u544A\u7BA1\u7406</span>\n          <span class="label label-primary pull-right">10</span>\n        </a>\n      </li>\n      <li ui-sref-active="active">\n        <a ui-sref="user">\n          <i class="fa fa-user"></i>\n          <span>\u7528\u6237\u7BA1\u7406</span>\n          <span class="label label-success pull-right">10000+</span>\n        </a>\n      </li>\n    </ul>\n  </section>\n  <!-- /.sidebar -->\n</aside>\n');
$templateCache.put('app/controllers/errors/index.html','<section class="errors-view">\n  <h1>Errors viewddd--EIIs!!</h1>\n  <img src="/assets/images/mdf_essence2@3x.png" alt="">\n  <i class="test-icon"></i>\n</section>\n');
$templateCache.put('app/controllers/permission/index.html','<div class="wrapper">\n  <mui-appbar class="main-header">\n    <table width="100%">\n      <tr style="vertical-align: middle">\n        <td class="mui--appbar-height">\u7BA1\u7406\u5458\u4F60\u597D</td>\n        <td class="mui--appbar-height" style="text-align: right">\u767B\u5F55/\u9000\u51FA</td>\n      </tr>\n    </table>\n  </mui-appbar>\n\n  <mui-row class="main-content">\n    <mui-col md="4">\n      <main-sidebar></main-sidebar>\n    </mui-col>\n    <mui-col md="8">\n      <article ui-view="permission" class="col-9 content-wrapper"></article>\n    </mui-col>\n  </mui-row>\n  <main-footer></main-footer>\n</div>\n');
$templateCache.put('app/controllers/main/index.html','<section class="main-view">\n  <h1>Main view11123sdfsdf1</h1>\n  <p>HELLO{{vm.test1 | toTestStr}}</p>\n</section>\n');
$templateCache.put('app/controllers/permission/list/index.html','<header class="content-header">\n  \u540E\u53F0\u4EBA\u5458\u6743\u9650\u7BA1\u7406_\u5217\u8868\u9875\n  <div class="pull-right">\n    <button class="btn btn-primary" ng-click="list.doCreate()">\u6DFB\u52A0\u8D26\u53F7</button>\n  </div>\n</header>\n\n\n<section class="content">\n\n\n  <!--filter-area start-->\n  <div class="row filter-area">\n    <div class="col-xs-4">\n      <input type="text" ng-model="list.keywords" class="form-control" placeholder="\u59D3\u540D/\u624B\u673A\u53F7/\u5206\u673A\u53F7">\n    </div>\n    <button type="button" class="btn btn-success col-xs-1" ng-click="list.doSearch()">\u641C\u7D22</button>\n    <button type="button" class="btn btn-default col-xs-1" ng-click="list.doClearSearch()">\u6E05\u9664</button>\n  </div>\n  <!--filter-area end-->\n\n  <div class="blank10"></div>\n\n  <!--list-detail start-->\n  <div class="list-detail">\n    <table class="table table-condensed">\n      <thead>\n      <tr class="bg-info">\n        <th width="20%">\u59D3\u540D</th>\n        <th width="20%">\u624B\u673A\u53F7</th>\n        <th width="20%">\u5206\u673A\u53F7</th>\n        <th width="40%">\u64CD\u4F5C</th>\n      </tr>\n      </thead>\n\n      <tbody>\n      <tr ng-repeat="item in list.list" ng-if="list.list.length>0">\n        <td>{{item.realname}}</td>\n        <td>{{item.mobile}}</td>\n        <td>{{item.extension_number}}</td>\n        <td>\n          <button class="btn btn-primary" ng-click="list.doUpdate(item.user_id)">\u4FEE\u6539\u8BE6\u60C5</button>\n          <button class="btn btn-success" ng-click="list.doResetPassword(item.user_id)">\u91CD\u7F6E\u5BC6\u7801</button>\n          <button class="btn btn-danger" ng-click="list.doCloseAccount(item.user_id)">\u5173\u95ED\u8D26\u53F7</button>\n        </td>\n      </tr>\n      <tr ng-if="list.list==0">\n        <td colspan="5">\n          <div class="alert alert-success row" role="alert">\n            <p>\n                <span>\n                  <i class="glyphicon glyphicon-sunglasses"></i> \u5565\u4E5F\u6728\u6709~\n                </span>\n              <button type="button" class="btn btn-success" ng-click="list.doClearSearch()">\n                \u91CD\u65B0\u641C\u7D22\u5427\n              </button>\n            </p>\n          </div>\n        </td>\n      </tr>\n\n\n      </tbody>\n    </table>\n\n  </div>\n  <!--list-detail end-->\n\n\n</section>\n');
$templateCache.put('app/controllers/permission/update/index.html','<article id="permission_list_view">\n  <header class="view-title">\n    \u540E\u53F0\u4EBA\u5458\u6743\u9650\u7BA1\u7406-\u7F16\u8F91\n  </header>\n  <section class="content">\n\n    <form name="createForm" class="form-horizontal col-lg-3" ng-submit="update.doUpdate()">\n      <div class="form-group">\n        <label for="realname">\u59D3\u540D:</label>\n        <input type="text" ng-model="update.user.realname" class="form-control" id="realname" placeholder="\u5982:\u5F20\u4E09" required>\n      </div>\n      <div class="form-group">\n        <label for="phone">\u624B\u673A\u53F7:</label>\n        <input type="text" ng-model="update.user.mobile" class="form-control" id="phone" placeholder="11\u4F4D\u624B\u673A\u53F7,\u5982:1311023251" maxlength="11" required>\n      </div>\n      <div class="form-group">\n        <label for="sub-phone">\u5206\u673A\u53F7:</label>\n        <input type="text" ng-model="update.user.extension_number" class="form-control" id="sub-phone" placeholder="\u5206\u673A\u53F7" required>\n      </div>\n      <div class="form-group">\n        <button type="submit" style="margin-left:0" class="btn btn-primary col-lg-4" ng-disabled="createForm.$invalid">\u4FEE\u6539\n        </button>\n        <button type="reset" class="btn btn-default col-lg-4">\u91CD\u5199</button>\n      </div>\n    </form>\n\n  </section>\n</article>\n');}]);