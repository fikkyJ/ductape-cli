import chalk from "chalk"
// @ts-ignore
import prompts from 'prompts';
import { retrieveDefaultWorkspaceId, updateDefaultWorkspaceId } from "../storage/workspaces.storage";
import { createWorkspace, fetchWorkspaces } from "../services/workspaces.service";
import createQuestions from "../questions/workspace.questions.create";
import Progress from "../assets/progress.asset";
import { green as g, yellow as y, dim as d, red as r } from 'chalk';

export const chooseWorkspace = async (user: any, progress_bar?: any) => {
    const { auth_token: token, _id: user_id, public_key } = user;

    if (!progress_bar) {
        Progress.start()
        Progress.update(50)
    }

    const spaces = await fetchWorkspaces({ token, public_key, user_id });
    const { data: workspaces } = spaces.data;

    if (progress_bar) {
        progress_bar.update(100);
        progress_bar.stop();
    } else {
        Progress.update(100);
        Progress.stop();
    }

    let choices;
    const newchoice = { title: 'Create a new workspace ', value: -1 }
    if (workspaces.length) {
        choices = workspaces.map((workspace: any) => ({ title: chalk`${workspace.name}`, value: workspace.workspace_id }))
        choices.push(newchoice)
    } else choices = [newchoice];

    const { workspace_id } = await prompts([{
        name: 'workspace_id',
        type: 'select',
        message: chalk`Select a default workspace`,
        initial: 0,
        choices,
    }]);

    if (workspace_id !== -1) {
        updateDefaultWorkspaceId(workspace_id);
        return workspace_id;
    } else {

        const { _id } = await createNewWorkspace(user);
        updateDefaultWorkspaceId(_id);
        return _id;
    }
}

export const createNewWorkspace = async (user: any) => {
    try {
        const { name } = await createQuestions();

        const { auth_token: token, _id: user_id, public_key } = user;
        Progress.start();
        Progress.update(50);
        const res = await createWorkspace({ token, user_id, public_key, name })

        Progress.update(100);
        Progress.stop();

        console.log(`${g(`SUCCESS: `)} Workspace ${name} created`);
        return res.data.data;
    } catch (e: any) {
        Progress.stop();
        const error = e.response ? e.response.data.errors : e.toString();
        console.log(`${r(`ERR: `)} ${error}`);
    }
}

export const fetchWorkspaceName = async (user: any, workspace_id: string) => {
    try {
        const { auth_token: token, _id: user_id, public_key } = user;

        //Progress.start()
        //Progress.update(50)
        const spaces = await fetchWorkspaces({ token, public_key, user_id });
        const { data: workspaces } = spaces.data;
        //Progress.update(100);
        //Progress.stop();

        let workspace;

        for (let i = 0; i < workspaces.length; i++) {
            if (workspaces[i].workspace_id === workspace_id) workspace = workspaces[i]
        }

        console.log(`${g(`CURRENT WORKSPACE: `)} ${workspace.name} ${g(`CURRENT WORKSPACE_ID: `)} ${workspace_id}`);

        //console.log(`${y(`DEFAULT ENVIRONMENTS: `)}`)
        
        //console.log(workspace);
        /*for (let i=0;i< workspaces.envs.length; i++){
            console.log((`->  ${g(`WORKSPACE_ID: `)}${workspace._id} ${g('WORKSPACE_NAME: ')}${workspace.name}`);)
        }*/
    } catch (e: any) {
        //Progress.stop();
        const error = e.response ? e.response.data.errors : e.toString();
        console.log(`${r(`ERR: `)} ${error}`);
    }
}

export const listWorkspaces = async (user: any) => {
    try {

        const {auth_token: token, _id: user_id, public_key} = user;

        Progress.start();
        Progress.update(50);
        const res = await fetchWorkspaces({ token, user_id, public_key})
        const workspaces = res.data.data
        Progress.update(100);
        Progress.stop();

        workspaces.map((workspace: any)=>{
            console.log(`->  ${g(`WORKSPACE_ID: `)}${workspace._id} ${g('WORKSPACE_NAME: ')}${workspace.name}`);
        })
    } catch (e: any) {
        Progress.stop();
        const error = e.response ? e.response.data.errors : e.toString();
        console.log(`${r(`ERR: `)} ${error}`);       
    }
}