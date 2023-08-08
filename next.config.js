/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
