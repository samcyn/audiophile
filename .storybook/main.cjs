module.exports = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  features: {
    storyStoreV7: true,
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.css$/i,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            implementation:
              require.resolve('postcss'),
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });
    // Return the altered config
    return config;
  },
};
