module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@app": "./app",
            "@components": "./components",
            "@context": "./context",
            "@utils": "./utils",
            "@types": "./types",
            "@services": "./services"
          }
        }
      ]
    ]
  };
};
