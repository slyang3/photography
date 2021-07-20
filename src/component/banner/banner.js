// 获取应用实例
const app = getApp()

Component({
    properties: {
        bannerList:{
            type:Array,
            value:null
        }
    },
    data:{
        bannerCurrent:0,
        bannerAutoPlay:false
    },
    
    methods:{
        changeItem(e){
            this.setData({bannerCurrent:e.detail.current})
        },
        
        changeBanner(e){
            this.setData({bannerCurrent:e.currentTarget.dataset.index,bannerAutoPlay:false})
            setTimeout(()=>{this.setData({bannerAutoPlay:true},300)})
        },
    }
})
