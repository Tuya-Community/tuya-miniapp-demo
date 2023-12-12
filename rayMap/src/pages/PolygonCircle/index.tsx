import { View, Map, Slider } from "@ray-js/ray";
import React, { Component } from "react";
import styles from "./index.module.less";
import {
	generateRandomPoint,
	generateRandomPoints,
	getRandomColor,
} from "../../utils/index";

class Index extends Component {
	state = {
		latitude: 39.908775,
		longitude: 116.406315,
		scale: 12,
		circles: [
			{
				latitude: 39.927761,
				longitude: 116.391467,
				color: "#800080", // 紫色
				fillColor: "#cccccccc",
				radius: 1000,
				strokeWidth: 2,
			},
		],
		polygons: [
			{
				points: [
					{
						latitude: 39.908775,
						longitude: 116.406315,
					},
					{
						latitude: 39.927761,
						longitude: 116.481667,
					},
					{
						latitude: 39.918203,
						longitude: 116.396923,
					},
				],
				strokeWidth: 2,
				strokeColor: "#FF0000", // 红色
				fillColor: "#FFFF00", // 黄色
			},
		],
	};

	updateCircle = () => {
		let pos1 = generateRandomPoint(
			this.state.latitude,
			this.state.longitude,
			1000
		);
		let pos2 = generateRandomPoint(
			this.state.latitude,
			this.state.longitude,
			1000
		);
		let circles = [
			{
				...pos1,
				color: getRandomColor(),
				fillColor: getRandomColor(),
				radius: 500,
				strokeWidth: 2,
			},
			{
				...pos2,
				color: getRandomColor(),
				fillColor: getRandomColor(),
				radius: 100,
				strokeWidth: 1,
			},
		];
		this.setState({
			circles,
		});
	};

	getPolygons = (
		latitude,
		longitude,
		radiusInMeters = 1000,
		numberOfPoints = 1
	) => {
		let points1 = generateRandomPoints(
			latitude,
			longitude,
			radiusInMeters,
			numberOfPoints
		);
		let points2 = generateRandomPoints(
			latitude,
			longitude,
			radiusInMeters,
			numberOfPoints
		);
		let polygons = [
			{
				points: points1,
				strokeColor: getRandomColor(),
				fillColor: getRandomColor(),
				strokeWidth: 1,
			},
			{
				points: points2,
				strokeColor: getRandomColor(),
				fillColor: getRandomColor(),
				strokeWidth: 1,
			},
		];
		return polygons;
	};

	updatePolygons = () => {
		let polygons = this.getPolygons(
			this.state.latitude,
			this.state.longitude,
			3000,
			4
		);
		this.setState({
			polygons: polygons,
		});
	};

	render() {
		const { latitude, longitude, scale, circles, polygons } = this.state;
		return (
			<>
				<View className={styles["container"]}>
					<Map
						id="myMap"
						className={styles["myMap"]}
						latitude={latitude}
						longitude={longitude}
						scale={scale}
						circles={circles}
						polygons={polygons}
					/>
					<button onClick={this.updateCircle} type="primary">
						update circles
					</button>
					<button onClick={this.updatePolygons} type="primary">
						update polygons
					</button>
				</View>
			</>
		);
	}
}

export default Index;
