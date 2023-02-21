"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cli_welcome_1 = __importDefault(require("cli-welcome"));
const package_json_1 = __importDefault(require("../../package.json"));
// @ts-ignore
const cli_handle_unhandled_1 = __importDefault(require("cli-handle-unhandled"));
exports.default = ({ clear = true }) => {
    (0, cli_handle_unhandled_1.default)();
    (0, cli_welcome_1.default)({
        title: `ductape-cli`,
        tagLine: `by ductape LLC`,
        description: package_json_1.default.description,
        version: package_json_1.default.version,
        bgColor: '#36BB09',
        color: '#000000',
        bold: true,
        clear
    });
};
