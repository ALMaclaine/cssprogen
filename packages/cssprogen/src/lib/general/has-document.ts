import { isNull } from './is-null';

const hasDocument = () => typeof document !== 'undefined';
const hasDocumentElement = () =>
  hasDocument() && !isNull(document.documentElement);

export { hasDocumentElement, hasDocument };
