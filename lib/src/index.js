#!/usr/bin/env node
"use strict";
/**
 * cli
 * command line interface for ductape
 *
 * @author Sanni Oluwafikayo <https://fikayo.sanni.com>
 */
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
const init_utils_1 = __importDefault(require("./utils/init.utils"));
const cli_utils_1 = __importDefault(require("./utils/cli.utils"));
const log_utils_1 = __importDefault(require("./utils/log.utils"));
const login_controllers_1 = __importDefault(require("./controllers/login.controllers"));
const workspaces_controller_1 = require("./controllers/workspaces.controller");
const access_controllers_1 = require("./controllers/access.controllers");
const user_storage_1 = require("./storage/user.storage");
const apps_controllers_1 = require("./controllers/apps.controllers");
const workspaces_storage_1 = require("./storage/workspaces.storage");
const input = cli_utils_1.default.input;
const flags = cli_utils_1.default.flags;
const { clear, debug } = flags;
(() => __awaiter(void 0, void 0, void 0, function* () {
    // @ts-ignore
    (0, init_utils_1.default)({ clear });
    input.includes(`help`) && cli_utils_1.default.showHelp(0);
    debug && (0, log_utils_1.default)(flags);
    const user = (0, user_storage_1.retrieveUser)();
    if (!user)
        yield (0, login_controllers_1.default)();
    if (input.includes('access')) {
        if (flags.new) {
            yield (0, access_controllers_1.createNewAccess)(user, (0, workspaces_storage_1.retrieveDefaultWorkspaceId)());
        }
        else {
            cli_utils_1.default.showHelp(0);
        }
    }
    else if (input.includes('login')) {
        yield (0, login_controllers_1.default)();
    }
    else if (input.includes('workspaces')) {
        if (flags.select)
            yield (0, workspaces_controller_1.chooseWorkspace)(user);
        else if (flags.new)
            yield (0, workspaces_controller_1.createNewWorkspace)(user);
        else if (flags.version)
            yield (0, workspaces_controller_1.fetchWorkspaceName)(user, (0, workspaces_storage_1.retrieveDefaultWorkspaceId)());
        else if (flags.list) {
            yield (0, workspaces_controller_1.fetchWorkspaceName)(user, (0, workspaces_storage_1.retrieveDefaultWorkspaceId)());
            yield (0, workspaces_controller_1.listWorkspaces)(user);
        }
        else {
            cli_utils_1.default.showHelp(0);
        }
    }
    else if (input.includes('apps')) {
        // if()
        if (flags.new)
            yield (0, apps_controllers_1.createNewApp)(user);
        else if (flags.list) {
            yield (0, workspaces_controller_1.fetchWorkspaceName)(user, (0, workspaces_storage_1.retrieveDefaultWorkspaceId)());
            yield (0, apps_controllers_1.listWorkspaceApps)(user, (0, workspaces_storage_1.retrieveDefaultWorkspaceId)());
        }
        else {
            cli_utils_1.default.showHelp(0);
        }
    }
    else if (input.includes('actions')) {
        if (flags.new) { }
        // await createNewAction(user);
    }
}))();
