module.exports = {
    "presets": [
      "@babel/env",
      "@babel/preset-react"
    ],
    "plugins": [
      "@babel/plugin-proposal-class-properties",
      [
        "babel-plugin-styled-components",
        {
          "ssr": false
        }
      ]
    ],
    "env": {
      "test": {
        "plugins": [
          "@babel/plugin-transform-modules-commonjs",
          "babel-plugin-dynamic-import-node"
        ]
      }
    }
  };
  