import welcome from "cli-welcome";
import pkg from "../../package.json";

// @ts-ignore
import unhandled from "cli-handle-unhandled";

export default ({ clear = true }) => {
	unhandled();
	welcome({
		title: `ductape-cli`,
		tagLine: `by ductape LLC`,
		description: pkg.description,
		version: pkg.version,
		bgColor: '#36BB09',
		color: '#000000',
		bold: true,
		clear
	});
};
