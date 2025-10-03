import { Color, Play, Speed, XPos } from "@/types";
import p5 from "p5";

export type SketchProps = {
	speed: Speed;
	color: Color;
	onxPosUpdate: (newState: { x: XPos }) => void;
	play: Play;
};

export function sketch(propsRef: { current: SketchProps }) {
	return function (p: p5) {
		let x = 0;

		p.setup = () => {
			p.createCanvas(400, 200);
		};

		p.draw = () => {
			const { speed, color, onxPosUpdate, play } = propsRef.current;

			p.background(200);
			p.fill(color);
			p.circle(x, 100, 50);

			x = play ? (x + speed) % p.width : x;

			// notify React with current state
			onxPosUpdate({ x });
		};

		p.mousePressed = () => {
			// Example: React gets notified when canvas is clicked
			propsRef.current.onxPosUpdate({ x: p.mouseX });
		};
	};
}
