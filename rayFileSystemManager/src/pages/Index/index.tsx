import {
  Button,
  View,
  Textarea,
  showToast,
  env,
  getFileSystemManager,
  saveImageToPhotosAlbum,
  authorize,
} from '@ray-js/ray'
import React, { FC } from 'react'
import styles from './index.module.less'

const fileRoot = env.USER_DATA_PATH
const filePath = `${fileRoot}/test.text`
const filePathImage = `${fileRoot}/test.jpg`
const base64Text =
  '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'
const Index: FC = () => {
  const [value, setValue] = React.useState<string>('')
  const fileManager = React.useRef(null)

  React.useEffect(() => {
    const getMenager = async () => {
      fileManager.current = await getFileSystemManager()
    }
    getMenager()
  }, [])

  // 写入文件
  const whitefile = async () => {
    if (!value) {
      showToast({
        title: '请输入文件内容',
      })
      return
    }

    authorize({
      scope: 'scope.writePhotosAlbum',
      success: async () => {
        console.log('authorize success')
        await fileManager.current.writeFile({
          filePath: filePath,
          data: value,
          success: () => {
            showToast({
              title: `文件写入成功`,
            })
          },
          fail: (err) => {
            showToast({
              title: `文件写入失败`,
            })
            console.log(`文件写入失败`, err)
          },
          complete: () => {},
        })
      },
      fail: (err) => {
        console.log('authorize fail', err)
      },
    })
  }

  const whiteFileImage = async () => {
    authorize({
      scope: 'scope.writePhotosAlbum',
      success: async () => {
        console.log('authorize success')
        await fileManager.current.writeFile({
          filePath: filePathImage,
          data: base64Text,
          encoding: 'base64',
          success: () => {
            showToast({
              title: `文件写入成功`,
            })
          },
          fail: (err) => {
            showToast({
              title: `文件写入失败`,
            })
            console.log(`文件写入失败`, err)
          },
          complete: () => {},
        })
      },
      fail: (err) => {
        console.log('authorize fail', err)
      },
    })
  }

  const readFile = () => {
    fileManager.current.access({
      path: filePath,
      success: () => {
        console.log(`${filePath}的路径存在`)
      },
      fail: (err) => {
        showToast({
          title: `${filePath}的路径不存在`,
        })
        console.log(`${filePath}的路径不存在`, err)
      },
      complete: () => {},
    })
    const data = fileManager.current.readFileSync({
      filePath,
    })
    showToast({
      title: `在console中查看文件内容`,
    })
    console.log('文件内容为:', data)
  }

  const saveBase64ToAlbum = () => {
    fileManager.current.access({
      path: filePathImage,
      success: () => {
        console.log(`${filePathImage}的路径存在`)
      },
      fail: (err) => {
        showToast({
          title: `${filePathImage}的路径不存在`,
        })
        console.log(`${filePathImage}的路径不存在`, err)
      },
      complete: () => {},
    })
    saveImageToPhotosAlbum({
      filePath: filePathImage,
      success: () => {
        showToast({
          title: '保存成功',
        })
      },
      fail: (err) => {
        console.log(`saveImageToPhotosAlbum出错`, err)
      },
    })
  }

  const removeFile = () => {
    fileManager.current.removeSavedFile({
      filePath,
      success: () => {
        showToast({
          title: `文件删除成功`,
        })
      },
      fail: (err) => {
        showToast({
          title: `文件删除失败`,
        })
        console.log(`removeSavedFile fail`, err)
      },
      complete: () => {},
    })
  }

  const getStat = () => {
    const stat = fileManager.current.statSync({
      path: filePath,
    })
    showToast({
      title: `获取文件 Stats 对象 成功`,
    })
    console.log('获取文件 Stats 对象', stat)
  }

  return (
    <View className={styles['container']}>
      <Textarea
        placeholder="请输入文件内容..."
        onInput={(e) => {
          setValue(e.value)
        }}
      ></Textarea>
      <Button type="primary" className={styles.btn} onClick={whitefile}>
        文件写入
      </Button>

      <Button type="primary" className={styles.btn} onClick={readFile}>
        读取写入的文件
      </Button>

      <Button type="primary" className={styles.btn} onClick={removeFile}>
        删除文件
      </Button>

      <Button type="primary" className={styles.btn} onClick={getStat}>
        获取文件 Stats 对象
      </Button>

      <Button type="primary" className={styles.btn} onClick={whiteFileImage}>
        先将base64写入文件
      </Button>

      <Button type="primary" className={styles.btn} onClick={saveBase64ToAlbum}>
        再保存base64到相册
      </Button>
    </View>
  )
}

export default Index
