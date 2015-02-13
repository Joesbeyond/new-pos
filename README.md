[题目练习需求]

涉及的知识点

- 多态
- 策略模式
- 工厂模式 & 单例模式
- 组合模式
- 装饰者模式

商店里进行购物结算时会使用收银机（POS）系统，这台收银机会在结算时根据客户的购物车（Cart）中的商品（Item）和商店正在进行的优惠活动（Promotion）进行结算和打印购物清单。商店会进行“打折”和“满即减”的两种类型优惠。要求整个系统能够实现四种优惠策略。

```` javascript

var allItems = [
new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐'),
new Item('ITEM000010', '可口可乐550ml', '瓶', 4.00, '可口可乐'),
new Item('ITEM000001', '雪碧', '瓶', 3.00, ''),
new Item('ITEM000007', '果粒橙', '瓶', 3.50, ''),

new Item('ITEM000002', '云山苹果', '斤', 5.50, '云山'),
new Item('ITEM000003', '云山荔枝', '斤', 15.00, '云山'),
new Item('ITEM000004', '电池', '个', 2.00, ''),
new Item('ITEM000005', '康师傅方便面', '袋', 4.50, '康师傅'),
new Item('ITEM000008', '康师傅冰红茶', '瓶', 3.00, '康师傅'),
new Item('ITEM000006', '羽毛球', '个', 1.00, '')
];

````


### 打折优惠
有三种类型的打折：

* 单品打折，比如
- 雪碧享受“九五折”
- 可口可乐350Ml享受“九五折”
* 品牌打折，比如
- 可口可乐品牌所有商品享受“九折”优惠
* 全场打折，但某些商品不参加，比如
- 除了商品C外全场九折，购买A需花费90元，购买B需花费10元，购买C需花费50元，
则最后需要付钱(90+10)*0.9+50=140元


### 满即减优惠
有三种类型的满即减：

* 单品享受满100减5的优惠，比如
- 苹果满100减5
* 品牌享受满100减2的优惠，比如
- 康师傅品牌的商品满100减2
* 全场商品总价享受满100减3的优惠，单某些商品不参加，比如
- 除了商品C外全场商品总价满100减3，购买A需花费90元，购买B需花费30元，购买C需花费50元，
则最后需要付钱90+30-3+50=167元

### 优惠策略

#### 策略1
单品打折 & 品牌打折同时存在时，品牌打折有效，单品打折无效。
可口可乐品牌所有商品享受“九折”优惠，可口可乐350Ml享受“九五折”优惠。
在其他优惠基础上，除了参与品牌打折或单品打折的商品以及康师傅方便面外，其他所有商品的总价继续享受满100减3的优惠。

````javascript
[
{ 'ITEM000000' : 20 },
{ 'ITEM000010' : 20 },
{ 'ITEM000005' : 30 },
{ 'ITEM000003' : 12 }
]
````

````
***<没钱赚商店>购物清单***
打印时间：2014年08月04日 08:09:05

----------------------
名称：可口可乐350ml，数量：20瓶，单价：3.00(元)，小计：60.00(元)
名称：可口可乐550ml，数量：20瓶，单价：4.00(元)，小计：80.00(元)
名称：康师傅方便面，数量：30袋，单价：4.50(元)，小计：135.00(元)
名称：云山荔枝，数量：12斤，单价：15.00(元)，小计：180.00(元)

----------------------
优惠信息：
名称：可口可乐品牌打折，金额：14.00元
名称：满100减3，金额：3.00元

----------------------
总计：438.00(元)
节省：17.00(元)9
**********************
````

#### 策略2
单品打折 & 品牌打折同时存在时，单品打折有效，品牌打折无效。
可口可乐品牌所有商品享受“九折”优惠，可口可乐350Ml享受“九五折”。
康师傅品牌所有商品总价享受“满100减2”优惠。
云山荔枝总价享受“满100减5”优惠。

````javascript
[
{ 'ITEM000000' : 20 },
{ 'ITEM000010' : 20 },
{ 'ITEM000005' : 30 },
{ 'ITEM000008' : 25 },
{ 'ITEM000003' : 8  },
{ 'ITEM000002' : 14 }
]
````

````
***<没钱赚商店>购物清单***
打印时间：2014年08月04日 08:09:05

----------------------
名称：可口可乐350ml，数量：20瓶，单价：3.00(元)，小计：60.00(元)
名称：可口可乐550ml，数量：20瓶，单价：4.00(元)，小计：80.00(元)
名称：康师傅方便面，数量：30袋，单价：4.50(元)，小计：135.00(元)
名称：康师傅冰红茶，数量：25瓶，单价：3.00(元)，小计：75.00(元)
名称：云山荔枝，数量：8斤，单价：15.00(元)，小计：120.00(元)
名称：云山苹果，数量：14斤，单价：5.50(元)，小计：77.00(元)

