// 获取应用实例
const app = getApp()

Page({
  data: {
    personList:[{
      name:'X-Ray李·19届03班',
      time:'刚刚',
      headerUrl:'/assets/image/demo1.png',
      photoNum:'18375338537',
      wxchat:'N513120L',
      email:'QWER515@xxxxx.com',
      num1:23,
      num2:33,
      num3:563,
    }],
    smallImgList:[{
		url: '/assets/image/img1.png'
	}, {
		url: '/assets/image/img2.png'
	}, {
		url: '/assets/image/img3.png'
	}, {
		url: '/assets/image/img4.png'
    }],
    
    companyInfo:{
		name:'X-Ray有限公司',
		labelList:['研发','科技公司'],
		logo:'/assets/image/company_logo.png',
		introduce:'企业简介企业简介企业简介企业简介企业简介企业简介企业简介企业简介企业简介企业简介',
		schoolFriend:'X-Ray李',
		connext:'老板'
	}
  },
 
  onLoad() {
    
  },
  
})
