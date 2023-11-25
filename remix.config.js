/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  publicPath: '/_static/build/',
  server: 'server.ts',
  serverBuildPath: 'server/index.js',
  serverModuleFormat: 'cjs',
};
