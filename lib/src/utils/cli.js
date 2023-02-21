"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const meow_1 = __importDefault(require("meow"));
// @ts-ignore
const cli_meow_help_1 = __importDefault(require("cli-meow-help"));
const flags = {
    clear: {
        type: `boolean`,
        default: false,
        alias: `c`,
        desc: `Clear the console`
    },
    noClear: {
        type: `boolean`,
        default: false,
        desc: `Don't clear the console`
    },
    debug: {
        type: `boolean`,
        default: false,
        alias: `d`,
        desc: `Print debug info`
    },
    version: {
        type: `boolean`,
        alias: `v`,
        desc: `Print CLI version`
    }
};
const commands = {
    help: { desc: `Print help info` }
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
