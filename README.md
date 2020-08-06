Free-Api

# 将提供一些免费的 api 接口，随便使用

- 如果访问量大了，大家都会变慢
- 服务器只提供有限带宽

## 可用时间问题

- 从 2020 年起 1 年内是没有问题的，
- 朋友借用的临时域名，未来会单独申请

## 框架基础

- github 上 meeko 和 skybase
- https://github.com/kongnet
- [一些分享](https://free.xiaojia7879.com/doc)

| 分类     | 地址                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | 类型 | 参数说明                                                | 频度限制 |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- | ------------------------------------------------------- | -------- |
| 教育     | [历史上的今天](https://free.xiaojia7879.com/v1/today?isJson=1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | GET  | isJson=1，没有返回 html，否则 json                      | 无       |
| 开发工具 | [图片占位符](https://free.xiaojia7879.com/v1/img?size=100x100)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | GET  | size=100x100，只返回 image                              | 无       |
| 开发工具 | [二维码](https://free.xiaojia7879.com/v1/qrcode)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | GET  | str=你的字符串，只返回 html                             | 无       |
| 心灵     | [bing 每日](https://free.xiaojia7879.com/v1/getBing)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | GET  | 无，只返回 html                                         | 无       |
| 教育     | [化学方程式配平](https://free.xiaojia7879.com/v1/chem)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | GET  | eqInput=配平前方程，只返回 json                         | 无       |
| 开发工具 | [图表转图片](<https://free.xiaojia7879.com/v1/chartImg?chartJsonStr={%22type%22:%22bar%22,%22data%22:{%22labels%22:[%22Red%22,%22Blue%22,%22Yellow%22,%22Green%22,%22Purple%22,%22Orange%22],%22datasets%22:[{%22label%22:%22%E6%9D%A1%E7%8A%B6%E5%9B%BE%22,%22data%22:[29,19,3,5,2,13],%22backgroundColor%22:[%22rgba(255,%2099,%20132,%200.2)%22,%22rgba(54,%20162,%20235,%200.2)%22,%22rgba(255,%20206,%2086,%200.2)%22,%22rgba(75,%20192,%20192,%200.2)%22,%22rgba(153,%20102,%20255,%200.2)%22,%22rgba(255,%20159,%2064,%200.2)%22],%22borderColor%22:[%22rgba(255,%2099,%20132,%201)%22,%22rgba(54,%20162,%20235,%201)%22,%22rgba(255,%20206,%2086,%201)%22,%22rgba(75,%20192,%20192,%201)%22,%22rgba(153,%20102,%20255,%201)%22,%22rgba(255,%20159,%2064,%201)%22],%22borderWidth%22:1}]}}>) | GET  | chartJsonStr=chart.js 对象定义，返回 jpg                | 无       |
| 开发工具 | [Mock 数据](<https://free.xiaojia7879.com/v1/mock?mockJsonStr={"name":"@genName","str":"@genData('abcdefghijklmnopqrstuvwxyz',10)","datetime":"@genDatetime('2016-1-1','2016-2-2')","card":"@genCard","url":"@genUrl(5)","phoneNum":"@genPhone","color":"@genColor","colorRGBA":"@genColor('rgba')","ip":"@genIp","word":"@genWord(10)","word0":"@genWord","sentence":"@genText(20)","sentence20":"@genText(20)","sentence10":"@genText(10)","sentence0":"@genText","sentence1":"@genBeautyText","constellation":"@genConstellation"}>)                                                                                                                                                                                                                                                             | GET  | mockJsonStr=mock 的定义，只返回 json                    | 无       |
| 开发工具 | [不安全密码检测](https://free.xiaojia7879.com/v1/checkPwd?pwdStr=123456)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | GET  | pwdStr=123456，长度[2,20]，只返回 json                  | 无       |
| 开发工具 | [二维码识别](https://free.xiaojia7879.com/v1/readQR)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | POST | qrStr=**网址** 或 **base64**，带 **data:image** ， json | 无       |
| 开发工具 | [手机归属地查询](https://free.xiaojia7879.com/v1/phone?phoneStr=13052000011)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | GET  | phoneStr=中国手机号码，长度[11,11]，只返回 json         | 无       |
| 开发工具 | [IP 地址查询](https://free.xiaojia7879.com/v1/ip?ipStr=8.8.8.8)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | GET  | ipStr=8.8.8.8，只返回 json                              | 无       |
| 教育     | [中英翻译](https://free.xiaojia7879.com/v1/trans?transStr=你好世界)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | GET  | transStr=，transType=**c2e** 或 e2c 只返回 json         | 无       |
| 企业     | [企业名称速查]()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | GET  | 暂不公开:smile: 只返回 json                             | 无       |
| 开发工具 | [经纬度反查](https://free.xiaojia7879.com/v1/latlng?lat=39.9151612600&lng=116.4039217800)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | GET  | latlngType=gd,否则认为是百度地图 只返回 json            | 无       |
| 信息     | [新冠 19 明细报告](https://free.xiaojia7879.com/v1/coviHtml)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | GET  | displayType=desc 明细只返回 html                        | 无       |

## 特别用法说明

#### 化学方程式配平

- eqInput 在浏览器地址栏，需要参数转义，例如 C3H8+O2=CO2+H2O =>C3H8%2BO2%3DCO2%2BH2O
- **+** => %2B **=** => %3D
- 默认 O2+H2=H2O 配平
- 离子键括号要展开,(OH)2 => O2H2

#### 图表转图片

- chartJsonStr 是 chart.js 的数据定义
- 接口返回一张 jpg 图片
- 返回一般需要一些时间

#### 不安全密码检测

- 介意安全问题的，请不要调用此接口
- 以往千万级库中，判定为不安全的密码
- 返回 level 1 极度不安全 2 不安全，1 周内可破解 3 较安全 ，安不安全都是相对的

#### 二维码识别

- POST 方式
- qrStr=https://bkimg.cdn.bcebos.com/pic/2934349b033b5bb571dc8c5133d3d539b600bc12?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg

#### 经纬度反查

- 本地库实现，查询性能达到 5000 次/秒
- latlngType 参数默认 gd，否则认为是 baidu 坐标会转换成火星坐标
- 使用 8 方向再查，判断最短距离，点位在 2 个区的边界处会有误差

#### mock 数据

- 基础语法同 mock.js，本身扩展如下带有注解的函数

```javascript
{
  'list|2-2': [
    {
      'id|+1': 100,
      name: `@genName`,// 随机生成中文姓名,长度为2或3
      str: `@genData('abcdefghijklmnopqrstuvwxyz',10)`,// 随机生成长度为n的指定枚举字符串
      datetime: `@genDatetime('2016-1-1','2016-2-2')`,// 随机两个日期之间的某个日期
      card: `@genCard`,//随机生成中国身份证号码,符合检验规则
      url: `@genUrl(5)`,// 随机生成url
      phoneNum: `@genPhone`,// 随机生成中国手机号
      color: `@genColor`,// 随机生成颜色
      colorRGBA: `@genColor('rgba')`,
      ip: `@genIp`,// 随机生成ip地址
      word: '@genWord(10)',// 随机生成指定长度中文字
      word0: '@genWord',// 随机生成1个中文字
      sentence: `@genText(20)`,// 随机生成指定长度文字段落
      sentence20: `@genText(20)`,
      sentence10: `@genText(10)`,
      sentence0: `@genText`,
      sentence1: `@genBeautyText`,// 随机生成优美语句
      constellation: `@genConstellation`,// 随机生成星座
      bool: `@genBool`,
      genEnum1: `@genEnum(['5',6,7])`,// 随机返回指定枚举
      genEnum0: `@genEnum`,
      genEnum2: `@genEnum(['5x','6x','7x'])`,
      status: `@genEnum([[],null,''])`,
      skuCode: null,
      arrList: `@genList(10)`,// 返回指定数组长度数组，并按默认step1 自增
      arrList2: `@genList(10,2)`
    }
  ]
}
```

- 将 json 变成字符串后，给 mockJsonStr 调用接口
