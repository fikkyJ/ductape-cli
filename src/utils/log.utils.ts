// @ts-ignore
import alert from "cli-alerts";

export default (info: any) => {
	alert({
		type: `warning`,
		name: `DEBUG LOG`,
		msg: ``
	});

	console.log(info);
	console.log();
};
