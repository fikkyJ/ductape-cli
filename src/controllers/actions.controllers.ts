import { createActions } from "../services/actions.service";
import { retrieveDefaultWorkspaceId } from "../storage/workspaces.storage";
import Progress from "../assets/progress.asset";
import { green as g, yellow as y, dim as d, red as r } from 'chalk';

export const createNewAction = async (user: any) => {
    try {

        const workspace_id = retrieveDefaultWorkspaceId();
        const {auth_token: token, _id: user_id, public_key} = user;
       // const {app_name, description} = await createQuestions();

        Progress.start();
        Progress.update(50);
        // await createActions( { token, user_id, app_name, public_key, workspace_id, description })
        Progress.update(100);
        Progress.stop();

        console.log(`${g(`SUCCESS: `)} ${'App Created'}`);

    } catch(e: any) {
        Progress.stop();
        const error = e.response ? e.response.data.errors : e.toString();
        console.log(`${r(`ERR: `)} ${error}`);
    }
}   