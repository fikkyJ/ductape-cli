import ask from '../utils/ask.utils';

export default async () => {
	const app_name = await ask({
		name: `app_name`,
		message: `Name of App or Service`,
		hint: `(required: enter the name of app or service)`
	});
	const description = await ask({
		name: `description`,
		message: `Describe the app`,
		hint: `(required: short description of app)`,
		required: false
	});

	const vars = {
		app_name,
		description
	};

	return vars;
};
