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
exports.createNewAction = void 0;
const actions_service_1 = require("../services/actions.service");
const workspaces_storage_1 = require("../storage/workspaces.storage");
const actions_questions_create_1 = __importDefault(require("../questions/actions.questions.create"));
const progress_asset_1 = __importDefault(require("../assets/progress.asset"));
const chalk_1 = require("chalk");
const apps_controllers_1 = require("./apps.controllers");
const createNewAction = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const workspace_id = (0, workspaces_storage_1.retrieveDefaultWorkspaceId)();
        const app_id = yield (0, apps_controllers_1.selectWorkspaceApp)(user, workspace_id);
        const { auth_token: token, _id: user_id, public_key } = user;
        console.log(`${(0, chalk_1.green)(`Enter action details`)}`);
        const { description, resource, httpVerb, tag, type, name } = yield (0, actions_questions_create_1.default)();
        progress_asset_1.default.start();
        progress_asset_1.default.update(50);
        yield (0, actions_service_1.createActions)({ token, user_id, name, public_key, workspace_id, app_id, description, resource, httpVerb, tag, type });
        progress_asset_1.default.update(100);
        progress_asset_1.default.stop();
        console.log(`${(0, chalk_1.green)(`SUCCESS: `)} ${'App Created'}`);
    }
    catch (e) {
        progress_asset_1.default.stop();
        const error = e.response ? e.response.data.errors : e.toString();
        console.log(`${(0, chalk_1.red)(`ERR: `)} ${error}`);
    }
});
exports.createNewAction = createNewAction;
