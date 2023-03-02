"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveUser = exports.saveUser = void 0;
const _1 = require(".");
const saveUser = (user) => {
    _1.store.set('user', JSON.stringify(user));
};
exports.saveUser = saveUser;
const retrieveUser = () => {
    const user = _1.store.get('user');
    if (user)
        return JSON.parse(user);
};
exports.retrieveUser = retrieveUser;
