module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    ['@babel/preset-env', {
      targets: {
        node: 'current'
      },
      useBuiltIns: 'usage',
      corejs: 3
    }]
  ],
  plugins: [
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining'
  ]
};
