'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.DOMAINS_FETCH_URL = exports.SETUP_FETCH_URL = exports.INTEGRATION_APP_STATUS_UPDATE = exports.INTEGRATION_APP_URL = exports.INTEGRATION_APP_CREATE = exports.INTEGRATIONS_ENV_CREATE = exports.INTEGRATION_ENVS_URL = exports.INTEGRATION_FETCH_URL = exports.INTEGRATIONS_FETCH_URL = exports.INTEGRATIONS_CREATE_URL = exports.INTEGRATIONS_BASE_URL = exports.ACTIONS_FETCH_RESPONSES = exports.ACTIONS_CREATE_RESPONSES = exports.ACTION_UPDATE_DATA = exports.ACTION_FETCH_URL = exports.ACTIONS_CREATE_URL = exports.ACTIONS_BASE_URL = exports.APP_FAQ_UPDATE = exports.APP_FAQ_CREATE = exports.APP_CREATE_WEBHOOK = exports.APP_CREATE_SETUP = exports.APP_ENV_CREATE = exports.ENV_UPDATE_URL = exports.APP_SETUP_ENV_FETCH = exports.APP_SETUP_FETCH = exports.APP_FETCH_URL = exports.APPS_FETCH_URL = exports.APPS_CREATE_URL = exports.APPS_BASE_URL = exports.WORKSPACE_ACCESS_CREATE = exports.WORKSPACE_UPDATE_ENVS = exports.WORKSPACE_DEFAULT_CHANGE = exports.WORKSPACE_FETCH_URL = exports.WORKSPACE_CREATE_URL = exports.WORKSPACES_BASE_URL = exports.USER_FORGOT_URL = exports.USER_LOGIN_URL = exports.USER_CREATE_URL = exports.USER_BASE_URL = void 0;
exports.USER_BASE_URL = 'https://ductape-users-3bubdh4twq-uc.a.run.app';
exports.USER_CREATE_URL = '/users/v1/create';
exports.USER_LOGIN_URL = '/users/v1/login';
exports.USER_FORGOT_URL = '/users/v1/forgot';
exports.WORKSPACES_BASE_URL = 'https://ductape-workspaces-3bubdh4twq-uc.a.run.app';
exports.WORKSPACE_CREATE_URL = '/workspaces/v1/create';
exports.WORKSPACE_FETCH_URL = '/workspaces/v1/fetch/:user_id';
exports.WORKSPACE_DEFAULT_CHANGE = '/workspaces/v1/update/:user_id';
exports.WORKSPACE_UPDATE_ENVS = '/workspaces/v1/update/:workspace_id/defaults/envs';
exports.WORKSPACE_ACCESS_CREATE = '/workspaces/v1/createAccess';
exports.APPS_BASE_URL = 'https://ductape-apps-3bubdh4twq-uc.a.run.app';
exports.APPS_CREATE_URL = '/apps/v1/create';
exports.APPS_FETCH_URL = '/apps/v1/workspace/:workspace_id/:status';
exports.APP_FETCH_URL = '/apps/v1/:app_id';
exports.APP_SETUP_FETCH = '/apps/v1/setup/:app_id';
exports.APP_SETUP_ENV_FETCH = '/apps/v1/setup/:app_id/:env_id';
exports.ENV_UPDATE_URL = '/apps/v1/env/:env_id';
exports.APP_ENV_CREATE = '/apps/v1/app/:app_id/env';
exports.APP_CREATE_SETUP = '/apps/v1/setup/:app_id';
exports.APP_CREATE_WEBHOOK = '/actions/v1/webhook/:app_id';
exports.APP_FAQ_CREATE = '/apps/v1/FAQ/:app_id';
exports.APP_FAQ_UPDATE = '/apps/v1/FAQ/:app_id/:faq_id';
exports.ACTIONS_BASE_URL = 'https://ductape-actions-3bubdh4twq-uc.a.run.app';
exports.ACTIONS_CREATE_URL = '/actions/v1/create';
exports.ACTION_FETCH_URL = '/actions/v1/:action_id';
exports.ACTION_UPDATE_DATA = '/actions/v1/action/:action_id/data/:category';
exports.ACTIONS_CREATE_RESPONSES = '/actions/v1/response';
exports.ACTIONS_FETCH_RESPONSES = '/actions/v1/response/:action_id';
exports.INTEGRATIONS_BASE_URL = 'https://ductape-integrations-3bubdh4twq-uc.a.run.app';
exports.INTEGRATIONS_CREATE_URL = '/integrations/v1/create';
exports.INTEGRATIONS_FETCH_URL = '/integrations/v1/workspace/:workspace_id/:status';
exports.INTEGRATION_FETCH_URL = '/integrations/v1/:integration_id';
exports.INTEGRATION_ENVS_URL = '/integrations/v1/integration/:integration_id/envs';
exports.INTEGRATIONS_ENV_CREATE = '/integrations/v1/integration/:integration_id/env';
exports.INTEGRATION_APP_CREATE = '/integrations/v1/apps/add';
exports.INTEGRATION_APP_URL = '/integrations/v1/integration/:integration_id/apps';
exports.INTEGRATION_APP_STATUS_UPDATE = '/integrations/v1/apps/:id/:action';
exports.SETUP_FETCH_URL = '/apps/v1/setup/:setup_id';
exports.DOMAINS_FETCH_URL = '/apps/v1/domains';
