const path = require('path');
const srcPath = path.resolve(__dirname, '../src');
console.log(srcPath)

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register',
    '@storybook/addon-storysource',
    '@storybook/addon-docs',
    '@storybook/addon-viewport/register',
    '@storybook/addon-backgrounds/register',
  ],
  webpackFinal: async (config, { configType }) => {
    // console.dir(config, { depth: null }) 

    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    
    // Make whatever fine-grained changes you need
    // config.module.rules.push({
    //   test: /\.scss$/,
    //   use: ['style-loader', 'css-loader', 'sass-loader'],
    //   include: path.resolve(__dirname, '../'),
    // });

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        'sass-loader'
      ],
    });

    		// All SCSS except globals use css modules
    config.module.rules.push({
      test: /\.css$/,
      oneOf: [
        // this matches `<style module>`
        {
          resourceQuery: /module/,
          use: [
            'vue-style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[local]_[hash:base64:5]'
              }
            }
          ]
        },
        // this matches plain `<style>` or `<style scoped>`
        {
          use: [
            'vue-style-loader',
            'css-loader'
          ]
        }
      ]
    });

    config.resolve.alias['@'] = srcPath;

    // Return the altered config
    return config;
  },
};
