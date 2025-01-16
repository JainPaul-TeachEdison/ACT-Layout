const path = require("path");

// bundle analyzer
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
});
