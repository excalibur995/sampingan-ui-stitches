import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';

const packageJson = require('./package.json');
const EXTENSIONS = ['.ts', '.tsx'];

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    babel({
      extensions: EXTENSIONS,
      babelHelpers: 'inline',
      include: EXTENSIONS.map((ext) => `src/**/*${ext}`),
    }),
    commonjs(),
    json(),
    typescript(),
    postcss({
      extensions: [],
      minimize: true,
    }),
  ],
};
