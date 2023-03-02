import ask from '../utils/ask.utils';

export default async () => {
	const name = await ask({
		name: `name`,
		message: `Name of action`,
		hint: `(required: enter the name of action)`
	});
	const description = await ask({
		name: `description`,
		message: `Describe the action`,
		hint: `(required: short description of action)`,
		required: false
	});
    const resource = await ask({
        name: `resource`,
        message: `enter the endpoint`,
        hint: `(required: the link of the action)`
    });
    const httpVerb = await ask({
        name: `httpVerb`,
        message: `enter the request type`,
        hint: `(required: Is it a POST, GET, PUT or DELETE request)`
    })
    const tag = await ask({
        name: `tag`,
        message: `enter the tag`,
        hint: `(required: the tag of the action)`
    })
    const type = await ask({
        name: `type`,
        message: `enter the type`,
        hint: `(required: the type of the action)`
    })
    

	const vars = {
		description, 
        resource, 
        httpVerb, 
        tag, 
        type, 
        name
	};

	return vars;
};

// description, resource, httpVerb, tag, type, name