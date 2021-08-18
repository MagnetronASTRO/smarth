module.exports = {
  siteMetadata: {
    title: "smarth",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "static/dashboard.ico",
      },
    },
  ],
};
