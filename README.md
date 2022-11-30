# scxutils
-----------------
<h3>判断数据类型</h3>
<div> import {judge} from 'scxutils' </div>
<div>
judge('str')->string<br/>
judge({})->object<br/>
judge([])->array<br/>
judge(1)->number<br/>
judge(false)->boolean<br/>
</div>

-----------------
<h3>接收字符串格式获取某参数</h3>
<div> import {getAddressParam} from 'scxutils' </div>
https://Desktop/demo/mzdfunctions/index.html?a=1&b=2
<span style="color:#f00">注意传参是单个的取值，不是url地址</span>
<div>
getAddressParam('a')--->1<br/>
getAddressParam('b')--->2<br/>
</div>
-----------------
<h3>将url 问号后的参数转为对象格式</h3>
<div> import {getUrlQuery} from 'scxutils' </div>
<span style="color:#f00">注意传参是个字符串，可以取url地址(location.href)</span>
<div>
let url = https://Desktop/demo/mzdfunctions/index.html?a=1&b=2<br/>
getUrlQuery(url)--->{a:1,b:2}<br/>
</div>


