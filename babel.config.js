module.exports = function (api) {

  console.log('babel.config.js');
  console.log('process.env.NODE_ENV',process.env.NODE_ENV); //undefined

  const isDevelopment = api.env('development');
  api.cache.using(() => isDevelopment);

  const presets = [
    [
        "@babel/preset-env",
        {
            modules: false,
            useBuiltIns: "usage",
            corejs: {
                version: 3,
                proposals: true
            }
        }
    ], [
        "@babel/preset-react",
        {
            development: isDevelopment
        }
    ]
  ];

  const plugins = [
      [
          "@babel/plugin-transform-runtime",
          {
              corejs: 3,
              proposals: true
          }
      ],
      "syntax-dynamic-import"
  ];

  if(isDevelopment){
      console.warn('检测到是development');
    //   plugins.push(["react-transform", {
    //      "transforms": [{
    //        "transform": "react-transform-hmr",
      //
    //        "imports": ["react"],
      //
    //        "locals": ["module"]
    //      }]
    //   }])
  }

  return {
      presets,
      plugins
  };
}