----------------------
优惠信息：

名称：可口可乐350ml单品打折，金额：3.00元
名称：可口可乐品牌打折，金额：8.00元
名称：康师傅品牌满100减2，金额：4.00元
名称：云山荔枝满100减5，金额：5.00元

----------------------
总计：527.00(元)
节省：20.00(元)
**********************
````

#### 策略3
单品优惠 & 品牌优惠同时存在时，单品优惠和品牌优惠都有效，先计算单品优惠，在其基础上按照优惠价继续计算品牌优惠。（优惠包括打折 & 满减）
可口可乐品牌所有商品享受“九折”优惠，可口可乐350Ml享受“九五折”优惠。
康师傅品牌享有商品总价享受“满100减2”的优惠。
在其他优惠基础上，除了云山苹果外，其他所有商品优惠后的总价继续享受“满100减5”的优惠。

````javascript
[
{ 'ITEM000000' : 20 },
{ 'ITEM000010' : 30 },
{ 'ITEM000005' : 30 },
{ 'ITEM000008' : 25 },
{ 'ITEM000003' : 8  },
{ 'ITEM000002' : 14 }
]

````

````
***<没钱赚商店>购物清单***
打印时间：2014年08月04日 08:09:05

----------------------
名称：可口可乐350ml，数量：20瓶，单价：3.00(元)，小计：60.00(元)
名称：可口可乐550ml，数量：30瓶，单价：4.00(元)，小计：120.00(元)
名称：康师傅方便面，数量：30袋，单价：4.50(元)，小计：135.00(元)
名称：康师傅冰红茶，数量：25瓶，单价：3.00(元)，小计：75.00(元)
名称：云山荔枝，数量：8斤，单价：15.00(元)，小计：120.00(元)
名称：云山苹果，数量：14斤，单价：5.50(元)，小计：77.00(元)

----------------------
优惠信息：

名称：可口可乐350ml单品打折，金额：3.00元
名称：可口可乐品牌打折，金额：17.70元
名称：康师傅品牌满100减2，金额：4.00元
名称：满100减5，金额：20.00元

----------------------
总计：542.30(元)
节省：44.70(元)
**********************
````

#### 策略4
单品打折 & 品牌打折同时存在时，单品打折和品牌打折都有效，单品打折和品牌打折都按原价计算。
可口可乐品牌所有商品享受“九折”优惠，可口可乐350Ml享受“九五折”优惠。
果粒橙总价享受“满100减5”的优惠。
云山品牌的所有商品总价享受“满100减2”的优惠。
在其他优惠基础上，除雪碧外，其他所有商品优惠后的总价继续享受“九折”优惠。

````javascript
[
{ 'ITEM000000' : 20 },
{ 'ITEM000010' : 30 },
{ 'ITEM000001' : 30 },
{ 'ITEM000007' : 40 },
{ 'ITEM000003' : 8  },
{ 'ITEM000002' : 14 }
]

````

````
***<没钱赚商店>购物清单***
打印时间：2014年08月04日 08:09:05

----------------------
名称：可口可乐350ml，数量：20瓶，单价：3.00(元)，小计：60.00(元)
名称：可口可乐550ml，数量：30瓶，单价：4.00(元)，小计：120.00(元)
名称：雪碧，数量：30瓶，单价：3.00(元)，小计：90.00(元)
名称：果粒橙，数量：40瓶，单价：3.50(元)，小计：140.00(元)
名称：云山荔枝，数量：8斤，单价：15.00(元)，小计：120.00(元)
名称：云山苹果，数量：14斤，单价：5.50(元)，小计：77.00(元)

----------------------
优惠信息：

名称：可口可乐350ml单品打折，金额：3.00元
名称：可口可乐品牌打折，金额：18.00元
名称：果粒橙满100减5，金额：5.00元
名称：云山品牌满100减2，金额：2.00元
名称：九折，金额：48.90元

----------------------
总计：530.10(元)
节省：76.90(元)
**********************
````

我们需要实现一个名为printInventory函数，该函数能够将指定格式的数据作为参数输入，然后在浏览器的控制台中输出结算清单的文本。

输入格式（样例）：

````javascript
[
{'ITEM000003': 2},
{'ITEM000004': 2}
]
````

其中 ":"之前的是标准的条形码，":"之后的是数量。
