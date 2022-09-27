import { isBrowser } from './is-browser';
import * as process from 'process';

declare global {
  interface Window {
    _cssProgen: { env: { mode: string } };
  }
}

const isProductionNode = () => process.env['NODE_ENV'] === 'production';
const isProductionBrowser = () => {
  return window._cssProgen?.env?.mode === 'production';
};

const setProductionBrowser = () => {
  window._cssProgen = { env: { mode: 'production' } };
};

const isProduction = () => {
  if (isBrowser()) {
    return isProductionBrowser();
  } else {
    return isProductionNode();
  }
};
export {
  isProduction,
  isProductionBrowser,
  isProductionNode,
  setProductionBrowser,
};
