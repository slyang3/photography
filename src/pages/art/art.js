// 获取应用实例
const app = getApp()

Page({
  data: {
    bannerList:[{
        bannerUri:'/assets/image/img1.png'
    },{
        bannerUri:'/assets/image/img2.png'
    },{
        bannerUri:'/assets/image/img3.png'
    },{
        bannerUri:'/assets/image/img4.png'
    }],

    productList:[{
        name:'《主题》展览全部照片',
        time:'刚刚',
        headerUrl:'/assets/image/demo1.png',
        productUrl:['/assets/image/img3.png','/assets/image/img4.png'],
        descript:'我们不只是用相机拍照，我们带到摄影中去的是所有我们读过的书、看过的电影、听过的音乐、走过的路、爱过...',
        isNotShowOperate:1,
        shareNum:'',
        msgNum:223,
        thumbsUpNum:1089
      },{
        name:'《主题》展览全部照片',
        time:'1小时之前',
        headerUrl:'/assets/image/demo2.png',
        productUrl:['/assets/image/img1.png'],
        descript:'今日份小岛美图送上，希望大家喜欢♥~#海岛摄影#',
        isNotShowOperate:1,
        shareNum:'',
        msgNum:1023,
        thumbsUpNum:189
      }]
  },
 
  onLoad() {
    
  }
  
})
