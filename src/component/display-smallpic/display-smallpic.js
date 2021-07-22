// 获取应用实例
const app = getApp()

Component({
    properties: {
        smallImgList:{
            type:Array,
            value:null
        }
    },
    data:{
        
    },
    
    methods:{
        changeItem(e){
            this.setData({bannerCurrent:e.detail.current})
        },
        
        changeBanner(e){
            this.setData({bannerCurrent:e.currentTarget.dataset.index,bannerAutoPlay:false})
            setTimeout(()=>{this.setData({bannerAutoPlay:true},300)})
        },

        lookPhotoDetail() {
            wx.navigateTo({
                url:'/pages/photo-detail/photo-detail'
            })
        }
    }
})
