module.exports = {
  root: "../public",
  verbose: true,
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/fonts\.(gstatic|googleapis)\.com/,
      handler: "cacheFirst",
      options: {
        cache: { name: "fonts-cache", maxEntries: 5 }
      }
    }, {
      urlPattern: /^https:\/\/s7\.addthis\.com/,
      handler: "cacheFirst",
      options: {
        cache: { name: "addthis-cache", maxEntries: 1 }
      }
    }
  ]
}
