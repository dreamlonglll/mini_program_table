const app = getApp()

Page({
  data: {

  },
  onLoad: function() {
    //存储每一列最长的长度
    let sizeList = [];
    let head = [{
      "key": "sex",
      "name": "性别"
    }, {
      "key": "name",
      "name": "姓名"
    }, {
      "key": "phone",
      "name": "手机号"
    }, {
      "key": "address",
      "name": "住址"
    }]
    let body = [{
      "sex": "男",
      "name": "A",
      "phone": "123213123213",
      "address": "附近的看法金卡时间分厘卡圣诞节风口浪尖"

    }, {
      "sex": "女",
      "name": "Bbbb",
      "phone": "123",
      "address": "附近的看法金卡时间分厘卡圣诞节风口浪尖附近的看法金卡时间分厘卡圣诞节风口浪尖附近的看法金卡时间分厘卡圣诞节风口浪尖"

    }]
    for (let item in head) {
      for (let it in body) {
        //初始化每一列的长度
        sizeList[item] = sizeList[item] || head[item].name.length;
        //得到每一列中 每一个单元格的内容
        let v = body[it][head[item].key];
        //得到 \w 的长度
        let wSize = v.match(/[\w]/g) || "";
        //得到除上面之外的其他内容的长度
        let otherSize = v.length - wSize.length;
        //计算每一个单元格的长度
        let vSize = wSize.length * 0.5 + otherSize;
        //将最长的一个单元格放入数组中
        if (vSize > sizeList[item])
          sizeList[item] = vSize;
        console.log(item, v, wSize, otherSize, vSize, sizeList[item])
      }
    }

    this.setData({
      sizeList: sizeList,
      head: head,
      body: body

    })

  },
})