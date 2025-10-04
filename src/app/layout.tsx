import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
	title: "p5.js Next.js Wrapper",
	description:
		"Next.js (App Router, TypeScript) app that wraps & integrates p5.js sketch component (canvas) with React state via ref bridge",
	authors: [{ name: "Vadim Gierko" }],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				style={{
					display: "flex",
					flexDirection: "column",
					minHeight: "100dvh",
				}}
			>
				<header style={{ textAlign: "center", padding: "1em" }}>
					<h1>
						Next.js (App Router, TypeScript) p5.js Sketch Component Wrapper
					</h1>
					<nav>
						<Link href="/">home</Link> |{" "}
						<Link href="/animation-example">animation example</Link>
					</nav>
				</header>
				<hr />
				<main style={{ flexGrow: 1, margin: "1em" }}>{children}</main>
				<footer style={{ padding: "1em", textAlign: "center" }}>
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
			</body>
		</html>
	);
}
