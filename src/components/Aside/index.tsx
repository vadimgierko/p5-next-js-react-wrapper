import { Color, Play, Speed, XPos } from "@/types";
import { ChangeEvent } from "react";

export function Aside({
	xPos,
	speed,
	onSpeedChange,
	color,
	onColorChange,
	play,
	onPlayToggle,
}: {
	xPos: XPos;
	speed: Speed;
	onSpeedChange: (e: ChangeEvent<HTMLInputElement>) => void;
	color: Color;
	onColorChange: (e: ChangeEvent<HTMLInputElement>) => void;
	play: Play;
	onPlayToggle: () => void;
}) {
	return (
		<aside style={{ marginBottom: "1em" }}>
			<div id="controls" style={{ margin: "1em" }}>
				<label style={{ marginRight: "1em" }}>
					Play: <input type="checkbox" checked={play} onChange={onPlayToggle} />
				</label>
				<label style={{ marginRight: "1em" }}>
					Speed:{" "}
					<input
						type="range"
						min="1"
						max="10"
						value={speed}
						onChange={onSpeedChange}
					/>
				</label>

				<label>
					Color: <input type="color" value={color} onChange={onColorChange} />
				</label>
			</div>
			<div style={{ margin: "1em" }}>
				Circle X position (from sketch):
				<br />
				{xPos}
			</div>
		</aside>
	);
}
