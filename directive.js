var app = angular.module('app', [
	//依赖的包列表
])

app.directive('hello', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change // 创建独立作用域,让替换出来的新指令间互不影响
		// controller: function($scope, $element, $attrs, $transclude) {
			/*	$scope.abilities = [];
				this.addSpeed = function() {
					$scope.abilities.push("speed");
				}
			*/
		// }, // 指令内部的方法
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '', // 替换成该字符串(html标签)
		// templateUrl: '', // 类似ng-view 
		// replace: true,	// 覆盖掉原来的
		// transclude: true,	//保留原来的并添加进ng-transclude里,如"<div>这是新内容<div ng-transclude></div></div>"
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, element, attr, controller) { // 第四个参数需要设置 require : '^hello'(本例), 随后可调用controller里的方法
			// 操作页面DOM
			// 例：鼠标滑动事件
			// element.addClass("btn")
			// element.bind("mouseenter",function(event) {
				// console.log("mouseenter");
				// $scope.load() // 或者调用 $scope上的load函数(如果有)
				// $scope.$apply("load()") // 同上
			// })
			// controller.addSpeed();

		}
	};
});