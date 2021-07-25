// 获取应用实例
const app = getApp()

Page({
	data: {
		userInfo: {},

		bannerList: [{
			bannerUri: '/assets/image/img1.png'
		}, {
			bannerUri: '/assets/image/img2.png'
		}, {
			bannerUri: '/assets/image/img3.png'
		}, {
			bannerUri: '/assets/image/img4.png'
		}],

		classifyList: ['活动公告', '云美术馆', '投稿投票', '直播录播', '校企信息', '优选', '游记', '我们'],

		productList: [{
			name: 'X-Ray李·19届03班',
			time: '刚刚',
			headerUrl: '/assets/image/demo1.png',
			productUrl: ['/assets/image/img3.png', '/assets/image/img4.png'],
			descript: '我们不只是用相机拍照，我们带到摄影中去的是所有我们读过的书、看过的电影、听过的音乐、走过的路、爱过...',
			shareNum: '',
			msgNum: 223,
			thumbsUpNum: 1089
		}, {
			name: 'Mr_ZhuX·11届01班',
			time: '1小时之前',
			headerUrl: '/assets/image/demo2.png',
			productUrl: ['/assets/image/img1.png'],
			descript: '今日份小岛美图送上，希望大家喜欢♥~#海岛摄影#',
			shareNum: '',
			msgNum: 1023,
			thumbsUpNum: 189
		}],
		isShow:false
	},

	onLoad() {

	},

	requiredCourseBlink(e) {
		console.log(e.currentTarget.dataset.index)
		switch (e.currentTarget.dataset.index) {
			case 0:
				break;
			case 1:
				wx.navigateTo({
					url:'/pages/art/art'
				})
				break;
			case 2:
				wx.navigateTo({
					url:'/pages/contribution/contribution'
				})
				break;
			case 3:
				break;
			case 4:
				wx.navigateTo({
					url:'/pages/school/school'
				})
				break;
			case 5:
				break;
			case 6:
				break;
			case 7:
				break;
			default:
				break;
		}
	},

	showComment() {
		this.setData({
			isShow:true
		})
	},

	delCommentDiolog() {
		this.setData({
			isShow:false
		})
	}
})