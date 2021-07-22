// 获取应用实例
const app = getApp()

Page({
  data: {
    productList:{
        name:'《主题》展览全部照片',
        time:'刚刚',
        headerUrl:'/assets/image/demo1.png',
        productUrl:['/assets/image/pic_1.png'],
        descript:'我们不只是用相机拍照，我们带到摄影中去的是所有我们读过的书、看过的电影、听过的音乐、走过的路、爱过...',
        isNotShowOperate:1,
        shareNum:'',
        msgNum:223,
        thumbsUpNum:1089
      }
  },
 
  onLoad() {
    
  }
  
})
