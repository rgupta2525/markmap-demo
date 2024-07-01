import { loadCSS, loadJS } from 'markmap-common';
import { Transformer } from 'markmap-lib';

export const transformer = new Transformer();
const { scripts, styles } = transformer.getAssets();

if (styles) {
  loadCSS(styles);
}

if (scripts) {
  loadJS(scripts);
}