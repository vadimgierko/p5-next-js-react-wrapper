"use client";

import { ChangeEvent, useState } from "react";
import { P5Sketch } from "@/components/P5Sketch";
import { Aside } from "@/components/Aside";
import { Speed, Color, XPos, Play } from "@/types";

export default function Home() {
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
			<main style={{ flexGrow: 1, margin: "1em" }}>
				<header style={{ padding: "1em" }}>
					<h1>
						Next.js (App Router, TypeScript) p5.js Sketch Component Wrapper
					</h1>
				</header>
				<hr />

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
			</main>

			<footer style={{ padding: "1em" }}>
				<hr />
				<br />
				<p>
					&copy; 2025 Vadim Gierko [
					<a
						href="https://github.com/vadimgierko/p5-next-js-react-wrapper"
						target="_blank"
					>
						see the code
					</a>
					]
				</p>
			</footer>
		</>
	);
}
