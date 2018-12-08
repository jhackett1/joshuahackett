const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')

module.exports = withCSS(withSass({
  webpack: function (config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv))
    return config
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  }
}))