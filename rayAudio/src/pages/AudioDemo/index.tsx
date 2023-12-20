import { Button, View, createInnerAudioContext } from "@ray-js/ray";
import React, { FC, useEffect, useRef, useState } from "react";
import { getRandomNumberMin, getRandomBoolean } from "../../utils/index";

import styles from "./index.module.less";

// const autoplay = getRandomBoolean();
const autoplay = true;
const startTime = getRandomNumberMin();
// const loop = getRandomBoolean()
const loop = true;
const playbackRate = 2; // 播放速度。范围 0.5-2.0，默认为 1。（Android 需要 6 及以上版本）
const AUDIO_PATH =
	"https://images.tuyacn.com/rms-static/cf60cb10-9f19-11ee-8cd8-b117287658f4-1703064369729.mp3?tyName=1.mp3";
const Index: FC = () => {
	const audioContext = useRef(null);
	const [audioStatus, setAudioStatus] = useState<string>("");

	useEffect(() => {
		audioContext.current = createInnerAudioContext({
			success: function (res) {
				console.log("createInnerAudioContext success", res);

				audioContext.current.onTimeUpdate((res) => {
					// console.log("onTimeUpdate callback", res);
				});
			},
			fail: function (res) {
				console.log("createInnerAudioContext fail", res);
			},
			complete: function () {
				console.log("createInnerAudioContext complete");
			},
		});
	}, []);

	const operation =
		(ops: "play" | "pause" | "stop" | "resume" | "seek", params?: object) =>
		() => {
			console.log("operation params", params);
			setAudioStatus(ops);
			audioContext.current[ops]({
				...params,
				success: function (res) {
					console.log(`${ops} success`, res);
				},
				fail: function (res) {
					console.log(`${ops} fail`, res);
				},
				complete: function (res) {
					console.log(`${ops} complete`, res);
				},
			});
		};
	return (
		<View className={styles["container"]}>
			<Button
				type="primary"
				className={styles.btn}
				onClick={operation("play", {
					src: AUDIO_PATH,
					autoplay: autoplay,
					startTime: startTime,
					loop: loop,
					volume: Math.random(),
					playbackRate: playbackRate,
				})}
			>
				播放 play
			</Button>
			<Button
				type="primary"
				className={styles.btn}
				onClick={operation("pause")}
			>
				暂停 pause
			</Button>
			<Button type="primary" className={styles.btn} onClick={operation("stop")}>
				停止 stop
			</Button>
			<Button
				type="primary"
				className={styles.btn}
				onClick={operation("resume")}
			>
				恢复播放 resume
			</Button>
			<Button
				type="primary"
				className={styles.btn}
				onClick={operation("seek", { position: getRandomNumberMin() })}
			>
				跳转 seek
			</Button>
			<View className={styles.audioStatus}>当前状态：{audioStatus}</View>
			<View className={styles.container}>
				<View className={styles.item}>autoplay: {"" + autoplay}</View>
				<View className={styles.item}>startTime: {"" + startTime}</View>
				<View className={styles.item}>loop: {"" + loop}</View>
				<View className={styles.playbackRate}>
					playbackRate: {"" + playbackRate}
				</View>
			</View>
		</View>
	);
};

export default Index;
