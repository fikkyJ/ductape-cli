import {store} from '.'

export const saveUser = (user: object) => {
    store.set('user', JSON.stringify(user))
}

export const retrieveUser = () => {
    const user = store.get('user');

    return JSON.parse(user)
}