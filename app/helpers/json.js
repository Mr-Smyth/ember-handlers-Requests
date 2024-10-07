import { helper } from '@ember/component/helper';

export function json([value]) {
  return JSON.stringify(value, null, 2); // Pretty print JSON
}

export default helper(json);
