// 获取应用实例
const app = getApp()

Component({
    properties: {
        productList:{
            type:Object,
            value:null
        }
    },
    data:{
    },
    
    methods:{
        lookArtDetail() {
            wx.navigateTo({
                url:'/pages/art-detail/art-detail'
            })
        }
    }
})
