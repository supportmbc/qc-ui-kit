/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export default function componentExists(comp, type = 'components') {
  const components = fs.readdirSync(path.join(fileURLToPath(new URL('.', import.meta.url)), `../../../src/${type}`));

  return components.indexOf(comp) >= 0;
}
