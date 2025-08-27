import {resolve, dirname} from 'node:path'
import { fileURLToPath } from 'node:url';
import {execSync} from "node:child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const editScript = resolve(__dirname, './editFile.sh')

export class ExitOnRebuiltPlugin {
    constructor() {
        this.initialBuild = true;
    }

    apply(compiler) {
        compiler.hooks.done.tap('ExitOnRebuilt', stats => {
            if (this.initialBuild) {
                this.initialBuild = false;
                // Touch file to trigger rebuild
                execSync(editScript, {stdio: [0, 1, 2]})
            } else {
                setTimeout(() => process.exit(0), 1_000)
            }
        })
    }
}
