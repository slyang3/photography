// 获取应用实例
const app = getApp()

Page({
	data: {
		imgList: []
	},

	onLoad() {

	},

	chooseImage() {
		wx.chooseImage({
			count: 5,
			sizeType: ['original', 'compressed'],
			sourceType: ['album', 'camera'],
			success: (res) => {
				var _current_lgt = res.tempFilePaths.length;
				for (var i = 0; i < _current_lgt; i++) {
					this.data.imgList.unshift(res.tempFilePaths[i])
				}
				this.setData({
					imgList: this.data.imgList
				});
			},
			fail: (err) => {}
		});
	},

	bindDateChange: function(e) {
		console.log('picker发送选择改变，携带值为', e.detail.value)
		this.setData({
		  date: e.detail.value
		})
	},

	del(e) {
		let _imgList = this.data.imgList;
		_imgList.splice(e.currentTarget.dataset.index)
		this.setData({
			imgList:_imgList
		})
	}
})