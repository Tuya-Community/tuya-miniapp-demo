import { View, Map } from "@ray-js/ray";
import React, { Component } from "react";
import styles from "./index.module.less";

class Index extends Component {
	state = {
		latitude: 39.908775,
		longitude: 116.406315,
		scale: 14,
		markers: [
			{
				id: 1,
				latitude: 39.908775,
				longitude: 116.406315,
				name: "王府井",
				iconPath: "/assets/images/marker.png",
				callout: {
					content: "王府井",
					color: "#ffffff",
					fontSize: 12,
					bgColor: "#5C91F6",
					padding: 4,
					borderRadius: 35,
					anchorY: -8,
				},
			},
			{
				id: 2,
				latitude: 39.927761,
				longitude: 116.391467,
				name: "北海公园",
				iconPath: "/assets/images/marker.png",
				callout: {
					content:
						"北海公园北海公园北海公园北海公园北海公园北海公园北海公园北海公园北海公园",
					color: "#ff0000",
					fontSize: 12,
					bgColor: "#fff",
					padding: 4,
					borderRadius: 35,
					anchorY: -8,
				},
			},
			{
				id: 3,
				latitude: 39.918203,
				longitude: 116.396923,
				name: "故宫",
				iconPath: "/assets/images/marker.png",
				callout: {
					content: "故宫",
					color: "#ffffff",
					fontSize: 12,
					bgColor: "#5C91F6",
					padding: 4,
					borderRadius: 35,
					anchorY: -8,
				},
			},
		],
	};

	render() {
		const { latitude, longitude, scale, markers } = this.state;
		return (
			<View className={styles["container"]}>
				<View className={styles["tips"]}>
					⚠️
					map组件属于异层渲染的原生组件，需要遵循原生组件限制，map及其父节点（包括page）均不能❌设置背景色、背景图等。
				</View>
				<View className={styles["tips"]}>
					⚠️ 如果一定要设置背景颜色，可以设置page配置文件的背景颜色。
				</View>
				<View className={styles["tips"]}>
					⚠️ map组件IDE展示效果与真机效果有差异，请以真机为准。
				</View>

				<Map
					id="myMap"
					className={styles["myMap"]}
					latitude={latitude}
					longitude={longitude}
					scale={scale}
					markers={markers}
				/>

				<View className={styles["tips"]}>
					❌由于设置了背景色，导致map组件被覆盖，效果请以真机为准
				</View>
				<View className={styles["container"]} style={{ background: "#93b5c6" }}>
					<Map
						id="myMap2"
						className={styles["myMap"]}
						latitude={latitude}
						longitude={longitude}
						scale={scale}
						markers={markers}
					/>
				</View>
			</View>
		);
	}
}

export default Index;
