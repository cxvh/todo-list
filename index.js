
function initToDoList(jq) {
	window.todoChange(dir){
		jq('#todo').css('text-align', dir)
	}
	const obj = document.createElement('script')
	obj.src = 'main.js'
	document.querySelector('head').appendChild(obj)
	jq('[data-todolist]').addClass('lackkTodo').html(`<div id=TodoCon></div><div class=TodoAdd><textarea id=todo onblur="todoChange('right')" onfocus="todoChange('left')" placeholder="To do list_"></textarea> <button id=add>Todo</button></div>`)
	jq('head').append(`<style>[data-todolist].lackkTodo{position:absolute;top:0;right:0;}[data-todolist].lackkTodo::selection{color:#fff;background:#000;}[data-todolist] #TodoCon{max-width:240px;height:300px;overflow-y:scroll;padding:20px;}[data-todolist] .list{margin-top:10px;height:30px;display:flex;text-align:center;}[data-todolist] .listtodo{margin-bottom:30px;display:flex;flex-direction:column;align-items:flex-end;}[data-todolist] .listtodo:hover .operation{display:block;opacity:1;}[data-todolist] .todoTxt{white-space:pre-wrap;width:100%;text-align:right;font-size:12px;color:#fff;line-height:1.7;letter-spacing:1px;display:flex;justify-content:flex-end;}[data-todolist] .todoTime{margin-top:10px;font-size:12px;color:#fff;display:flex;flex-direction:column;align-items:flex-end;letter-spacing:1px;}[data-todolist] .operation{margin-top:-20px;opacity:0;transition:all 0.3s linear;align-self:end;z-index:1;}[data-todolist] .operation button{padding:2px 6px;background-color:#fff;color:#fff;border:none;outline:none;cursor:pointer;}[data-todolist] .TodoDone{background-image:url(https://cdn.jsdelivr.net/gh/cxvh/todo-list@main/ok.svg);background-repeat:no-repeat;background-size:18px;background-position:1px 1px;width:20px;height:20px;border-radius:20px;}[data-todolist] .TodoDone:hover{background-color:#50aa50;background-image:url(https://cdn.jsdelivr.net/gh/cxvh/todo-list@main/okHover.svg);background-repeat:no-repeat;}[data-todolist] .TodoDel{background-image:url(https://cdn.jsdelivr.net/gh/cxvh/todo-list@main/close.svg);background-repeat:no-repeat;background-size:10px;background-position:5px 5px;width:20px;height:20px;border-radius:20px;margin-left:10px;}[data-todolist] .TodoDel:hover{background-color:#50aa50;background-image:url(https://cdn.jsdelivr.net/gh/cxvh/todo-list@main/closeHover.svg);background-repeat:no-repeat;}[data-todolist] .line{color:#fff !important;}[data-todolist] .line .todoTxt{text-decoration:line-through;color:#fff !important;opacity:0.6;}[data-todolist] .line .todoTime{color:#fff !important;opacity:0.6;}[data-todolist] .line .TodoDone{display:none;}[data-todolist] .line .TodoDel{margin-left:0;}[data-todolist] .TodoAdd{display:flex;flex-direction:column;align-items:flex-end;margin-right:10px;}[data-todolist] #todo{resize:none;text-align:right;border-style:none;outline:none;background:linear-gradient(to left,rgb(255,255,255,0.05),rgb(0,0,0,0),rgb(0,0,0,0));border-radius:1px;width:230px;height:32px;margin-right:10px;min-width:120px;min-height:30px;max-width:230px;max-height:50px;margin-top:20px;font-size:12px;line-height:1.5;color:#fff;padding:5px;}[data-todolist] .TodoAdd button{width:50px;height:20px;margin-top:12px;margin-right:12px;font-size:12px;background-color:#50aa50;color:#fff;border-radius:2px;border:none;outline:none;cursor:pointer;letter-spacing:2px;}[data-todolist] #todo::-webkit-input-placeholder{color:#fff;opacity:0.7;}[data-todolist] #TodoCon::-webkit-scrollbar{width:1px;height:0;}[data-todolist] #TodoCon::-webkit-scrollbar-button{background:#50aa50;height:0px;}[data-todolist] #TodoCon::-webkit-scrollbar-track{background:rgba(255,255,255,0);}[data-todolist] #TodoCon::-webkit-scrollbar-track-piece{background-color:rgba(237,237,237,0);}[data-todolist] #TodoCon::-webkit-scrollbar-thumb{background-color:rgba(255,255,255,0.5);}[data-todolist] #TodoCon::-webkit-scrollbar-thumb:hover{background-color:#50aa50;}</style>`)
}
if (window.jQuery) {
	initToDoList(window.jQuery)
} else {
	const obj = document.createElement('script')
	obj.src = 'https://cdn.bootcdn.net/ajax/libs/jquery/3.3.1/jquery.min.js'
	obj.onload = function () {
		initToDoList(window.jQuery)
	}
	document.querySelector('head').appendChild(obj)

}

