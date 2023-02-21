"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidHttpUrl = exports.cleanFields = exports.Parameterize = exports.resourcify = exports.uniqueCheck = exports.tagifyIgnoreCase = exports.tagify = exports.capitalize = exports.thousandSeparator = exports.numFormatter = exports.fetchInitials = void 0;
const fetchInitials = (firstname, lastname) => {
    if (firstname && lastname) {
        return `${firstname.charAt(0)} ${lastname.charAt(0)}`;
    }
    else if (firstname) {
        return `${firstname.charAt(0)}`;
    }
};
exports.fetchInitials = fetchInitials;
const numFormatter = (num, digits = 2) => {
    const lookup = [
        { value: 1, symbol: '' },
        { value: 1e3, symbol: 'K' },
        { value: 1e6, symbol: 'M' },
        { value: 1e9, symbol: 'B' },
        { value: 1e12, symbol: 'T' },
        { value: 1e15, symbol: 'P' },
        { value: 1e18, symbol: 'E' },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup
        .slice()
        .reverse()
        .find((item) => {
        return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol : '0';
};
exports.numFormatter = numFormatter;
const thousandSeparator = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
exports.thousandSeparator = thousandSeparator;
const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
exports.capitalize = capitalize;
const tagify = (str) => {
    return str.replace(/[^A-Z0-9]/gi, '_').toUpperCase();
};
exports.tagify = tagify;
const tagifyIgnoreCase = (str) => {
    return str.replace(/[^A-Z0-9]/gi, '_');
};
exports.tagifyIgnoreCase = tagifyIgnoreCase;
const uniqueCheck = (arr, data) => {
    const found = arr.some((el) => el._id === data._id);
    return !found;
};
exports.uniqueCheck = uniqueCheck;
const resourcify = (str) => {
    if (!str.startsWith('/'))
        str = `/${str}`;
    return str.replace(/[^A-Z0-9:]/gi, '/');
};
exports.resourcify = resourcify;
const Parameterize = (URL, datapoint, replacement) => {
    return URL.replace(datapoint, replacement);
};
exports.Parameterize = Parameterize;
const cleanFields = (array) => {
    const arr = [];
    for (let i = 0; i < array.length; i++) {
        const obj = array[i];
        const isEmpty = Object.values(obj).every((x) => x === null || x === '');
        if (!isEmpty)
            arr.push(obj);
    }
    return arr;
};
exports.cleanFields = cleanFields;
const isValidHttpUrl = (string) => {
    let url;
    try {
        url = new URL(string);
    }
    catch (_) {
        return false;
    }
    return url.protocol === 'http:' || url.protocol === 'https:';
};
exports.isValidHttpUrl = isValidHttpUrl;
