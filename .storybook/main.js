import { join } from 'path';
import { fileURLToPath } from 'url';
import { mergeConfig } from 'vite';

export default {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-links', '@storybook/addon-themes'],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: true
  },
  viteFinal: async config => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          components: join(fileURLToPath(new URL('.', import.meta.url)), '../src/components')
        }
      },
      css: {
        preprocessorOptions: {
          scss: {
            api: 'modern-compiler' // ✅ Dart Sass yangi API
          }
        }
      }
    });
  }
};
