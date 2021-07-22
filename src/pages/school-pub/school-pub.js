// 获取应用实例
const app = getApp()

Page({
	data: {
		array: ['老板', '顾客', '老板娘', '客人'],
		index:-1,
		dateArray:[1,2,3,4,5,6,7,8],
		dateIndex:-1,
		typeArray:['分类1','分类2','分类3','分类4','分类5','分类6','分类7','分类8'],
		typeIndex:-1,
		labelArray:['标签1','标签2','标签3','标签4','标签5','标签6','标签7','标签8'],
		labelIndex:-1
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

	bindTypeChange(e) {
		console.log('picker发送选择改变，携带值为', e.detail.value)
		this.setData({
		  typeIndex: e.detail.value
		})
	},

	bindLabelChange() {
		console.log('picker发送选择改变，携带值为', e.detail.value)
		this.setData({
		  labelIndex: e.detail.value
		})
	},

	bindPickerChange(e) {
		console.log('picker发送选择改变，携带值为', e.detail.value)
		this.setData({
		  index: e.detail.value
		})
	},
	

	bindDateChange(e) {
		console.log('picker发送选择改变，携带值为', e.detail.value)
		this.setData({
		  dateIndex: e.detail.value
		})
	}
})