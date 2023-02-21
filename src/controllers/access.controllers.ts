import createQuestions from "../questions/access.questions.create";
import Progress from "../assets/progress.asset";
import { green as g, yellow as y, dim as d, red as r } from 'chalk';
import { createAccess } from "../services/workspaces.service";

export const createNewAccess = async (user: any, workspace_id: string) => {
    try {

        const {auth_token: token, _id: user_id, public_key} = user;

        const {access_level, email} = await createQuestions();
        Progress.start();
        Progress.update(50);

        await createAccess({token, user_id, public_key, access_level, email, workspace_id});

        Progress.update(100);
        Progress.stop();

        console.log(`${g(`SUCCESS: `)} ${'Invite sent to user'} ${email}`);

    }  catch (e: any) {
        Progress.stop();
        // console.log(e);
        const error = e.response ? e.response.data.errors : e.toString();
        console.log(`${r(`ERR: `)} ${error}`);       
    }
}