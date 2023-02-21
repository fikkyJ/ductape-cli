import { green as g, yellow as y, dim as d, red as r } from 'chalk';
import questions from '../questions/login.questions';
import {loginUser} from '../services/users.service';
import { saveUser } from '../storage/user.storage';
import progress_bar from '../assets/progress.asset';
import { chooseWorkspace } from './workspaces.controller';
import { updateDefaultWorkspaceId } from '../storage/workspaces.storage';

export default async () => {
    const vars = await questions();

    try{
        
        progress_bar.start(100, 0);
        progress_bar.update(80);
          
        const res = await loginUser(vars);
        progress_bar.update(95);

        const user = res.data.data;

        saveUser(user);

        await chooseWorkspace(user, progress_bar);
        
        console.log(`${g(`SUCCESS: `)} ${"Logged In Successfully"}`);
    } catch(e: any){
        progress_bar.stop();
        const error = e.response ? e.response.data.errors : e.toString();
        console.log(`${r(`ERR: `)} ${error}`);
    }
}