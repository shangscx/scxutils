export const judgeType = (obj) => {
  //判断数据类型
let class2type = {}
'Array Date RegExp Object Error'.split(' ').forEach(e => class2type[ '[object ' + e + ']' ] = e.toLowerCase()) 
  if (obj == null) return String(obj)
  return typeof obj === 'object' ? class2type[ Object.prototype.toString.call(obj) ] || 'object' : typeof obj
}

export const getRequst = (strName) => {
    //获取地址栏参数
  let str = window.location.href;
  let intPos = str.indexOf("?");
  let strRight = str.substr(intPos + 1);
  let arrTmp = strRight.split("&");
  for (let i = 0; i < arrTmp.length; i++) {
    let arrTemp = arrTmp[i].split("=");
    if (arrTemp[0].toUpperCase() == strName.toUpperCase()) return arrTemp[1];
  }
  return "";
}