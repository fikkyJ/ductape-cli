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
    const name = yield (0, ask_utils_1.default)({
        name: `name`,
        message: `Name of action`,
        hint: `(required: enter the name of action)`
    });
    const description = yield (0, ask_utils_1.default)({
        name: `description`,
        message: `Describe the action`,
        hint: `(required: short description of action)`,
        required: false
    });
    const resource = yield (0, ask_utils_1.default)({
        name: `resource`,
        message: `enter the endpoint`,
        hint: `(required: the link of the action)`
    });
    const httpVerb = yield (0, ask_utils_1.default)({
        name: `httpVerb`,
        message: `enter the request type`,
        hint: `(required: Is it a POST, GET, PUT or DELETE request)`
    });
    const tag = yield (0, ask_utils_1.default)({
        name: `tag`,
        message: `enter the tag`,
        hint: `(required: the tag of the action)`
    });
    const type = yield (0, ask_utils_1.default)({
        name: `type`,
        message: `enter the type`,
        hint: `(required: the type of the action)`
    });
    const vars = {
        description,
        resource,
        httpVerb,
        tag,
        type,
        name
    };
    return vars;
});
// description, resource, httpVerb, tag, type, name
