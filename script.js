const button = document.querySelector(".changeColor");

function colorGenerator(quantity) {
	const colors = [
		"#1e1e1e",
		"#ffffff",
		"#007acc",
		"#4ec9b0",
		"#dcdcaa",
		"#ce9178",
		"#9cdcfe",
		"#c586c0",
		"#b5cea8",
		"#6a9955",
		"#f44747",
		"#4fc1ff",
		"#cca70a",
		"#d16969",
		"#569cd6",
		"#808080",
		"#252526",
		"#333333",
		"#0e639c",
		"#1177bb",
		"#2d2d2d",
		"#3c3c3c",
		"#515151",
		"#00f2fe",
		"#4facfe",
		"#fa709a",
		"#fee140",
		"#30cfd0",
		"#330867",
		"#accbee",
		"#e7f0fd",
		"#fbc531",
		"#e84118",
		"#00a8ff",
		"#9c88ff",
		"#4cd137",
		"#487eb0",
		"#2f3640",
		"#f5cd79",
		"#e1b12c",
	];

	const randomColor = Math.floor(Math.random() * colors.length);

	document.body.style.background = colors[randomColor];
}

button.addEventListener("click", () => {
	colorGenerator();
});
