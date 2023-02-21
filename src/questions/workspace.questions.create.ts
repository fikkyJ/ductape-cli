import ask from '../utils/ask.utils';

export default async () => {
	const name = await ask({
		name: `workspace`,
		message: `Enter Workspace Name`,
		hint: `(required: enter name of new workspace)`
	});

	/*const otp = await ask({
		name: `otp`,
		message: `2FA OTP`,
		hint: `(optional: required if 2FA is enabled)`
	});*/

	const vars = {
		name
		// otp
	};

	return vars;
};
