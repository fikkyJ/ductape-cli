import { createApp, fetchWorkspaceApps } from "../services/apps.service";
import Progress from "../assets/progress.asset";
import createQuestions from "../questions/apps.questions.create";
import { retrieveDefaultWorkspaceId } from "../storage/workspaces.storage";
import { green as g, yellow as y, dim as d, red as r } from 'chalk';

export const createNewApp = async (user: any) => {
    try {

        const workspace_id = retrieveDefaultWorkspaceId();
        const {auth_token: token, _id: user_id, public_key} = user;
        const {app_name, description} = await createQuestions();

        Progress.start();
        Progress.update(50);
        await createApp( { token, user_id, app_name, public_key, workspace_id, description })
        Progress.update(100);
        Progress.stop();

        console.log(`${g(`SUCCESS: `)} ${'App Created'}`);

    } catch(e: any) {
        Progress.stop();
        const error = e.response ? e.response.data.errors : e.toString();
        console.log(`${r(`ERR: `)} ${error}`);
    }
}

export const listWorkspaceApps = async (user: any, workspace_id: string) => {
    try {

        const {auth_token: token, _id: user_id, public_key} = user;

        Progress.start();
        Progress.update(50);
        const res = await fetchWorkspaceApps({ token, user_id, public_key, workspace_id })
        const apps = res.data.data
        Progress.update(100);
        Progress.stop();

        apps.map((app: any)=>{
            console.log(`->  ${g(`APP_ID: `)}${app._id} ${g('APP_NAME: ')}${app.app_name} ${g('ACTIVE: ')}${app.active} ${g('ENVS: ')}${app.envs.length}`);
        })
    } catch (e: any) {
        Progress.stop();
        const error = e.response ? e.response.data.errors : e.toString();
        console.log(`${r(`ERR: `)} ${error}`);       
    }
}