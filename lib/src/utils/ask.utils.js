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
// @ts-ignore
const enquirer_1 = require("enquirer");
const await_to_js_1 = __importDefault(require("await-to-js"));
// @ts-ignore
const cli_handle_error_1 = __importDefault(require("cli-handle-error"));
// @ts-ignore
const cli_should_cancel_1 = __importDefault(require("cli-should-cancel"));
exports.default = ({ name, message, hint, initial, optional }) => __awaiter(void 0, void 0, void 0, function* () {
    let history = false;
    const [err, response] = yield (0, await_to_js_1.default)(new enquirer_1.Input({
        name,
        message,
        hint,
        initial,
        history,
        validate(value, state) {
            if (optional && !value)
                return '';
            return !value ? `Please add a value.` : true;
        }
    })
        .on(`cancel`, () => (0, cli_should_cancel_1.default)())
        .run());
    (0, cli_handle_error_1.default)(`INPUT`, err);
    return response;
});
