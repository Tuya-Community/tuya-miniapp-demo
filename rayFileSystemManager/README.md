# 文件系统

## 全局唯一的文件系统，可以对文件进行读取、写入操作。

应用场景包括

- 本地缓存管理
- 数据持久化
- 离线存储
- 本地日志记录
- ...

## 注意事项

- 需要文件读写权限，使用[authorize](https://developer.tuya.com/cn/miniapp/develop/ray/api/authorize/authorize#authorize)中的 `scope.writePhotosAlbum` 写入相册权限。

* 当 App 缓存被清除时，文件系统中的文件也会被清除。
* 文件是 App 共用的，如需要考虑多账号的场景，请通过文件名或目录区分。

## 相关链接

- [文件管理器](https://developer.tuya.com/cn/miniapp/develop/ray/api/file/getFileSystemManager)
