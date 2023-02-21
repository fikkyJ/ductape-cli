"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listWorkspaces = exports.fetchWorkspaceName = exports.createNewWorkspace = exports.chooseWorkspace = void 0;
const chalk_1 = __importDefault(require("chalk"));
// @ts-ignore
const prompts_1 = __importDefault(require("prompts"));
const workspaces_storage_1 = require("../storage/workspaces.storage");
const workspaces_service_1 = require("../services/workspaces.service");
const workspace_questions_create_1 = __importDefault(require("../questions/workspace.questions.create"));
const progress_asset_1 = __importDefault(require("../assets/progress.asset"));
const chalk_2 = require("chalk");
const chooseWorkspace = (user, progress_bar) => __awaiter(void 0, void 0, void 0, function* () {
    const { auth_token: token, _id: user_id, public_key } = user;
    if (!progress_bar) {
        progress_asset_1.default.start();
        progress_asset_1.default.update(50);
    }
    const spaces = yield (0, workspaces_service_1.fetchWorkspaces)({ token, public_key, user_id });
    const { data: workspaces } = spaces.data;
    if (progress_bar) {
        progress_bar.update(100);
        progress_bar.stop();
    }
    else {
        progress_asset_1.default.update(100);
        progress_asset_1.default.stop();
    }
    let choices;
    const newchoice = { title: 'Create a new workspace ', value: -1 };
    if (workspaces.length) {
        choices = workspaces.map((workspace) => ({ title: (0, chalk_1.default) `${workspace.name}`, value: workspace.workspace_id }));
        choices.push(newchoice);
    }
    else
        choices = [newchoice];
    const { workspace_id } = yield (0, prompts_1.default)([{
            name: 'workspace_id',
            type: 'select',
            message: (0, chalk_1.default) `Select a default workspace`,
            initial: 0,
            choices,
        }]);
    if (workspace_id !== -1) {
        (0, workspaces_storage_1.updateDefaultWorkspaceId)(workspace_id);
        return workspace_id;
    }
    else {
        const { _id } = yield (0, exports.createNewWorkspace)(user);
        (0, workspaces_storage_1.updateDefaultWorkspaceId)(_id);
        return _id;
    }
});
exports.chooseWorkspace = chooseWorkspace;
const createNewWorkspace = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = yield (0, workspace_questions_create_1.default)();
        const { auth_token: token, _id: user_id, public_key } = user;
        progress_asset_1.default.start();
        progress_asset_1.default.update(50);
        const res = yield (0, workspaces_service_1.createWorkspace)({ token, user_id, public_key, name });
        progress_asset_1.default.update(100);
        progress_asset_1.default.stop();
        console.log(`${(0, chalk_2.green)(`SUCCESS: `)} Workspace ${name} created`);
        return res.data.data;
    }
    catch (e) {
        progress_asset_1.default.stop();
        const error = e.response ? e.response.data.errors : e.toString();
        console.log(`${(0, chalk_2.red)(`ERR: `)} ${error}`);
    }
});
exports.createNewWorkspace = createNewWorkspace;
const fetchWorkspaceName = (user, workspace_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { auth_token: token, _id: user_id, public_key } = user;
        //Progress.start()
        //Progress.update(50)
        const spaces = yield (0, workspaces_service_1.fetchWorkspaces)({ token, public_key, user_id });
        const { data: workspaces } = spaces.data;
        //Progress.update(100);
        //Progress.stop();
        let workspace;
        for (let i = 0; i < workspaces.length; i++) {
            if (workspaces[i].workspace_id === workspace_id)
                workspace = workspaces[i];
        }
        console.log(`${(0, chalk_2.green)(`CURRENT WORKSPACE: `)} ${workspace.name} ${(0, chalk_2.green)(`CURRENT WORKSPACE_ID: `)} ${workspace_id}`);
        //console.log(`${y(`DEFAULT ENVIRONMENTS: `)}`)
        //console.log(workspace);
        /*for (let i=0;i< workspaces.envs.length; i++){
            console.log((`->  ${g(`WORKSPACE_ID: `)}${workspace._id} ${g('WORKSPACE_NAME: ')}${workspace.name}`);)
        }*/
    }
    catch (e) {
        //Progress.stop();
        const error = e.response ? e.response.data.errors : e.toString();
        console.log(`${(0, chalk_2.red)(`ERR: `)} ${error}`);
    }
});
exports.fetchWorkspaceName = fetchWorkspaceName;
const listWorkspaces = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { auth_token: token, _id: user_id, public_key } = user;
        progress_asset_1.default.start();
        progress_asset_1.default.update(50);
        const res = yield (0, workspaces_service_1.fetchWorkspaces)({ token, user_id, public_key });
        const workspaces = res.data.data;
        progress_asset_1.default.update(100);
        progress_asset_1.default.stop();
        workspaces.map((workspace) => {
            console.log(`->  ${(0, chalk_2.green)(`WORKSPACE_ID: `)}${workspace._id} ${(0, chalk_2.green)('WORKSPACE_NAME: ')}${workspace.name}`);
        });
    }
    catch (e) {
        progress_asset_1.default.stop();
        const error = e.response ? e.response.data.errors : e.toString();
        console.log(`${(0, chalk_2.red)(`ERR: `)} ${error}`);
    }
});
exports.listWorkspaces = listWorkspaces;
