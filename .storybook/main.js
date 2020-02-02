const path = require('path');
const srcPath = path.resolve(__dirname, '../src');
console.log(srcPath)

module.exports = {
  stories: ['../src/**/*.stories.(js|mdx)'],
  presets: {
    name: "@storybook/addon-docs/vue/preset",
    options: {
      configureJSX: true
    },
  },
  addons: [
    '@storybook/addon-viewport/register',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-storysource',
    {
      name: '@storybook/addon-docs',
      options: {
        babelOptions: {
          presets: [
            [
              '@vue/cli-plugin-babel/preset',
              {
                jsx: false
              }
            ]
          ]
        }
      }
    },
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