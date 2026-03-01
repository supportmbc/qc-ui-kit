/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */
import componentGenerator from './templates/component/index.js';

export default function (plop) {
  plop.setGenerator('component', componentGenerator);
}
