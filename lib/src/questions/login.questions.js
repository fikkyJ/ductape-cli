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
const ask_utils_1 = __importDefault(require("../utils/ask.utils"));
exports.default = () => __awaiter(void 0, void 0, void 0, function* () {
    const email = yield (0, ask_utils_1.default)({
        name: `email`,
        message: `Ductape Email`,
        hint: `(required: enter registerd email address)`
    });
    const password = yield (0, ask_utils_1.default)({
        name: `password`,
        message: `Ductape Password`,
        hint: `(required: enter ductape password)`
    });
    /*const otp = await ask({
        name: `otp`,
        message: `2FA OTP`,
        hint: `(optional: required if 2FA is enabled)`
    });*/
    const vars = {
        email,
        password,
        // otp
    };
    return vars;
});
