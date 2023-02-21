"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const cli_progress_1 = __importDefault(require("cli-progress"));
const progress_bar = new cli_progress_1.default.SingleBar({
    format: '{bar}',
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591',
    hideCursor: true
}, cli_progress_1.default.Presets.shades_classic);
exports.default = progress_bar;
