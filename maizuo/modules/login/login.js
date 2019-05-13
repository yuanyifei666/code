// 登录页面
let loginCallbackBtn = document.querySelector('.callbackImg');

//绑定点击事件,实现历史回退
loginCallbackBtn.onclick = function(){
    window.history.go(-1);
}