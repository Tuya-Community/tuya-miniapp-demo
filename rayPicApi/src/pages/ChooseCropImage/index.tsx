import {
	Button,
	View,
	chooseCropImage,
	RadioGroup,
	Radio,
	Label,
	Image,
	previewImage,
} from "@ray-js/ray";
import React, { FC, useState } from "react";

import styles from "./index.module.less";

const Home: FC = () => {
	const [sourceType, setSourceType] = useState<string[]>(["album", "camera"]);
	const [imageSrc, setImageSrc] = useState<string>("");

	const handleChooseImage = () => {
		chooseCropImage({
			sourceType,
			success: (res) => {
				console.log("chooseImage success", res);
				setImageSrc(res.path);
			},
			fail: (res) => {
				console.log("chooseImage fail", res);
			},
			complete: () => {
				console.log("chooseImage complete");
			},
		});
	};

	const changeSourceType = (e) => {
		switch (e.detail.value) {
			case "album":
				setSourceType(["album"]);
				break;
			case "camera":
				setSourceType(["camera"]);
				break;
			default:
				setSourceType(["album", "camera"]);
		}
	};
	const previewChooseImage = (urls, current) => () => {
		previewImage({
			urls,
			current,
			success: (res) => {
				console.log("previewImage success", res);
			},
			fail: (res) => {
				console.log("previewImage fail", res);
			},
			complete: () => {
				console.log("previewImage complete");
			},
		});
	};
	return (
		<>
			<View className={styles["container"]}>
				<Button
					type="primary"
					className={styles.btn}
					onClick={handleChooseImage}
				>
					chooseImage
				</Button>
			</View>

			<View className={styles["wrp"]}>
				选择图片来源：
				<RadioGroup onChange={changeSourceType}>
					<Label>
						<Radio value="all" checked={sourceType.length === 2} />
						相册和相机
					</Label>
					<Label>
						<Radio value="album" />
						仅相册
					</Label>
					<Label>
						<Radio value="camera" />
						仅相机
					</Label>
				</RadioGroup>
			</View>
			<View className={styles["container"]}>
				预览:
				<Image src={imageSrc} onClick={previewChooseImage(imageSrc, 0)}></Image>
			</View>
		</>
	);
};

export default Home;
