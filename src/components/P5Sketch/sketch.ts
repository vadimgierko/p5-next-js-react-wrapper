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
		// global vars for p5:
		let x = 0;

		// Every sketch.js file begins with two main functions: setup() and draw().
		// setup() is called and runs one time. It can be used to set default values for your project.
		p.setup = () => {
			p.createCanvas(400, 200);
		};

		// draw() is called directly after setup() and executes the lines of code inside it 60 times per second
		// until the program is stopped or the noLoop() function is called.
		// ~ flipbook of series of still drawings, so need background to hide prev capture
		p.draw = () => {
			const { speed, color, onxPosUpdate, play } = propsRef.current;

			p.background(200);
			p.fill(color);
			p.circle(x, 100, 50);

			// this is the way to stop animation, but...
			// this doesn't stop the drawing loop!!!
			x = play ? (x + speed) % p.width : x;
			// x = (x + speed) % p.width;

			// notify React with current state
			onxPosUpdate({ x });
		};

		p.mousePressed = () => {
			// Example: React gets notified when canvas is clicked
			propsRef.current.onxPosUpdate({ x: p.mouseX });
		};
	};
}
