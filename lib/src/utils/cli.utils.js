"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const meow_1 = __importDefault(require("meow"));
// @ts-ignore
const cli_meow_help_1 = __importDefault(require("cli-meow-help"));
const flags = {
    version: {
        type: `boolean`,
        alias: `v`,
        desc: `Print CLI version`
    },
    list: {
        type: `boolean`,
        alias: `li`,
        desc: `View list of items`
    },
    select: {
        type: `boolean`,
        alias: `s`,
        desc: `Pick from many options`
    },
    new: {
        type: `boolean`,
        alias: `n`,
        desc: `Create new Resource`
    },
    email: {
        type: `string`,
        alias: `e`,
        desc: `Enter a valid email`
    },
    debug: {
        type: `boolean`,
        default: false,
        alias: `d`,
        desc: `Print debug info`
    }
};
const commands = {
    signup: { desc: `User signup` },
    login: { desc: `User login` },
    access: { desc: `Workspace access operations` },
    workspaces: { desc: `Workspace operations` },
    workspace_envs: { desc: `Workspace envs operations` },
    apps: { desc: `App operations` },
    app_envs: { desc: `App env operations` },
    app_setup: { desc: `App credential setup operations` },
    app_setup_envs: { desc: `App credential setup env operations` },
    app_actions: { desc: `App actions operations` },
    action_webhook: { desc: `App webhooks operations` },
    action_webhook_envs: { desc: `Action webhook envs operations` },
    integrations: { desc: `Integration projects operations` },
    integration_envs: { desc: `Integration env operations` },
    features: { desc: `Integration features operations` },
    help: { desc: `Print help info` },
};
const helpText = (0, cli_meow_help_1.default)({
    name: `ductape`,
    flags,
    commands
});
const options = {
    inferType: true,
    description: false,
    hardRejection: false,
    flags
};
// @ts-ignore
exports.default = (0, meow_1.default)(helpText, options);
