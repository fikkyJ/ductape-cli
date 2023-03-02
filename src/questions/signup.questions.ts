import ask from '../utils/ask.utils';

export default async () => {
	const firstname = await ask({
		name: `firstname`,
		message: `Ductape Firstname`,
		hint: `(required: enter your firstname)`
	});
    const lastname = await ask({
		name: `lastname`,
		message: `Ductape Lastname`,
		hint: `(required: enter your lastname)`
	});
    const email = await ask({
        name:`email`,
        message: `Ductape Email`,
        hint: `(required: enter your email)`
    });
	const password = await ask({
		name: `password`,
		message: `Ductape Password`,
		hint: `(required: enter your password)`
	});
    const bio = await ask({
        name: `bio`,
        message: `Ductape Bio`,
		optional: true,
        hint: `(optional: enter your Ductape bio)`
    });

	/*const otp = await ask({
		name: `otp`,
		message: `2FA OTP`,
		hint: `(optional: required if 2FA is enabled)`
	});*/

	const vars = {
		firstname,
        lastname,
		password,
        email,
        bio,
		// otp
	};

	return vars;
};

    // private_key
    // active