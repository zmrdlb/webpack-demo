module.exports = function (api) {

  console.log('babel.config.js log begin---');

  console.log('process.env.NODE_ENV',process.env.NODE_ENV); //undefined

  const isDevelopment = api.env('development');
  api.cache.using(() => isDevelopment);

  if(isDevelopment){
      console.warn('检测到是development');
  }else{
      console.warn('检测到 不是 development');
  }

  console.log('babel.config.js log end---')

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
              corejs: {
                  version: 3,
                  proposals: true
              }
          }
      ],
      "syntax-dynamic-import"
  ];

  return {
      presets,
      plugins
  };
}
