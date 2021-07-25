// 获取应用实例
const app = getApp()

Component({
    properties: {
        productList:{
            type:Object,
            value:null
        },

        formPage:{
            type:Number,
            value:0
        }
    },
    data:{
    },
    
    methods:{
        lookArtDetail() {
            if(this.data.formPage > 0) {return;}
            wx.navigateTo({
                url:'/pages/art-detail/art-detail'
            })
        },

        showComment() {
            this.triggerEvent('showComment')
        }
    }
})
