"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const cli_alerts_1 = __importDefault(require("cli-alerts"));
exports.default = (info) => {
    (0, cli_alerts_1.default)({
        type: `warning`,
        name: `DEBUG LOG`,
        msg: ``
    });
    console.log(info);
    console.log();
};
