import ask from '../utils/ask.utils';

export default async () => {
	const email = await ask({
		name: `email`,
		message: `Enter user email`,
		hint: `(required: enter email of new workspace user)`
	});

	const access_level = await ask({
		name: `access_level`,
		message: `Enter Access Level`,
		hint: `(required: value must be [owner | admin | collaborator])`
	});

	const vars = {
		email,
		access_level
	};

	return vars;
};
