import { View, Map, Button, nativeDisabled, showModal } from "@ray-js/ray";
import React, { Component } from "react";
import styles from "./index.module.less";

class Index extends Component {
	state = {
		latitude: 39.908775,
		longitude: 116.406315,
		scale: 16,
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

	sliderChange = (e) => {
		this.setState({ scale: e.value });
	};
	openModal = () => {
		nativeDisabled(true);
		showModal({
			title: "弹窗标题",
			content: "弹窗内容",
			complete: function () {
				nativeDisabled(false);
			},
		});
	};
	render() {
		const { latitude, longitude, scale, markers } = this.state;
		return (
			<>
				<View className={styles["container"]}>
					<Map
						id="myMap"
						className={styles["myMap"]}
						latitude={latitude}
						longitude={longitude}
						scale={scale}
						markers={markers}
					/>

					<Button onClick={this.openModal} type="primary">
						显示Modal
					</Button>
				</View>
			</>
		);
	}
}

export default Index;
