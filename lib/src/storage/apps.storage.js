"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveDefaultAppId = exports.updateDefaultAppId = void 0;
const _1 = require(".");
const updateDefaultAppId = (app_id) => {
    _1.store.set('defaultAppId', app_id);
};
exports.updateDefaultAppId = updateDefaultAppId;
const retrieveDefaultAppId = () => {
    return _1.store.get('defaultAppId');
};
exports.retrieveDefaultAppId = retrieveDefaultAppId;
