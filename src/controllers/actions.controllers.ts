import { createActions } from "../services/actions.service";
import { retrieveDefaultWorkspaceId } from "../storage/workspaces.storage";
import  createQuestions  from "../questions/actions.questions.create";
import Progress from "../assets/progress.asset";
import { green as g, yellow as y, dim as d, red as r } from 'chalk';
import { selectWorkspaceApp } from "./apps.controllers";

export const createNewAction = async (user: any) => {
    try {

        const workspace_id = retrieveDefaultWorkspaceId();
        const app_id = await selectWorkspaceApp(user, workspace_id);
        const {auth_token: token, _id: user_id, public_key} = user;
        console.log(`${g(`Enter action details`)}`);
        const {description, resource, httpVerb, tag, type, name} = await createQuestions();

        Progress.start();
        Progress.update(50);
        await createActions( { token, user_id, name, public_key, workspace_id, app_id, description, resource, httpVerb, tag, type })
        Progress.update(100);
        Progress.stop();

        console.log(`${g(`SUCCESS: `)} ${'App Created'}`);

    } catch(e: any) {
        Progress.stop();
        const error = e.response ? e.response.data.errors : e.toString();
        console.log(`${r(`ERR: `)} ${error}`);
    }
}   

// export const listAppActions = async (user: any, app_id: string) => {
//     try {
//         const {auth_token: token, _id: user_id, public_key} = user;
//         Progress.start();
//         Progress.update(50);
//         const res = await fetchAppActions({ token, user_id, public_key, workspace_id })
//     } catch (e: any) {
//         Progress.stop()
//         const error = e.response ? e.response.data.errors : e.toString();
//         console.log(`${r(`ERR: `)} ${error}`);
//     }
// }