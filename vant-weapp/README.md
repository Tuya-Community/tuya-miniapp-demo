#  有赞小程序组件

添加 project.tuya.json 文件后，并声明编译选项 `compatible` 为 `["wx"]`，即可无缝使用微信小程序组件。

https://developer.tuya.com/cn/miniapp/guide/compatible

```json
{
  "projectname": "vant_miniprogram",
  "i18n": false,
  "description": "项目配置",
  "baseversion": "2.10.1",
  "projectId": "ty9ciw3aqk1ejohun7",
  "dependencies": {
    "BaseKit": "3.0.0",
    "BizKit": "3.0.1",
    "MiniKit": "3.0.0"
  },
  "compilerOptions": {
    "compatible": [
      "wx"
    ]
  }
}
```
