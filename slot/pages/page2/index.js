Page({
  data: {
    tabs: [{ title: '选项一' }, { title: '选项二' }, { title: '选项三' }, { title: '选项四' }],
    activeTab: 0,
    tabsContent: [
      {
        color: '#f1fafb',
        content: 'tab1 content',
      },
      {
        color: '#a0e4f1',
        content: 'tab2 content',
      },
      {
        color: '#9dc6ff',
        content: 'tab3 content',
      },
      {
        color: '#4993fa',
        content: 'tab4 content',
      },
    ],
  },
  onTabCLick(e) {
    const index = e.detail.index
    console.log('tab click', index)
  },

  onChange(e) {
    const index = e.detail.index
    console.log('tab change', index)
  },
})
