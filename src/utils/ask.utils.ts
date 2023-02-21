// @ts-ignore
import { Input } from 'enquirer';
import {default as to} from 'await-to-js';
// @ts-ignore
import handleError from 'cli-handle-error';
// @ts-ignore
import shouldCancel from 'cli-should-cancel';


export default async ({ name, message, hint, initial }: any) => {
	let history: false | object = false;
	const [err, response] = await to(
		new Input({
			name,
			message,
			hint,
			initial,
			history,
			validate(value: string, state: any) {
				return !value ? `Please add a value.` : true;
			}
		})
			.on(`cancel`, () => shouldCancel())
			.run()
	);
	handleError(`INPUT`, err);

	return response;
};
