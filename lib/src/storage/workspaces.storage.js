"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveDefaultWorkspaceId = exports.updateDefaultWorkspaceId = void 0;
const _1 = require(".");
const updateDefaultWorkspaceId = (workspace_id) => {
    _1.store.set('defaultWorkspaceId', workspace_id);
};
exports.updateDefaultWorkspaceId = updateDefaultWorkspaceId;
const retrieveDefaultWorkspaceId = () => {
    return _1.store.get('defaultWorkspaceId');
};
exports.retrieveDefaultWorkspaceId = retrieveDefaultWorkspaceId;
