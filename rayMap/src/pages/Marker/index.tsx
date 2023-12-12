import { View, Map, Button, Switch, Image } from "@ray-js/ray";
import React, { Component } from "react";
import imagePoint from "../../assets/location.svg";
import imageMarker from "../../assets/marker.png";

import styles from "./index.module.less";

class Index extends Component {
	state = {
		latitude: 39.908775,
		longitude: 116.406315,
		scale: 12,
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
		isDeleteMarker: false,
	};
	mapCtx: any;

	componentDidMount(): void {
		this.mapCtx = ty.createMapContext("myMap");
	}

	addMarker = () => {
		let self = this;
		self.mapCtx.getCenterLocation({
			success: function (res) {
				console.log("getCenterLocation success", res);
				self.mapCtx.addMarkers({
					markers: [
						{
							id: Date.now(),
							callout: {
								content: Date.now(),
							},
							...res,
							iconPath: imageMarker,
						},
					],
					clear: false,
					success: function (e) {
						console.log("addMarkers success", e);
					},
					fail: function (e) {
						console.log("addMarkers fail", e);
					},
				});
			},
			fail: function (res) {
				console.log("getCenterLocation fail", res);
			},
		});
	};

	toggleDetlteMarker = () => {
		console.log("是否点击masker删除masker", this.state.isDeleteMarker);
		this.setState({
			isDeleteMarker: !this.state.isDeleteMarker,
		});
	};
	markertap = (e) => {
		console.log("demo 地图 markertap 事件触发", e);
		const { markerId } = e.detail;
		if (this.state.isDeleteMarker) {
			this.mapCtx.removeMarkers({
				markerIds: [markerId],
				clear: false,
			});
		}
	};

	callouttap = (e) => {
		console.log("demo 地图 callouttap 事件触发", e, e.detail.markerId);
	};

	render() {
		const { latitude, longitude, scale, markers } = this.state;
		console.log("markers", markers);
		return (
			<>
				<View className={styles["container"]}>
					<view className={styles["tips"]}>· 给地图中心点添加marker</view>
					<view className={styles["tips"]}>
						· 不支持点击获取经纬度，仅支持获取地图中心点经纬度
					</view>
					<View style={{ position: "relative" }}>
						<Image src={imagePoint} className={styles["point"]}></Image>
						<Map
							id="myMap"
							className={styles["myMap"]}
							latitude={latitude}
							longitude={longitude}
							scale={scale}
							markers={markers}
							onMarkertap={this.markertap}
							onCallouttap={this.callouttap}
						/>
					</View>

					<Button onClick={this.addMarker} type="primary">
						添加 marker
					</Button>
					<view>
						删除marker <Switch onClick={this.toggleDetlteMarker}></Switch>
					</view>
				</View>
			</>
		);
	}
}

export default Index;
