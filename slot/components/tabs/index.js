Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true,
  },
  properties: {
    tabs: { type: Array, value: [] }, // 数据项格式为 `{title}`
    activeTab: { type: Number, value: 0 }, // 当前激活tab
  },

  methods: {
    handleTabClick(e) {
      const index = e.currentTarget.dataset.index
      this.setData({ activeTab: index })
      // 抛出事件
      this.triggerEvent('tabclick', { index })
    },
    handleSwiperChange(e) {
      const index = e.detail.current
      this.setData({ activeTab: index })
      this.triggerEvent('change', { index })
    },
  },
})
