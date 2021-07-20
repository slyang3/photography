// logs.js
const util = require('../../utils/util.js')

Page({
	data: {
		companyList: [{
			name:'X-Ray有限公司',
			labelList:['研发','科技公司'],
			logo:'/assets/image/company_logo.png',
			introduce:'企业简介企业简介企业简介企业简介企业简介企业简介企业简介企业简介企业简介企业简介',
			schoolFriend:'X-Ray李',
			connext:'老板'
		},{
			name:'X-Ray有限公司2',
			labelList:['研发','测试'],
			logo:'/assets/image/company_logo.png',
			introduce:'企业简介企业简介企业简介企业简介企业简介企业简介企业简介企业简介企业简介企业简介',
			schoolFriend:'X-Ray李',
			connext:'老板'
		},{
			name:'X-Ray有限公司3',
			labelList:['研发','测试'],
			logo:'/assets/image/company_logo.png',
			introduce:'企业简介企业简介企业简介企业简介企业简介企业简介企业简介企业简介企业简介企业简介',
			schoolFriend:'X-Ray李',
			connext:'老板'
		}],
		navItem:1
	},
	onLoad() {

	},

	changeTab(e) {
		this.setData({
			navItem:e.currentTarget.dataset.index
		})
	}
})