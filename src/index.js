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
const isObj = (val) => typeof val === "object" && val !== null;

// 写法1
export function deepClone(obj) {
    // 通过 instanceof 去判断你要拷贝的变量它是否是数组（如果不是数组则对象）。

    // 1. 准备你想返回的变量（新地址）。
    const newObj = obj instanceof Array ? [] : {}; // 核心代码。

    // 2. 做拷贝；简单数据类型只需要赋值，如果遇到复杂数据类型就再次进入进行深拷贝，直到所找到的数据为简单数据类型为止。
    for (const key in obj) {
        const item = obj[key];
        newObj[key] = isObj(item) ? deepClone(item) : item;
    }

    // 3. 返回拷贝的变量。
    return newObj;
}