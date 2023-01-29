import { html } from 'static-html';
import * as fs from "fs";
import * as path from "path";

(() => {
    const javaFilePath = path.resolve(__dirname, '/Users/daizhixia/work/practice/src/com/company/apple/KokoEatingBananas.java');
    
    const fileContent = fs.readFileSync(javaFilePath, { encoding: 'utf-8' });
    console.log("fileContent", fileContent)
})();

export default () =>

html`<p>You are on the about page</p>`;
