import {
  Button,
  View,
  Textarea,
  showToast,
  env,
  getFileSystemManager,
  authorize,
} from '@ray-js/ray'
import React, { FC } from 'react'
import styles from './index.module.less'

const fileRoot = env.USER_DATA_PATH
const filePath = `${fileRoot}/test.text`

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
    </View>
  )
}

export default Index
