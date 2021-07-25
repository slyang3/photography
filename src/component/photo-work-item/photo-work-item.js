// component/photo-work-item/photo-work-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

    itemData: {
      type: Object,
      value: {},
      observer: function (newVal, oldVal) {
        this.setData({
          itemData: newVal
        })
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    itemData: {}
  },

  /**
   * 组件的方法列表
   */
  methods: {

    goDetailPage: function () {
      const { itemData } = this.data;
      // wx.navigateTo({
      //   url: '/page/rule-content/rule-content?activityNo=' + activityNo
      // })
    },
  }
})
