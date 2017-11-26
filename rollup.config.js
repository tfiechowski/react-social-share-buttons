import babel from 'rollup-plugin-babel';

const pkg = require('./package.json');
const external = [...Object.keys(pkg.dependencies)];

export default {
  input: 'src/index.js',
  plugins: [
    babel({
      babelrc: false,
      presets: [
        [
          'env',
          {
            targets: {
              node: 6,
            },
            exclude: ['transform-regenerator'],
            loose: true,
            modules: false,
          },
        ],
      ],
    }),
  ],
  external,
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
  ],
  interop: false,
};
