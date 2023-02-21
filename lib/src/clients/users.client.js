"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.workspaceClient = exports.userClient = exports.emailClient = void 0;
const axios_1 = __importStar(require("axios"));
const urls_1 = require("../config/urls");
const source = axios_1.CancelToken.source();
const requestInterceptor = (config) => __awaiter(void 0, void 0, void 0, function* () {
    config.cancelToken = source.token;
    return config;
});
let instance;
const emailClient = (auth, contentType) => {
    if (instance)
        return instance;
    instance = axios_1.default.create({
        baseURL: "",
        timeout: 15000,
        headers: {
            'Content-Type': contentType,
            Authorization: auth
        },
        withCredentials: false
    });
    // @ts-ignore
    instance.interceptors.request.use(requestInterceptor);
    return instance;
};
exports.emailClient = emailClient;
const userClient = (auth, contentType) => {
    if (instance)
        return instance;
    instance = axios_1.default.create({
        baseURL: urls_1.USER_BASE_URL,
        timeout: 5000,
        headers: {
            'Content-Type': contentType,
            Authorization: auth
        },
        withCredentials: false
    });
    // @ts-ignore
    instance.interceptors.request.use(requestInterceptor);
    return instance;
};
exports.userClient = userClient;
const workspaceClient = (auth, contentType) => {
    if (instance)
        return instance;
    instance = axios_1.default.create({
        baseURL: urls_1.WORKSPACES_BASE_URL,
        timeout: 1000,
        headers: {
            'Content-Type': contentType,
            Authorization: auth
        },
        withCredentials: false
    });
    // @ts-ignore
    instance.interceptors.request.use(requestInterceptor);
    return instance;
};
exports.workspaceClient = workspaceClient;
