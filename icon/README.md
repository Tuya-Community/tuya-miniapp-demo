# icon

## 描述

- 本示例向您展示了智能小程序中几种 icon 的用法，方便你在项目中更好的使用 icon
  - 直接使用小程序扩展组件的 icon。[文档](https://developer.tuya.com/cn/miniapp/develop/miniapp/component/extended/component-plus/component/Icon), [代码示例](https://github.com/Tuya-Community/tuya-miniapp-explorer-template/tree/main/pages/componentsExtension/iconEx)。
  - 使用 png 图片或雪碧图
  - 使用 mask-image
  - 使用 svg（小程序不支持 svg 标签，需要配合 mask-image 使用）
  - 使用 iconfont (强烈推荐) [地址](https://www.iconfont.cn/)

## 注意事项

- 使用 iconfont 的时候，引用`iconfont.css`时需要注意修改`font-face`字体文件的引用路径为项目路径。
- 由于小程序不支持 svg 标签，因此使用 iconfont 时仅支持纯色 iconfont 图标。
