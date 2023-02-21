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
exports.createNewAccess = void 0;
const access_questions_create_1 = __importDefault(require("../questions/access.questions.create"));
const progress_asset_1 = __importDefault(require("../assets/progress.asset"));
const chalk_1 = require("chalk");
const workspaces_service_1 = require("../services/workspaces.service");
const createNewAccess = (user, workspace_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { auth_token: token, _id: user_id, public_key } = user;
        const { access_level, email } = yield (0, access_questions_create_1.default)();
        progress_asset_1.default.start();
        progress_asset_1.default.update(50);
        yield (0, workspaces_service_1.createAccess)({ token, user_id, public_key, access_level, email, workspace_id });
        progress_asset_1.default.update(100);
        progress_asset_1.default.stop();
        console.log(`${(0, chalk_1.green)(`SUCCESS: `)} ${'Invite sent to user'} ${email}`);
    }
    catch (e) {
        progress_asset_1.default.stop();
        // console.log(e);
        const error = e.response ? e.response.data.errors : e.toString();
        console.log(`${(0, chalk_1.red)(`ERR: `)} ${error}`);
    }
});
exports.createNewAccess = createNewAccess;
