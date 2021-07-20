// 获取应用实例
const app = getApp()

Page({
  data: {
    imgList:[]
  },
 
  onLoad() {
    
  },

  chooseImage() {
    wx.chooseImage({
		count:5,
		sizeType: ['original', 'compressed'],
		sourceType: ['album', 'camera'],
		success:  (res) => {
			var _current_lgt = res.tempFilePaths.length;
			for(var i = 0;i < _current_lgt;i++){
				this.data.imgList.unshift(res.tempFilePaths[i])
			}
			this.setData({
				imgList:this.data.imgList
			});
		},
      	fail:  (err) => {}
    });
  }
  
})
