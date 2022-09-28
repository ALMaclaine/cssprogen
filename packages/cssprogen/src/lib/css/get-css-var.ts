import { hasDocumentElement } from '../general/has-document';
import { CSSProgenError, CSSProgenErrorSet } from '../general/cssprogen-error';

const getCSSVar = (varr: string, def = '') => {
  if (hasDocumentElement()) {
    const style = getComputedStyle(document.documentElement);
    const val = style.getPropertyValue(varr);
    if (val) return val.trim();
  }
  if (def) return def;
  throw new CSSProgenError(CSSProgenErrorSet.ERROR_006);
};
export { getCSSVar };
