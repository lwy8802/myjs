
/*
 *dialog是一个对话框类(该类需要页面引用base.js)
 * title:对话框标题
 * context:对话框内容
 */
function dialog(title,context) {
    //对话框
    var dialogDiv = createSubNode(document.body,"div");
    dialogDiv.style.position="absolute";
    dialogDiv.style.borderRadius="5px";
    dialogDiv.style.border="1px solid #444"
    dialogDiv.style.width="90%";
    dialogDiv.style.backgroundColor="#fff";
    //对话框标题
    var titleDiv = createSubNode(dialogDiv,"div");
    titleDiv.className="flexDiv";
    titleDiv.style.alignItems="center";
    titleDiv.style.webkitAlignItems="center";
    titleDiv.style.justifyContent="center";
    titleDiv.style.webkitJustifyContent="center";
    titleDiv.style.fontSize="3.6rem";
    titleDiv.style.color="#444";
    titleDiv.style.height="47px"
    titleDiv.style.fontFamily="微软雅黑,Open Sans,Arial,sans-serif";
    createTxtNodeToNode(titleDiv,title);
    //内容
    var contextDiv = createSubNode(dialogDiv,"div");
    contextDiv.innerHTML=context;
    //按钮栏
    var btnsDiv = createSubNode(dialogDiv,"div");
    btnsDiv.className="flexDiv";
    btnsDiv.style.flexGrow="1";
    btnsDiv.style.height="50px";
    btnsDiv.style.fontFamily="微软雅黑,Open Sans,Arial,sans-serif";
    //取消钮栏
    var cancelDiv = createSubNode(btnsDiv,"div");
    cancelDiv.className="flexDiv";
    cancelDiv.style.alignItems="center";
    cancelDiv.style.justifyContent="center";
    cancelDiv.style.webkitAlignItems="center";
    cancelDiv.style.webkitJustifyContent="center";
    cancelDiv.style.fontSize="3rem";
    cancelDiv.style.color="#c0392b"
    cancelDiv.style.width=parseInt(btnsDiv.clientWidth/2)+"px";
    cancelDiv.style.cursor="pointer";
    cancelDiv.onmousedown=function(){
        this.style.backgroundColor="#ddd";
    }
    cancelDiv.onmouseup=function(){
        this.style.backgroundColor="";
    }
    createTxtNodeToNode(cancelDiv,"取消");
    //确认钮栏
    var okDiv = createSubNode(btnsDiv,"div");
    okDiv.className="flexDiv";
    okDiv.style.alignItems="center";
    okDiv.style.justifyContent="center";
    okDiv.style.webkitAlignItems="center";
    okDiv.style.webkitJustifyContent="center";
    okDiv.style.fontSize="3rem";
    okDiv.style.color="#2980b9";
    okDiv.style.width=parseInt(btnsDiv.clientWidth/2)+"px";
    okDiv.style.cursor="pointer";
    okDiv.onmousedown=function(){
        this.style.backgroundColor="#ddd";
    }
    okDiv.onmouseup=function(){
        this.style.backgroundColor="";
    }
    createTxtNodeToNode(okDiv,"确认");

    //取得页面宽高
    bodyClientWidth=parseInt(document.body.clientWidth);
    // if(bodyClientWidth<1024)
    //     bodyClientWidth=1024;
    bodyClientHeight=parseInt(document.body.clientHeight);
    //取得对话框宽高
    dialogWidth=parseInt(dialogDiv.clientWidth);
    dialogHeight=parseInt(dialogDiv.clientHeight);
    //设置对话框位置
    dialogDiv.style.left=(bodyClientWidth/2)-(dialogWidth/2);
    dialogDiv.style.top=(bodyClientHeight/2)-(dialogHeight*2);
    //隐藏对话框
    dialogDiv.style.display="none";

    //显示对话框(方法)
    this.show = function () {
        dialogDiv.style.display="block";
    };
    //隐藏对话框(方法)
    this.hide = function () {
        dialogDiv.style.display="none";
    };
    //设置HTML内容
    this.setHtmlContext=function(context){
        contextDiv.innerHTML=context;
    };
    //设置标签内容
    this.setTagContext=function(tag){
        contextDiv.appendChild(tag);
    };
    //设置Ok按钮事件
    this.setOkBtn=function(ok){
        okDiv.onclick=ok;
    };
    //设置取消按钮事件
    this.setCancelbtn=function(clacel){
        cancelDiv.onclick=clacel;
    };

}