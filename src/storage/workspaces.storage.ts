import {store} from '.'

export const updateDefaultWorkspaceId = (workspace_id: string) => {
    store.set('defaultWorkspaceId', workspace_id)
}

export const retrieveDefaultWorkspaceId = () => {
    return  store.get('defaultWorkspaceId');
}