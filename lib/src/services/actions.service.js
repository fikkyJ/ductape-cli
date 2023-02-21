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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAppWebhook = exports.fetchResponses = exports.createResponse = exports.fetchActionData = exports.updateActionData = exports.fetchAction = exports.createActions = void 0;
const actions_client_1 = require("../clients/actions.client");
const urls_1 = require("../config/urls");
const constant_1 = require("../config/constant");
const createActions = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token, user_id, app_id, public_key, description, resource, httpVerb, tag, type, name, } = payload;
        return (0, actions_client_1.actionsClient)(`Bearer ${token}`, "application/json").post(urls_1.ACTIONS_CREATE_URL, {
            user_id,
            app_id,
            public_key,
            description,
            resource,
            httpVerb,
            tag,
            type,
            name,
        });
    }
    catch (e) {
        throw e;
    }
});
exports.createActions = createActions;
const fetchAction = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token, action_id, user_id, public_key } = payload;
        const URL = (0, constant_1.Parameterize)(urls_1.ACTION_FETCH_URL, ":action_id", action_id);
        return (0, actions_client_1.actionsClient)(`Bearer ${token}`, "application/json").get(`${URL}?user_id=${user_id}&public_key=${public_key}`);
    }
    catch (e) {
        throw e;
    }
});
exports.fetchAction = fetchAction;
const updateActionData = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token, action_id, category } = payload;
        let URL = (0, constant_1.Parameterize)(urls_1.ACTION_UPDATE_DATA, ":action_id", action_id);
        URL = (0, constant_1.Parameterize)(URL, ":category", category);
        //alert(JSON.stringify(payload));
        return (0, actions_client_1.actionsClient)(`Bearer ${token}`, "application/json").post(URL, payload);
    }
    catch (e) {
        throw e;
    }
});
exports.updateActionData = updateActionData;
const fetchActionData = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token, action_id, category, user_id, public_key, entity_id } = payload;
        let URL = (0, constant_1.Parameterize)(urls_1.ACTION_UPDATE_DATA, ":action_id", action_id);
        URL = (0, constant_1.Parameterize)(URL, ":category", category);
        //alert(JSON.stringify(payload));
        let URL_EXT = `?user_id=${user_id}&public_key=${public_key}`;
        if (entity_id)
            URL_EXT = `${URL_EXT}&entity_id=${entity_id}`;
        return (0, actions_client_1.actionsClient)(`Bearer ${token}`, "application/json").get(`${URL}${URL_EXT}`, payload);
    }
    catch (e) {
        throw e;
    }
});
exports.fetchActionData = fetchActionData;
const createResponse = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token } = payload;
        let URL = urls_1.ACTIONS_CREATE_RESPONSES;
        delete payload.token;
        return (0, actions_client_1.actionsClient)(`Bearer ${token}`, "application/json").post(URL, payload);
    }
    catch (e) {
        throw e;
    }
});
exports.createResponse = createResponse;
const fetchResponses = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { token, action_id, user_id, public_key } = payload;
    let URL = (0, constant_1.Parameterize)(urls_1.ACTIONS_FETCH_RESPONSES, ":action_id", action_id);
    return (0, actions_client_1.actionsClient)(`Bearer ${token}`, "application/json").get(`${URL}?user_id=${user_id}&public_key=${public_key}`);
});
exports.fetchResponses = fetchResponses;
const createAppWebhook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token, app_id, public_key, user_id } = payload;
        const URL = (0, constant_1.Parameterize)(urls_1.APP_CREATE_WEBHOOK, ":app_id", app_id);
        // alert(JSON.stringify(payload));
        delete payload.token;
        delete payload.app_id;
        return (0, actions_client_1.actionsClient)(`Bearer ${token}`, "application/json").post(URL, Object.assign({ public_key,
            user_id }, payload));
    }
    catch (e) {
        throw e;
    }
});
exports.createAppWebhook = createAppWebhook;
