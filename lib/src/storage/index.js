"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = exports.storePath = void 0;
const os_1 = __importDefault(require("os"));
const path_1 = __importDefault(require("path"));
// @ts-ignore
const data_store_1 = require("data-store");
exports.storePath = path_1.default.join(os_1.default.homedir(), `.ssh/ductape-cli.json`);
exports.store = new data_store_1.Store({
    path: exports.storePath
});
