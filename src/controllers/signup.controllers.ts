import { green as g, yellow as y, dim as d, red as r } from 'chalk';
import questions from "../questions/signup.questions"
import { registerUser } from '../services/users.service';
import { saveUser } from '../storage/user.storage';
import progress_bar from '../assets/progress.asset';
import { chooseWorkspace } from './workspaces.controller';

export default async () => {
    const vars = await questions();

    try{
        
        progress_bar.start(100, 0);
        progress_bar.update(80);
          
        const res = await registerUser(vars);
        progress_bar.update(100);

        const user = res.data.data;

        saveUser(user);
        
        console.log(`${g(`SUCCESS: `)} ${"Signed Up Successfully"}`);
    } catch(e: any){
        progress_bar.stop();
        const error = e.response ? e.response.data.errors : e.toString();
        // console.log(e);
        
        console.log(`${r(`ERR: `)} ${error}`);
    }
}