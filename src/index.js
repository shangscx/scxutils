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

// 写法1
export function deepClone(obj) {
  // 如果是 值类型 或 null，则直接return
  if(typeof obj !== 'object' || obj === null) {
      return obj
  }
  // 定义结果对象
  let copy = {}
  
  // 如果对象是数组，则定义结果数组
  if(obj.constructor === Array) {
      copy = []
  }
  // 遍历对象的key
  for(let key in obj) {
      // 如果key是对象的自有属性
      if(obj.hasOwnProperty(key)) {
          // 递归调用深拷贝方法
          copy[key] = deepClone(obj[key])
      }
  }
  
  return copy;
} 



export function dateFormat(dtStr){
  const dt = new Date(dtStr);
  const y = dt.getFullYear()
  const m = padZero(dt.getMonth() + 1);
  const d = padZero(dt.getDate());

  const hh = padZero(dt.getHours());
  const mm = padZero(dt.getMinutes());
  const ss = padZero(dt.getSeconds());

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}
//定义补0函数
function padZero(n){
 return  n>9 ? n : `0${n}`
}


//转义html字符
