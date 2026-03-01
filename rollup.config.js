import path from 'path';
import ts from 'typescript';
import cssnano from 'cssnano';
import svgr from '@svgr/rollup';
import url from '@rollup/plugin-url';
import json from '@rollup/plugin-json';
import autoprefixer from 'autoprefixer';
import svg from 'rollup-plugin-svg-import';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { visualizer } from 'rollup-plugin-visualizer';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import { getFiles } from './scripts/buildUtils.js';

const extensions = ['.js', '.ts', '.jsx', '.tsx'];
const excludeExtensions = ['.stories.tsx', 'test.tsx'];

export default [
  {
    input: ['./src/index.ts', ...getFiles('./src/components', extensions, excludeExtensions)],
    output: [
      {
        dir: 'lib',
        format: 'es',
        preserveModules: true,
        preserveModulesRoot: 'src'
      }
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      url({
        include: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
        limit: 0,
        fileName: '[dirname][hash][extname]'
      }),
      postcss({
        plugins: [
          autoprefixer(),
          cssnano({
            preset: [
              'default',
              {
                calc: false
              }
            ]
          })
        ],
        autoModules: true,
        modules: {
          generateScopedName: (name, filename) => {
            const scope = path.basename(filename, '.css').replace('.module.scss', '');
            return `${scope}_${name}`;
          }
        },
        inject: false,
        extract: true,
        use: [
          [
            'sass',
            {
              api: 'modern-compiler'
            }
          ]
        ]
      }),
      terser(),
      typescript({
        typescript: ts,
        tsconfig: './tsconfig.build.json',
        declaration: true,
        declarationDir: 'lib',
        exclude: [
          '**/*.spec.ts',
          '**/*.test.ts',
          '**/*.stories.ts',
          '**/*.spec.tsx',
          '**/*.test.tsx',
          '**/*.stories.tsx',
          'node_modules',
          'lib'
        ]
      }),
      json(),
      visualizer({
        filename: 'bundle-analysis.html',
        open: false
      }),
      svg(),
      svgr()
    ],
    external: [
      '@tinymce/tinymce-react',
      'antd',
      'classnames',
      'imask',
      'lodash',
      'react',
      'react-dom',
      'react-i18next',
      'react-imask',
      'react-share',
      'usehooks-ts',
      'apexcharts',
      'react-apexcharts'
    ]
  },
  {
    input: './src/assets/styles/main.scss',
    output: {
      file: 'lib/globals.css',
      format: 'es'
    },
    plugins: [
      postcss({
        plugins: [autoprefixer(), cssnano()],
        extract: true,
        minimize: true,
        use: [
          [
            'sass',
            {
              api: 'modern-compiler'
            }
          ]
        ]
      })
    ]
  }
];
