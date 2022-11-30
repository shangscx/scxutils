export function judgeType (obj) {
  // 判断数据类型
  const class2type = {};
  'Array Date RegExp Object Error'.split(' ').forEach((e) => class2type[`[object ${e}]`] = e.toLowerCase());
  if (obj == null) return String(obj);
  return typeof obj === 'object' ? class2type[Object.prototype.toString.call(obj)] || 'object' : typeof obj;
};

export function getAddressParam (strName)  {
  // 获取地址栏参数
  const str = window.location.href;
  const intPos = str.indexOf('?');
  const strRight = str.substr(intPos + 1);
  const arrTmp = strRight.split('&');
  for (let i = 0; i < arrTmp.length; i++) {
    const arrTemp = arrTmp[i].split('=');
    if (arrTemp[0].toUpperCase() == strName.toUpperCase()) return arrTemp[1];
  }
  return '';
};


export function getUrlQuery(url) {
  const index = url.indexOf('?');
  const obj = {};
  if(index === -1) return obj;
  const queryStr = url.slice(index + 1);
  const arr = queryStr.split('&');
  for(item of arr) {
    const keyValue = item.split('=');
    obj[keyValue[0]] = keyValue[1]
  }
  return obj;
}