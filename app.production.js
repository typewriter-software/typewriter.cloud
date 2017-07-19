const { UglifyJsPlugin, OccurrenceOrderPlugin } = require('webpack').optimize

module.exports = {
  devtool: false,
  afterSpikePlugins: [
    new UglifyJsPlugin(),
    new OccurrenceOrderPlugin()
  ]
}
