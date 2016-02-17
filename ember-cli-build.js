var EmberAddon = require('ember-cli/lib/broccoli/ember-addon')

module.exports = function (defaults) {
  var app = new EmberAddon(defaults, {
    'ember-cli-mocha': {
      useLintTree: false
    },
    sassOptions: {
      includePaths: [
        'node_modules/ember-frost-theme/scss',
        'scss'
      ]
    }
  })

  return app.toTree()
}
