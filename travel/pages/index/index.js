//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: [{
      title: '周边游'
    }, {
      title: '国内游'
    }, {
      title: '国际游'
    }, {
      title: '骑友'
    }],
    nav: [{
      img: '../../images/icon1.jpg',
      title: '定制旅游'
    }, {
      img: '../../images/icon2.jpg',
      title: '经典路线'
    }, {
      img: '../../images/icon3.jpg',
      title: '包车服务'
    }],
    city: [{
      img: '../../images/img1.jpg',
      title: '日本6日游香港直飞'
    }, {
      img: 'http://ynly2019.sfhxdfgl.com/images/31.jpeg',
      title: '西双版纳三日游'
    }, {
      img: 'http://ynly2019.sfhxdfgl.com/images/36.jpeg',
      title: '云南大理七日游'
    }, {
      img: 'http://ynly2019.sfhxdfgl.com/images/345.jpg',
      title: '香格里拉美丽风景区'
    }, {
      img: 'http://5b0988e595225.cdn.sohucs.com/images/20190210/df8c66df452b407aac74bbdc123e0bfc.jpeg',
      title: '北京一日游'
    }],
    city2: [{
      img: 'http://5b0988e595225.cdn.sohucs.com/images/20190210/d15c4c81f63c4b89b962b7c40a3651fe.jpeg',
      title: '日本6日游香港直飞'
    }, {
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559651380&di=f4c04b917edbfa319c902ba3e54d8214&imgtype=jpg&er=1&src=http%3A%2F%2Fhwxjp.com%2FPublic%2FUploads%2F2018-04-11%2F5acd6133ebe9d.jpg',
      title: '西双版纳三日游'
    }, {
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559651409&di=f145b144a5f995b2be672ef916bd032a&imgtype=jpg&er=1&src=http%3A%2F%2Fimg1.qunarzz.com%2Ftuan%2Fteam%2F2012%2F1114%2F13528892960000.jpg',
      title: '美丽丽江三日游'
    }, {
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559056723521&di=a1dc0b875709fe643f569f8507253574&imgtype=0&src=http%3A%2F%2Fs6.sinaimg.cn%2Fmw690%2F001PyAZKty6N0Mu1K5v65%26690',
      title: '玉龙雪山风景区'
    }, {
      img: 'http://ynly2019.sfhxdfgl.com/images/344.jpg',
      title: '美丽的自然风景'
    }],
    newList: []
  },
  click(e) {
    if (e.currentTarget.dataset.ind === 0) {
      wx.navigateTo({
        url: '/pages/root/index',
      })
    }
  },
  detail(e) {
    let img = e.currentTarget.dataset.detail.cover
    let title = e.currentTarget.dataset.detail.title
    wx.navigateTo({
      url: '/pages/detail/index?img=' + img + '&title=' + title
    })
  },
  friend(e) {
    if (e.target.dataset.ind == 3) {
      wx.navigateTo({
        url: '/pages/friend/index',
      })
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    wx.request({
      url: 'https://m.qyer.com/home/api/biu_list?ajaxID=5cd8d69ef1d508c32233475c',
      success: (res) => {
        this.setData({
          newList: res.data.data
        })
      }
    })
  },
})