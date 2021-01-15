module.exports = {
  presets: [
    '@babel/preset-react',
    ['@babel/preset-env', {
      loose: true
    }]
  ],
  env: {
    production: {
      plugins: [
        ['transform-react-remove-prop-types', { removeImport: true }],
        ['@babel/plugin-proposal-optional-chaining', { loose: true }]
      ]
    }
  }
};
