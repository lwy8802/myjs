//<input type="text" /> 不为空验证
//textInput HTML标签 要验证的<input type="text" />标签
function inputTextNotNull(textInput) {
    return textInput.value !== "" ? true : false;
}

//校验帐号：只能输入以字母开头、可带数字、“_”、“.”的字串
function inputTextIsAcount(textInput){
    var patrn=/^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/;
    if (!patrn.exec(textInput.value)) return false
    return true
}

//<input type="text" /> 长度验证
//textInput HTML标签 要验证的<input type="text" />标签
//minLength 整数类型 设置length不得小于minLength minLength等于0不进行验证
//maxLength 整数类型 设置length不得大于minLength minLength等于0时不进行验证
function inputTextLength(textInput, minLength, maxLength) {
    //alert(textInput.value.length);
    var bool = false;
    if (textInput.value.length > 0) {
        if (minLength > 0) {
            textInput.value.length >= minLength ? bool = true : bool = false;
        }
        if (!bool) {
            return;
        }
        if (maxLength > 0) {
            textInput.value.length <= maxLength ? bool = true : bool = false;
        }
    }
    return bool;
}

//<input type="text" /> 是否为email验证
//textInput HTML标签 要验证的<input type="text" />标签
function inputTextIsEmail(textInput) {
    if (inputTextNotNull(textInput)) {
        if (inputTextLength(textInput, 7, 0)) {
            return isEmail(textInput.value);
        }
    }
    return null;
}

//email验证
//email 字符串类型 email字符串
function isEmail(email) {
    var emailPat = /^(.+)@(.+)$/;
    var matchArray = email.match(emailPat);
    if (matchArray == null) {
        return false;
    } else {
        return true;
    }
}

//只能输入数字
//用于 <input type="text" /> 标签,onkeydown事件 (例：<input onkeydown="onlyNum();">
function onlyNum() {
    if (!((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105) || event.keyCode==8)) {
        event.returnValue = false;
    }
}

//url验证
//url 字符串类型 url字符串
function isUrl(url) {
    var urlPat ="^((https|http|ftp|rtsp|mms)?://)"
        + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" //ftp的user@
        + "(([0-9]{1,3}.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184
        + "|" // 允许IP和DOMAIN（域名）
        + "([0-9a-z_!~*'()-]+.)*" // 域名- www.
        + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]." // 二级域名
        + "[a-z]{2,6})" // first level domain- .com or .museum
        + "(:[0-9]{1,4})?" // 端口- :80
        + "((/?)|" // a slash isn't required if there is no file name
        + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
    var matchArray = url.match(urlPat);
    if (matchArray == null) {
        return false;
    } else {
        return true;
    }
};

