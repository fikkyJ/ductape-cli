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
    const app_name = yield (0, ask_utils_1.default)({
        name: `app_name`,
        message: `Name of App or Service`,
        hint: `(required: enter the name of app or service)`
    });
    const description = yield (0, ask_utils_1.default)({
        name: `description`,
        message: `Describe the app`,
        hint: `(required: short description of app)`,
        required: false
    });
    const vars = {
        app_name,
        description
    };
    return vars;
});
