import ask from '../utils/ask.utils';

export default async () => {
	const email = await ask({
		name: `email`,
		message: `Ductape Email`,
		hint: `(required: enter registerd email address)`
	});
	const password = await ask({
		name: `password`,
		message: `Ductape Password`,
		hint: `(required: enter ductape password)`
	});

	/*const otp = await ask({
		name: `otp`,
		message: `2FA OTP`,
		hint: `(optional: required if 2FA is enabled)`
	});*/

	const vars = {
		email,
		password,
		// otp
	};

	return vars;
};
