# 获取元素宽高和位置信息

## 描述

- 你可以通过 `getBoundingClientRect`获得节点宽高和位置信息。例如:

```json
{
  "right": 237.5,
  "left": 137.5,
  "top": 1216,
  "bottom": 1316,
  "width": 100,
  "height": 100
}
```

- 如果你需要更多详细信息，可以使用`createSelectorQuery`查询节点布局位置，和滚动等信息。例如:

```json
[
  {
    "id": "box",
    "left": 137.5,
    "right": 237.5,
    "top": 698,
    "bottom": 798,
    "width": 100,
    "height": 100,
    "dataset": {}
  },
  {
    "id": "",
    "dataset": {},
    "scrollLeft": 0,
    "scrollTop": 518,
    "scrollWidth": 375,
    "scrollHeight": 1332
  }
]
```

- `createSelectorQuery` 的使用方法和原生小程序写法几乎一致。如果你只需要获取元素宽高和位置信息，直接使用`getBoundingClientRect`即可。

## 相关链接

- [createSelectorQuery](https://developer.tuya.com/cn/miniapp/develop/miniapp/api/tyml/SelectorQuery/createSelectorQuery)
- [getBoundingClientRect](https://developer.tuya.com/cn/miniapp/develop/ray/api/DOM/getBoundingClientRec#getboundingclientrect)
