// metro.config.js

const { getDefaultConfig } = require("@expo/metro-config");

const config = getDefaultConfig(__dirname);

// Modify transformer
config.transformer.babelTransformerPath = require.resolve(
  "react-native-svg-transformer"
);

// Modify resolver
const assetExts = config.resolver.assetExts.filter((ext) => ext !== "svg");
const sourceExts = [...config.resolver.sourceExts, "svg"];

config.resolver.assetExts = assetExts;
config.resolver.sourceExts = sourceExts;

module.exports = config;
