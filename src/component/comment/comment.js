// 获取应用实例
const app = getApp()

Component({
    properties: {
        type:{
            type:Number,
            value:0
        }
    },
    data:{
    },
    
    methods:{
        del() {
            this.triggerEvent('delCommentDiolog')
        }
    }
})
