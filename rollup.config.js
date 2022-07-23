import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
export default {
  input: 'src/main.js',
  output: [
    {
      dir: 'dist',
      format: 'es',
    },
    {
      dir: 'dist/optimize',
      name: 'version',
      plugins: [terser()],
    }
  ],
  plugins: [json()]
};