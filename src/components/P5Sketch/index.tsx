"use client";

import { useRef, useEffect } from "react";
import { sketch, SketchProps } from "@/components/P5Sketch/sketch";
import type p5 from "p5";

/**
 * This is the kingdom / island of p5 - p5.js lib lives only here & not outside.
 *
 * This component gets passed React state, wraps & controls p5 canvas accordingly to React state updates.
 */
export function P5Sketch({ speed, color, onxPosUpdate, play }: SketchProps) {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const sketchRef = useRef<p5 | null>(null);
	const propsRef = useRef<SketchProps>({ speed, color, onxPosUpdate, play });

	propsRef.current = { speed, color, onxPosUpdate, play };

	useEffect(() => {
		let p5Instance: p5;

		(async () => {
			const p5Module = await import("p5"); // ✅ only runs in browser
			const P5 = p5Module.default;

			if (containerRef.current && !sketchRef.current) {
				p5Instance = new P5(sketch(propsRef), containerRef.current);
				sketchRef.current = p5Instance;
				//==================
				console.log("isLooping:", sketchRef.current.isLooping());
				console.log("frameRate:", sketchRef.current.frameRate());
			}
		})();

		return () => {
			if (sketchRef.current) {
				sketchRef.current.remove();
				sketchRef.current = null;
			}
		};
	}, []);

	useEffect(() => {
		console.log("play:", play);

		if (sketchRef.current) {
			if (!play) {
				sketchRef.current.noLoop();
			} else {
				sketchRef.current.loop();
			}
			console.log("isLooping:", sketchRef.current.isLooping());
			console.log("frameRate:", sketchRef.current.frameRate());
		}
	}, [play]);

	{
		/** div below wraps p5 generated canvas */
	}
	return <div ref={containerRef}></div>;
}
