/**
 * Created by Administrator on 2016/12/9.
 */
function goLink(src){
    window.location.href=src;
}

//给节点添加属性 参数:node(节点),subNodeName(属性名称),nodeValue属性值
function createAttributeToNode(node, attributeName, attributeValue) {
    //创建属性
    var attribute = document.createAttribute(attributeName);
    //设置属性值
    attribute.value = attributeValue;
    //给节点添加属性(将属性添加到指定节点)
    node.setAttributeNode(attribute);
    return attribute;
}

//创建文本节点到指定节点
function createTxtNodeToNode(node, txtNodeName) {
    var txtNode = document.createTextNode(txtNodeName);
    //添加到指定节点
    node.appendChild(txtNode);
}


//创建子节点,返回创建的子节点 参数:node(父节点),subNodeName(子节点名称)
function createSubNode(node, subNodeName) {
    var subNode = document.createElement(subNodeName);
    //将创建的节点添加到指定节点(给创建的节点添加(指定)父节点)
    node.appendChild(subNode);
    return subNode;
}

//参数说明：str表示原字符串变量，flg表示要插入的字符串，sn表示要插入的位置
function replacePos(strObj, pos, replacetext)
{
    var str = strObj.substr(0, pos-1) + replacetext + strObj.substring(pos, strObj.length);
    return str;
}