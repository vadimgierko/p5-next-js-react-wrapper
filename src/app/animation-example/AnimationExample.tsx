"use client";

import { ChangeEvent, useState } from "react";
import { P5Sketch } from "@/components/P5Sketch";
import { Aside } from "@/components/Aside";
import { Speed, Color, XPos, Play } from "@/types";

export function AnimationExample() {
	const [speed, setSpeed] = useState<Speed>(2);
	const [color, setColor] = useState<Color>("#346782");
	const [xPos, setXPos] = useState<XPos>(0);
	const [play, setPlay] = useState<Play>(true);

	const handleSpeedChange = (e: ChangeEvent<HTMLInputElement>) =>
		setSpeed(Number(e.target.value));
	const handleColorChange = (e: ChangeEvent<HTMLInputElement>) =>
		setColor(e.target.value);
	const handlexPosUpdate = ({ x }: { x: XPos }) => setXPos(x);
	const handlePlayToggle = () => setPlay(!play);

	return (
		<>
			<Aside
				color={color}
				speed={speed}
				onSpeedChange={handleSpeedChange}
				onColorChange={handleColorChange}
				xPos={xPos}
				play={play}
				onPlayToggle={handlePlayToggle}
			/>

			<P5Sketch
				speed={speed}
				color={color}
				onxPosUpdate={handlexPosUpdate}
				play={play}
			/>
		</>
	);
}
