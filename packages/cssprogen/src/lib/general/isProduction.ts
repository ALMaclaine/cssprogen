import {isBrowser} from "./isBrowser";
import * as process from "process";

const isProduction = () => !isBrowser() && process.env["NODE_ENV"] === 'production';
export {isProduction};
