import os from 'os';
import fs from 'fs';
import path from 'path';
// @ts-ignore
import { Store } from 'data-store';

export const storePath = path.join(
    os.homedir(),
    `.ssh/ductape-cli.json`
);

export const store = new Store({
    path: storePath
});