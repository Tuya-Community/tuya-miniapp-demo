import { useState, useEffect } from 'react'

let _deviceIdList = null
let _groupIdList = null
export function useDeviceList() {
  const [deviceList, setDeviceList] = useState<ty.device.DeviceInfo[]>([])

  useEffect(() => {
    if (_deviceIdList) {
      setDeviceList(_deviceIdList)
    } else {
      ty.home.getCurrentHomeInfo({
        success: (info) => {
          ty.home.getDeviceIdList({
            ownerId: +info.homeId,
            success: (res) => {
              ty.device.getDeviceListByDevIds({
                deviceIds: res.devIds,
                success: ({deviceInfos}) => {
                  const list = deviceInfos;
                  console.log('-------deviceList', deviceInfos)
                  _deviceIdList = [{devId: 'error_id', name: '不存在的设备'}].concat(list)
                  setDeviceList(_deviceIdList)
                },
                fail: (res) => {
                  setDeviceList([])
                }
              })
            },
            fail: (res) => {
              setDeviceList([])
            },
          })
        },
        fail: (res) => {
          setDeviceList([])
        },
      })
    }
  }, [])
  return deviceList
}


export function useGroupList(){
  const [groupList, setGroupList] = useState<ty.device.GroupInfo[]>([])

  useEffect(() => {
    if(_groupIdList){
      setGroupList(_groupIdList)
    }else{
      ty.home.getCurrentHomeInfo({
        success: (info) => {
      ty.home.getGroupIdList({
        ownerId: +info.homeId,
        success: async ({groupIds}) => {
          const groupList = await Promise.all(groupIds.map(async (groupId): Promise<ty.device.GroupInfo> => {
            return new Promise((resolve, reject) => {
              ty.device.getGroupInfo({
                groupId,
                success: (info: ty.device.GroupInfo) => {
                  resolve(info)
                },
                fail: (res) => {
                  // resolve(null)
                  console.log('getGroupInfo fail', res)
                }
              })
            })
          }))
          _groupIdList = groupList
          setGroupList(groupList)
        },
        fail: (res) => {
          setGroupList([])
        },
      })
    }})
    }
  }, [])
  return groupList
}