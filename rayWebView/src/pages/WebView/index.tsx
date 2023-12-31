import { Button, View, WebView, nativeDisabled } from "@ray-js/ray";
import React, { FC, useEffect } from "react";

import styles from "./index.module.less";

const Home: FC = () => {
	const handleEvent = (type: string) => (e) => {
		console.log("webview event" + type, e);
	};
  useEffect(() => {
    nativeDisabled(true)
  },[])
	return (
		<View className={styles["container"]}>
			<View>webview before</View>
			<WebView
				src="https://images.tuyacn.com/rms-static/5320c160-9990-11ee-8bb1-51351f353ef3-1702455564406.html?tyName=postmessage.html?t=1"
				onMessage={handleEvent("onMessage")}
				onLoad={handleEvent("onLoad")}
				onError={handleEvent("onError")}
			></WebView>
			<View>webview after</View>
		</View>
	);
};

export default Home;
