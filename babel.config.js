module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            assets: "./assets",
            src: "./src",
          },
        },
      ],
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
      "nativewind/babel",
      require.resolve("expo-router/babel"),
    ],
  };
};
