import { html } from 'static-html';
import * as fs from "fs";

const data = fs.readFileSync("/Users/daizhixia/work/practice/src/com/company/apple/FirstMissingPositive.java", { encoding: 'utf-8' });
const lines = data.split("\n");
let code = lines.map(line => {
    if (line.includes("package")) {
        return "```java";
    } else {
        return line;
    }
}).join("\n");
code += "```";
export default () =>
html`${code}`;
