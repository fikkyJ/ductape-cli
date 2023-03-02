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
exports.selectWorkspaceApp = exports.listWorkspaceApps = exports.createNewApp = void 0;
const chalk_1 = __importDefault(require("chalk"));
const prompts_1 = __importDefault(require("prompts"));
const apps_service_1 = require("../services/apps.service");
const progress_asset_1 = __importDefault(require("../assets/progress.asset"));
const apps_questions_create_1 = __importDefault(require("../questions/apps.questions.create"));
const workspaces_storage_1 = require("../storage/workspaces.storage");
const chalk_2 = require("chalk");
const createNewApp = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const workspace_id = (0, workspaces_storage_1.retrieveDefaultWorkspaceId)();
        const { auth_token: token, _id: user_id, public_key } = user;
        const { app_name, description } = yield (0, apps_questions_create_1.default)();
        progress_asset_1.default.start();
        progress_asset_1.default.update(50);
        yield (0, apps_service_1.createApp)({ token, user_id, app_name, public_key, workspace_id, description });
        progress_asset_1.default.update(100);
        progress_asset_1.default.stop();
        console.log(`${(0, chalk_2.green)(`SUCCESS: `)} ${'App Created'}`);
    }
    catch (e) {
        progress_asset_1.default.stop();
        const error = e.response ? e.response.data.errors : e.toString();
        console.log(`${(0, chalk_2.red)(`ERR: `)} ${error}`);
    }
});
exports.createNewApp = createNewApp;
const listWorkspaceApps = (user, workspace_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { auth_token: token, _id: user_id, public_key } = user;
        progress_asset_1.default.start();
        progress_asset_1.default.update(50);
        const res = yield (0, apps_service_1.fetchWorkspaceApps)({ token, user_id, public_key, workspace_id });
        const apps = res.data.data;
        progress_asset_1.default.update(100);
        progress_asset_1.default.stop();
        apps.map((app) => {
            console.log(`->  ${(0, chalk_2.green)(`APP_ID: `)}${app._id} ${(0, chalk_2.green)('APP_NAME: ')}${app.app_name} ${(0, chalk_2.green)('ACTIVE: ')}${app.active} ${(0, chalk_2.green)('ENVS: ')}${app.envs.length}`);
        });
    }
    catch (e) {
        progress_asset_1.default.stop();
        const error = e.response ? e.response.data.errors : e.toString();
        console.log(`${(0, chalk_2.red)(`ERR: `)} ${error}`);
    }
});
exports.listWorkspaceApps = listWorkspaceApps;
const selectWorkspaceApp = (user, workspace_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { auth_token: token, _id: user_id, public_key } = user;
        progress_asset_1.default.start();
        progress_asset_1.default.update(50);
        const res = yield (0, apps_service_1.fetchWorkspaceApps)({ token, user_id, public_key, workspace_id });
        const apps = res.data.data;
        progress_asset_1.default.update(100);
        progress_asset_1.default.stop();
        let choices;
        const newchoice = { title: 'Create a new app ', value: -1 };
        if (apps.length) {
            choices = apps.map((app) => ({ title: (0, chalk_1.default) `${app.app_name}`, value: app._id }));
            choices.push(newchoice);
        }
        else
            choices = [newchoice];
        const { app_id } = yield (0, prompts_1.default)([{
                name: 'app_id',
                type: 'select',
                message: (0, chalk_1.default) `Select an app`,
                initial: 0,
                choices,
            }]);
        return app_id;
    }
    catch (e) {
        progress_asset_1.default.stop();
        const error = e.response ? e.response.data.errors : e.toString();
        console.log(`${(0, chalk_2.red)(`ERR: `)} ${error}`);
    }
});
exports.selectWorkspaceApp = selectWorkspaceApp;
