module.exports = {
  siteMetadata: {
    title: "The official blog from Daniel Uhlmann",
    author: "Daniel Uhlmann",
    description: "I write about tech, developing and devops topics!",
    siteUrl: "https://xfuture-blog.netlify.com/"
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "<your-google-analytics-tracking-id>",
        head: true,
        anonymize: true,
        respectDNT: false,
        exclude: []
      },
    },
    {
      // RSS feed for your gatsby blog
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
        }
      }
     }
    `,
    output: "/rss.xml",
    title: "xFutures Blog RSS Feed",
      }
    },
    {
      // location of your blog posts
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1140,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-plugin-react-helmet'
  ],
};
