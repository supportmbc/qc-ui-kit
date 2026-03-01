/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

import componentExists from '../../utils/componentExists.js';

export default {
  description: 'Add a component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value, 'components') ? 'A component with this name already exists' : true;
        }

        return 'The name is required';
      }
    }
  ],
  actions: () => {
    return [
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/{{properCase name}}.tsx',
        templateFile: './templates/component/Component.tsx.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/{{properCase name}}.stories.tsx',
        templateFile: './templates/component/Component.stories.tsx.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/{{properCase name}}.module.scss',
        templateFile: './templates/component/Component.module.scss.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/index.ts',
        templateFile: './templates/component/index.tsx.hbs',
        abortOnFail: true
      },
      {
        type: 'append',
        path: '../../src/components/index.ts',
        templateFile: './templates/component/ComponentList.hbs',
        abortOnFail: true
      }
    ];
  }
};
