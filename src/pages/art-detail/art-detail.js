// 获取应用实例
const app = getApp()

Page({
	data: {
		productList:[{
			name:'《主题》展览全部照片',
			time:'刚刚',
			headerUrl:'/assets/image/demo1.png',
			productUrl:['/assets/image/img3.png'],
			descript:'我们不只是用相机拍照，我们带到摄影中去的是所有我们读过的书、看过的电影、听过的音乐、走过的路、爱过...',
			isNotShowOperate:1,
			shareNum:'',
			msgNum:223,
			thumbsUpNum:1089
		}],

		smallImgList:[{
			url: '/assets/image/img1.png'
		}, {
			url: '/assets/image/img2.png'
		}, {
			url: '/assets/image/img3.png'
		}, {
			url: '/assets/image/img4.png'
    	}]
	},
	
  onLoad() {
    
  }
  
})
