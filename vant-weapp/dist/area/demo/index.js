var _a;
import { VantComponent } from '../../common/component';
import Toast from '../../toast/toast';
const db = (_a = wx.cloud) === null || _a === void 0 ? void 0 : _a.database();
VantComponent({
    data: {
        areaList: {},
        loading: true,
        value: 330302,
    },
    mounted() {
        db === null || db === void 0 ? void 0 : db.collection('region').limit(1).get().then((res) => {
            if (res.data && res.data.length > 0) {
                this.setData({
                    loading: false,
                    areaList: res.data[0],
                });
            }
        }).catch((err) => {
            console.log(err);
            this.setData({
                loading: false,
            });
        });
    },
    methods: {
        onChange(event) {
            const { values } = event.detail;
            Toast({
                context: this,
                message: values.map((item) => item.name).join('-'),
            });
        },
        onConfirm(event) {
            console.log(event);
        },
        onCancel(event) {
            console.log(event);
        },
    },
});
