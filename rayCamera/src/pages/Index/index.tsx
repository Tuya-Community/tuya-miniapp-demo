import { Button, View, router } from "@ray-js/ray";
import React, { FC } from "react";

import styles from "./index.module.less";

const Home: FC = () => {
	return (
		<View className={styles["container"]}>
			<Button
				type="primary"
				className={styles.btn}
				onClick={() => {
					router.push("/camera");
				}}
			>
				Camera
			</Button>
		</View>
	);
};

export default Home;
