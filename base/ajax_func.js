//定义XMLHttpRequest对象实例
var http_request = false;
var tag = false;
//定义可复用的http请求发送函数
function send_request(method,url,content,responseType,callback,alertTag)
{//初始化、指定处理函数、发送请求的函数
    http_request = false;

    //初使化要修改的tag
    tag=alertTag;

    //开始初始化XMLHttpRequest对象
    if(window.XMLHttpRequest)
    { //Mozilla 浏览器
        http_request = new XMLHttpRequest();
        if (http_request.overrideMimeType)
        {//设置MiME类别
            http_request.overrideMimeType("text/xml");
        }
    }

    else if (window.ActiveXObject)
    { // IE浏览器
        try
        {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e)
        {
            try
            {
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
        }
    }

    if (!http_request)
    { // 异常，创建对象实例失败
        window.alert("不能创建XMLHttpRequest对象实例.");
        return false;
    }

    if(responseType.toLowerCase()=="text")
    {
        //http_request.onreadystatechange = processTextResponse;
        http_request.onreadystatechange = function() {
            callback(tag);
        };
    }

    else if(responseType.toLowerCase()=="xml")
    {
        //http_request.onreadystatechange = processXMLResponse;
        http_request.onreadystatechange = function() {
            callback(tag);
        };
    }
    else
    {
        window.alert("响应类别参数错误");
        return false;
    }

    // 确定发送请求的方式和URL以及是否异步执行下段代码
    if(method.toLowerCase()=="get")
    {
        http_request.open(method, url, true);
        http_request.setRequestHeader("Content-Type","text/html; charset=GBK");
    }
    else if(method.toLowerCase()=="post")
    {
        http_request.open(method, url, true);
        http_request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    }
    else {
        window.alert("http请求类别参数错误");
        return false;
    }
    http_request.send(content);
}


//处理返回的XML格式文档的函数
function processXMLResponse()
{
    if (http_request.readyState == 4)
    { // 判断对象状态
        if (http_request.status == 200)
        { // 信息已经成功返回，开始处理信息
            //alert(http_request.responseXML);
            if(http_request.responseXML.getElementsByTagName("estate")[0].firstChild.data=="1"){
                arraynoNameTag = tag.parentNode.previousSibling.firstChild;
                arraynoNameTag.innerText=tag.previousSibling.previousSibling.previousSibling.previousSibling.value;
                //alertMode(null,'alertMode','textMode');
                document.getElementById("alertBtn").innerText="修改完毕";
            }
        } else
        { //页面不正常
            document.getElementById("alertBtn").innerText="操作失败,请联系开发员...";
        }
    }
    else
    {
        document.getElementById("alertBtn").innerText="正在修改,请稍候...";
    }
}