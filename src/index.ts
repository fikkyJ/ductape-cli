#!/usr/bin/env node

/**
 * cli
 * command line interface for ductape
 *
 * @author Sanni Oluwafikayo <https://fikayo.sanni.com>
 */

import init from "./utils/init.utils";
import cli from "./utils/cli.utils";
import log from "./utils/log.utils";
import login from "./controllers/login.controllers";
import { chooseWorkspace, createNewWorkspace, fetchWorkspaceName, listWorkspaces } from "./controllers/workspaces.controller";
import { createNewAccess } from "./controllers/access.controllers";
import { retrieveUser } from "./storage/user.storage";
import { createNewApp, listWorkspaceApps } from "./controllers/apps.controllers";
import { retrieveDefaultWorkspaceId } from "./storage/workspaces.storage";

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	// @ts-ignore
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	debug && log(flags);

	const user = retrieveUser();

	if(!user) await login();
	if(input.includes('access')){
		if(flags.new){
			await createNewAccess(user, retrieveDefaultWorkspaceId());
		} else {
			cli.showHelp(0);
		}
	}else if(input.includes('login')){
		await login();
	}else if(input.includes('workspaces')) {
	 	if(flags.select) 
			await chooseWorkspace(user);
		else if(flags.new)
			await createNewWorkspace(user);
		else if(flags.version)
			await fetchWorkspaceName(user, retrieveDefaultWorkspaceId())
		else if(flags.list){
			await fetchWorkspaceName(user, retrieveDefaultWorkspaceId())
			await listWorkspaces(user)
		} else {
			cli.showHelp(0);
		}
	}else if(input.includes('apps')) {
		// if()
		if(flags.new)
			await createNewApp(user);
		else if (flags.list){
			await fetchWorkspaceName(user, retrieveDefaultWorkspaceId())
			await listWorkspaceApps(user,retrieveDefaultWorkspaceId());
		} else {
			cli.showHelp(0);
		}
	}else if(input.includes('actions')) {
		if(flags.new){}
			// await createNewAction(user);
	}
 
})();
