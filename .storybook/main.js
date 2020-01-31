const path = require('path');
const srcPath = path.resolve(__dirname, '../src');
console.log(srcPath)

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    // '@storybook/addon-actions',
    // '@storybook/addon-links',
    // '@storybook/addon-knobs/register',
    // '@storybook/addon-storysource',
    // '@storybook/addon-docs',
    // '@storybook/addon-viewport/register',
    // '@storybook/addon-backgrounds/register',
  ],
  webpackFinal: async (config, { configType }) => {
    // console.dir(config, { depth: null }) 
    
    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      oneOf: [
        // this matches `<style module>`
        {
          resourceQuery: /module/,
          use: [
            'vue-style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: { localIdentName: '[name]_[local]_[hash:base64:5]' }
              }
            },
            'sass-loader',
          ]
        },
        // this matches plain `<style>` or `<style scoped>`
        {
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader',
          ]
        }
      ]
    });

    // All SCSS except globals use css modules
    config.module.rules.push({
      test: /\.css$/,
      oneOf: [
        // this matches `<style lang="scss" module>`
        {
          resourceQuery: /module/,
          use: [
            'vue-style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: { localIdentName: '[name]_[local]_[hash:base64:5]' }
              }
            },
            'sass-loader',
          ]
        },
        // this matches plain `<style lang="scss">` or `<style lang="scss" scoped>`
        {
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader',
          ]
        }
      ]
    });

    // aliases
    config.resolve.alias['@'] = srcPath;

    // Return the altered config
    return config;
  },
};
