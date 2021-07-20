const App = getApp();
Component({
    properties: {},
    data: {
        cur: '',
        tabList:[
            {key:'index',path:'/pages/index/index',text:'首页',src:'/assets/image/icon_index.png',actSrc: '/assets/image/icon_index_select.png'},
            {key:'search',path:'/pages/search/search',text:'搜索',src:'/assets/image/icon_menu_search.png',actSrc: ''},
            {key:'pub',path:'/pages/pub/pub',text:'发布',src:'/assets/image/icon_pub.png',actSrc: '/assets/image/icon_menu_add.png'},
            {key:'my',path:'/pages/my/my',text:'我的',src:'/assets/image/icon_mine.png',actSrc: '/assets/image/icon_menu_8.png'}
        ],
        formIds:[]
    },
    attached: function () {
        let _pages = getCurrentPages();
        let _num = _pages.length - 1;
        let _cur = _pages[_num].route.split('/')[2];
        this.setData({
            cur: _cur
        });
    },
    methods: {
        formSubmit:function(e){
            if(e.target.dataset.tar == 'search') {
                wx.navigateTo({
                    url: e.target.dataset.path
                })
                return
            }
            wx.reLaunch({
                url:e.target.dataset.path
            })   
        }
    }
})
