"use client";

import { useRef, useEffect } from "react";
import { sketch, SketchProps } from "@/components/P5Sketch/sketch";
import type p5 from "p5";

export function P5Sketch({ speed, color, onxPosUpdate, play }: SketchProps) {
	const containerRef = useRef<HTMLDivElement | null>(null);
	// Use 'any' to store the p5 instance, or import and use the correct p5 type if available
	const sketchRef = useRef<p5 | null>(null); // p5 type avoided here
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
			}
		})();

		return () => {
			if (sketchRef.current) {
				sketchRef.current.remove();
				sketchRef.current = null;
			}
		};
	}, []);

	return <div ref={containerRef}></div>;
}
