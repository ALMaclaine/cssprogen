import { isArray, Styles } from 'cssprogen';
import { isStyles } from '../general/is-styles';

const makeImportant = (value: string | number) => `${value} !important`;

const important = (styleBlock: Styles, rules?: string[] | string): Styles => {
  const styles: Styles = {};
  for (const [key, value] of Object.entries(styleBlock)) {
    const isKey = rules === key;
    const setHasRule = isArray(rules) && rules.includes(key);
    const shouldImportant = !rules || (rules && (isKey || setHasRule));
    if (isStyles(value)) {
      styles[key] = important(value, rules);
    } else if (shouldImportant) {
      styles[key] = makeImportant(value);
    } else {
      styles[key] = value;
    }
  }

  return styles;
};
export { important };
