/*
 * @name 高亮显示关键字
 * @param { Object } param: {
 *                     dialogId: 弹窗id
 *										 searchBtnId: 搜索按钮id
 *                     searchInputId: 搜索输入框Id
 *                     listId: 数据列表id
 *                     listItemClass：列表每一项的class,
 *										 activeClass: '', // 高亮的class,
 *                     scrollContentId: // 滚动容器Id       
 *                   }
 * @authorBy wilson wang
 * @date 2017-10-20
 */

function highLight (param) {
 	var dialogId = document.querySelector(param.dialogId)
 	var searchBtn = dialogId.querySelector(param.searchBtnId)
 	var searchInput = dialogId.querySelector(param.searchInputId)
 	var list = dialogId.querySelector(param.listId)
 	var listitem = dialogId.querySelectorAll(param.listItemClass)
 	var scrollDom = document.querySelector(param.scrollContentId)
 	var activeClass = param.activeClass

 	var data = [].slice.call(listitem).map(function (item) {
		return {
			text: item.innerText.trim(),
			el: item
		}
	})

 	searchBtn.addEventListener('click', begin)
 	searchInput.addEventListener('change', clear)

 	function clear () {
 		data.forEach(function (item) {
 			item.el.className = item.el.className.replace(param.activeClass, '')
 		})
 	}

 	function begin () {
 		var keyword = searchInput.value.trim()
 		var obj = findObj(data, 'text', keyword)

 		if (obj) {
 			obj.el.className = obj.el.className + ' ' + param.activeClass
 			scrollDom.scrollTop = obj.el.offsetTop - 80
 		} 
 	}
	
 	function findObj (array, key, value) {
		var obj = false
		for (var i = 0; i < array.length; i++) {
			if (array[i][key] == value) {
				obj = array[i]
				return obj
			}
		}
		return obj
	}
}
