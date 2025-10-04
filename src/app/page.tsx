import fs from "fs";
import path from "path";
import React from "react";
import ReactMarkdown from "react-markdown";

export default async function HomePage() {
	const RREADMEfilePath = path.join(process.cwd(), "README.md");
	const READMEContent = fs.readFileSync(RREADMEfilePath, "utf-8");

	return (
		<main className="prose mx-auto p-6">
			<ReactMarkdown>{READMEContent}</ReactMarkdown>
		</main>
	);
}
