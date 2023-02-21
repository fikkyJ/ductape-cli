export const fetchInitials = (firstname: string, lastname: string) => {
    if (firstname && lastname) {
        return `${firstname.charAt(0)} ${lastname.charAt(0)}`;
    } else if (firstname) {
        return `${firstname.charAt(0)}`;
    }
}

export const numFormatter =(num: number, digits: number = 2) => {
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
}

export const thousandSeparator = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export const tagify = (str: string) => {
    return str.replace(/[^A-Z0-9]/gi, '_').toUpperCase();
}

export const tagifyIgnoreCase = (str: string) => {
    return str.replace(/[^A-Z0-9]/gi, '_');
}

export const  uniqueCheck = (arr: Array<unknown>, data: any) => {
    const found = arr.some((el: any) => el._id === data._id);
    return !found;
}

export const  resourcify = (str: string) => {
    if (!str.startsWith('/')) str = `/${str}`;
    return str.replace(/[^A-Z0-9:]/gi, '/');
}

export const  Parameterize = (URL: string, datapoint: string, replacement: string) => {
    return URL.replace(datapoint, replacement);
}

export const  cleanFields = (array: Array<object>) => {
    const arr = [];

    for (let i = 0; i < array.length; i++) {
        const obj = array[i];
        const isEmpty = Object.values(obj).every((x) => x === null || x === '');

        if (!isEmpty) arr.push(obj);
    }

    return arr;
}

export const  isValidHttpUrl = (string: string) => {
    let url;

    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }

    return url.protocol === 'http:' || url.protocol === 'https:';
}