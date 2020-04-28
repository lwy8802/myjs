//屏蔽状态栏错误提示
function closeErrors(){
    return true;
}
//window.onerror=closeErrors;
//屏蔽代码结束

/*
 *selectElement是一个下拉例表框HTML DOM的操作对象(该类需要页面引用base.js)
 */
function SelectElement(selectElement) {
    this._selectElement = selectElement;	//属性

    //删除所有列表项(方法)
    this.removeAll = function () {
        var optionCount = this._selectElement.length;
        for (var i = 0; i < optionCount; i++) {
            this._selectElement.remove(0);
        }
    };

    //添加列表项(方法)	(可以只传一个参数strOptionTest,当传一个参数时,应该将option对象做为参数传入)
    this.add = function (strOptionTest,strOptionValue) {
        if(strOptionTest.nodeName=="OPTION"){
            this._selectElement.add(strOptionTest);
            return strOptionTest;
        }else{
            option = createSubNode(this._selectElement,"option");
            createAttributeToNode(option,"value",strOptionValue);
            createTxtNodeToNode(option,strOptionTest);
            return option;
        }
    };

    //返回当前选中项的值
    this.getValue = function(){
        return this._selectElement.value;
    }

    //返回当前选项
    this.getSelected=function() {
        return this._selectElement.options[this._selectElement.selectedIndex];
    }

    //设置当前选中的例表项值为和参数所传入的值相同的例表项
    this.selected=function(strValue){
        for(var i=0;i<this._selectElement.length;i++){
            if(strValue==this._selectElement.options[i].value){
                this._selectElement.options[i].selected="selected";
            }
        }
    }

}







