
export default {
  en: {
    device_info: 'Device Information',
    getDeviceInfo: 'getDeviceInfo',
    publishCommands: 'publishCommands',
    publishDpsWithPipeType: 'publishDpsWithPipeType',
    getDeviceWifiActivatorStatus: 'getDeviceWifiActivatorStatus',
    getDeviceOnlineType: 'getDeviceOnlineType',
    getShareDeviceInfo: 'getShareDeviceInfo',
    getDeviceListByDevIds: 'getDeviceListByDevIds',
    please_input_dev_id: 'Please input device id,(default deviceId in launchOptions)',
    please_input_shared_dev_id: 'Please input shared device id',
    getDeviceOfflineReminderState: 'getDeviceOfflineReminderState',
    getDeviceOfflineReminderWarningText: 'getDeviceOfflineReminderWarningText',
    removeDevice: 'removeDevice',
    removeShareDevice: 'removeShareDevice',
    subscribeDeviceRemoved: 'subscribeDeviceRemoved',
    unSubscribeDeviceRemoved: 'unSubscribeDeviceRemoved',
    isDeviceSupportOfflineReminder: 'isDeviceSupportOfflineReminder',
    toggleDeviceOfflineReminder: 'toggleDeviceOfflineReminder',
    renameDeviceName: 'renameDeviceName',
    please_input_device_name: 'Please input device name',
    openVConsole: 'open vConsole',
    getSupportedThirdPartyServices: 'getSupportedThirdPartyServices',
    bluetoothCapabilityIsSupport: 'bluetoothCapabilityIsSupport',
    bluetoothCapabilityOfBLEBeacon: 'bluetoothCapabilityOfBLEBeacon',
    requestAdvancedCapability: 'requestAdvancedCapability',
    please_input_capability_code: 'Please input capability code',
    please_input_dp_code: 'Please input dp codes',

    click_to_trigger: 'Trigger',
    please_input_state: 'Please input state',
    dpTranslateAdvancedCapability: 'dpTranslateAdvancedCapability',
    please_input_dp_id: 'Please input dp id',
    please_input_dp_value: 'Please input dp value',
    please_input_dev_ids: 'Please input dev ids, multiple dev ids separated by commas',
    syncDeviceInfo: 'syncDeviceInfo',
    resetFactory: 'resetFactory',

    setDeviceProperty: 'setDeviceProperty',
    getDeviceProperty: 'getDeviceProperty',
    getRemoteRebootTimers: 'getRemoteRebootTimers',
    validDeviceOnlineType: 'validDeviceOnlineType',
    please_input_code: 'Please input code',
    please_input_value: 'Please input value',
    please_input_online_type: 'Please input online type',
    params: 'Params:',

    please_input_gateway_id: 'Please input gateway id',
    please_input_dps: '(optional)Please input dps json format like: "{"1":true,"2":100}"',
    please_input_publish_dps: 'Please input dps json format like: "{"switch":true,"other":100}"',
    please_input_publish_dps_c: 'Please input dps json format like: {""1":true,"2":100}"',
    please_input_product_id: 'Please input product id',
    please_input_mesh_id: 'Please input mesh id',
    please_input_publish_mode: 'Please input mode(0,1,2. default:2)',
    please_input_publish_pipelines: 'Please input pipelines(like: 1,2,3,4,5,6.default:"")',
    please_input_dp_ids: 'Please input dp ids like：1,2,3',
    please_input_protocol: 'Please input mqtt protocol',
    please_input_message: 'Please input mqtt message,JSON format',
    please_input_socket_type: 'Please input socket message type',
    please_input_topics: 'Please input topics,like: /a1/xxxxx/yyy,/a1/xxxxx/zzz',
    checkOTAUpdateInfo: 'checkOTAUpdateInfo',
    checkOTAUpgradeStatus: 'checkOTAUpgradeStatus',
    otaStatus: 'otaStatus',
    registerOTACompleted: 'registerOTACompleted',
    onOtaCompleted: 'onOtaCompleted',
    openOTAUpgrade: 'openOTAUpgrade',
    please_input_group_id: 'Please input group id',
    syncTimerTask: 'syncTimerTask',
    addTimer: 'addTimer',
    updateTimer: 'updateTimer',
    updateTimerStatus: 'updateTimerStatus',
    removeTimer: 'removeTimer',
    openTimerPage: 'openTimerPage',
    please_input_a_timer_id: 'Please input a timer id',
    please_input_category: 'Please input category',
    please_input_status: 'Please input status(true or false)',
    please_input_timer_data: 'Please input timer data',
    please_input_repeat: 'Please input repeat',
    please_input_group_or_dev_id: 'Please input group or device id',
    please_input_sub_function_ids: 'Please input sub function ids',
    please_input_source: 'Please input source',
    please_input_scene_model: 'Please input scene model',
    please_input_scene_title: 'Please input scene title',
    please_input_group_ids: 'Please input group ids, multiple group ids separated by commas',
    please_input_type: 'Please input type',
    please_input_payload: 'Please input payload',
    please_input_pid: 'Please input pid',
    please_input_pv: 'Please input product version',
    please_input_mac: 'Please input mac',
    please_input_dev_or_group_id: 'Please input device or group id, as default input',
    saveDeviceId: 'Save ID',
    selectDevice: 'Select Device',
    confirm: 'Confirm',
    cancel: 'Cancel',
    DeviceDp: 'DP Operation',
    DeviceTimer: 'Basic Timer',
    GroupControl: 'Group Control',
    please_input_name: 'Please input name',
    GroupInformation: 'Group Information',
    GroupNativePage: 'Native Page',
    GroupProperty: 'Group Property',
    SubDevice: 'Sub Device',
    DeviceInformation: 'Device Information',
    please_input_biz_type: 'Please input biz type',
    please_input_property_list: 'Please input property list',
    Gateway: 'Gateway',
    DeviceProperty: 'Device Property',
    DeviceRemove: 'Device Remove',
    BTPairing: 'Bluetooth Pairing',
    WifiActivator: 'Wifi Activator',
    FreePairing: 'Free Pairing',
    LAN: 'LAN',
    MQTT: 'MQTT',
    Socket: 'Socket',
    SingleBle: 'Single Ble',
    Beacon: 'Beacon',
    OtherBle: 'Other Ble',
    ThingModel: 'Thing Model',
    FunctionalPage: 'Functional Page'
  },
  zh: {
    device_info: '设备信息',
    getDeviceInfo: '获取设备信息',
    publishCommands: '下发设备指令',
    publishDpsWithPipeType: '指定通道下发 dp',
    getDeviceWifiActivatorStatus: '获取连云激活状态',
    getDeviceOnlineType: '获取设备在线类型',
    getShareDeviceInfo: '获取设备分享信息',
    getDeviceListByDevIds: '通过设备id批量获取设备信息',
    please_input_dev_id: '请输入设备 ID(默认值：启动参数中的deviceId)',
    please_input_shared_dev_id: '请输入分享设备的 ID',
    getDeviceOfflineReminderState: '获取离线提醒状态',
    getDeviceOfflineReminderWarningText: '获取离线提醒文案',
    removeDevice: '移除设备',
    removeShareDevice: '移除分享',
    subscribeDeviceRemoved: '监听设备移除事件',
    unSubscribeDeviceRemoved: '取消监听设备移除事件',
    isDeviceSupportOfflineReminder: '是否支持离线提醒',
    toggleDeviceOfflineReminder: '切换离线提醒状态',
    renameDeviceName: '修改设备名称',
    please_input_device_name: '请输入设备名称',
    openVConsole: '打开 vConsole',
    getSupportedThirdPartyServices: '获取支持的第三方服务',
    bluetoothCapabilityIsSupport: '蓝牙能力是否支持',
    bluetoothCapabilityOfBLEBeacon: '蓝牙能力是否支持 BLE Beacon',
    requestAdvancedCapability: '请求高级能力',
    please_input_capability_code: '请输入能力编码',
    please_input_dp_code: '请输入DP code',
    click_to_trigger: '触发',
    please_input_state: '请输入状态',
    dpTranslateAdvancedCapability: '高级能力 dp 值转换',
    please_input_dp_id: '请输入 dp id',
    please_input_dp_value: '请输入 dp value',
    please_input_dev_ids: '请输入设备 id 列表，多个设备 id 用英文逗号分隔',
    syncDeviceInfo: '同步设备信息',
    resetFactory: '恢复出厂设置',

    setDeviceProperty: '设置设备属性',
    getDeviceProperty: '获取设备属性',
    getRemoteRebootTimers: '获取远程重启定时器',
    validDeviceOnlineType: '校验设备在线类型',
    please_input_code: '请输入 code',
    please_input_value: '请输入 value',
    please_input_online_type: '请输入在线类型',
    params: '参数：',
    please_input_gateway_id: '请输入网关 ID',
    please_input_dps: '(可选)请输入 dps，JSON格式，如: "{"1":true,"2":100}"',
    please_input_publish_dps: '请输入 dps，JSON格式，如: "{"1":true,"2":100}"',
    please_input_publish_dps_c: '请输入 dps，JSON格式，如: "{"switch":true,"other":100}"',
    please_input_product_id: '请输入产品 id',
    please_input_mesh_id: '请输入 mesh id',
    please_input_publish_mode: '请输入mode(0,1,2. default:2)',
    please_input_publish_pipelines: '请输入 pipelines(如: 1,2,3,4,5,6.default:"")',
    please_input_dp_ids: '请输入要查询的dpid列表，例如：1,2,3',
    please_input_protocol: '请输入mqtt协议号',
    please_input_message: '请输入mqtt消息JSON格式',
    please_input_socket_type: '请输入socket消息类型',
    please_input_topics: '请输入topics，如：/a1/xxxxx/yyy,/a1/xxxxx/zzz',
    checkOTAUpdateInfo: '获取OTA信息',
    checkOTAUpgradeStatus: '获取OTA状态',
    otaStatus: '获取OTA状态1',
    registerOTACompleted: '注册 ota 升级监听',
    onOtaCompleted: 'ota 升级完成监听',
    openOTAUpgrade: '打开 ota 升级页面',
    please_input_group_id: '请输入群组 ID',
    syncTimerTask: '获取定时任务列表',
    addTimer: '添加定时',
    updateTimer: '更新定时',
    updateTimerStatus: '更新定时任务状态',
    removeTimer: '删除定时',
    openTimerPage: '打开 App 定时管理',
    please_input_a_timer_id: '请输入定时任务 ID',
    please_input_category: '请输入类型，为空则加载全部',
    please_input_status: '请输入状态（true/false）',
    please_input_timer_data: '请输入定时数据',
    please_input_repeat: '请输入是否重复',
    please_input_group_or_dev_id: '请输入群组或设备 ID',
    please_input_sub_function_ids: '请输入子功能 ID',
    please_input_source: '请输入来源',
    please_input_scene_model: '请输入场景模型',
    please_input_scene_title: '请输入场景标题',
    please_input_group_ids: '请输入群组 ID 列表，多个群组 ID 用英文逗号分隔',
    please_input_type: '请输入 type',
    please_input_payload: '请输入 payload',
    please_input_pid: '请输入 pid',
    please_input_pv: '请输入 product version',
    please_input_mac: '请输入 mac',
    please_input_dev_or_group_id: '请输入设备或群组 ID，作为默认输入',
    saveDeviceId: '保存 ID',
    selectDevice: '选择设备',
    confirm: '确认',
    cancel: '取消',
    DeviceDp: 'DP 相关',
    DeviceTimer: '基础定时',
    GroupControl: '群组控制',
    please_input_name: '请输入名称',
    GroupInformation: '群组信息',
    GroupNativePage: '群组功能页',
    GroupProperty: '群组属性',
    SubDevice: '子设备',
    DeviceInformation: '设备信息',

    please_input_biz_type: '请输入业务类型',
    please_input_property_list: '请输入属性列表',
    Gateway: '网关',
    DeviceProperty: '设备属性',
    DeviceRemove: '设备移除',
    BTPairing: 'BT 配对',
    WifiActivator: '连云激活',
    FreePairing: '免配网',
    LAN: '局域网',
    MQTT: 'MQTT',
    Socket: 'Socket',
    SingleBle: '单点蓝牙',
    Beacon: 'Beacon',
    OtherBle: '其他蓝牙',
    ThingModel: '物模型',
    FunctionalPage: '功能页面'
  },
}
