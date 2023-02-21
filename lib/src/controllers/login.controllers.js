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
const chalk_1 = require("chalk");
const login_questions_1 = __importDefault(require("../questions/login.questions"));
const users_service_1 = require("../services/users.service");
const user_storage_1 = require("../storage/user.storage");
const progress_asset_1 = __importDefault(require("../assets/progress.asset"));
const workspaces_controller_1 = require("./workspaces.controller");
exports.default = () => __awaiter(void 0, void 0, void 0, function* () {
    const vars = yield (0, login_questions_1.default)();
    try {
        progress_asset_1.default.start(100, 0);
        progress_asset_1.default.update(80);
        const res = yield (0, users_service_1.loginUser)(vars);
        progress_asset_1.default.update(95);
        const user = res.data.data;
        (0, user_storage_1.saveUser)(user);
        yield (0, workspaces_controller_1.chooseWorkspace)(user, progress_asset_1.default);
        console.log(`${(0, chalk_1.green)(`SUCCESS: `)} ${"Logged In Successfully"}`);
    }
    catch (e) {
        progress_asset_1.default.stop();
        const error = e.response ? e.response.data.errors : e.toString();
        console.log(`${(0, chalk_1.red)(`ERR: `)} ${error}`);
    }
});
