module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://a-marquez.github.io/portfolio/`,
    // Your Name
    name: 'Albert Marquez',
    // Main Site Title
    title: `Albert Marquez | Software Engineer`,
    // Description that goes under your name in main bio
    description: `Software Engineer, Data Privacy Advocate`,
    // Optional: Twitter account handle
    // author: `@a-marquez`,
    // Optional: Github account URL
    github: `https://github.com/a-marquez`,
    // Optional: LinkedIn account URL
    // linkedin: `https://www.linkedin.com/in/ryanafitzgerald/`,
    // Content of the About Me section
    about: `I'm a software engineer with both front-end and back-end experience. Clean performant code is a passion of mine, as is contributing to
    efforts in environmental or health information spaces. Tech interests include automation scripting, computer-vision, machine learning,
    and microservice orchestration. Non-tech interests include swimming, music, and survival games.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'STATCompiler Dashboard',
        description:
          '',
        link: '',
      }
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Blue Raster',
        description: 'Software Engineer,  June 2013 - Dec 2016',
        link: 'https://www.blueraster.com/',
      },
      {
        name: 'Volunteer & Open Source Contributor',
        description: 'Developer, March 2020 - Present',
        link: '',
      },
      {
        name: 'Gypsy Floors',
        description: 'IT Adminisrator, January 2016 - March 2020',
        link: '',
      }
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript/TypeScript, Node.js, React, Redux, Ramda, ArcGIS JS, WordPress',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), GIT, CI / CD, Microservices, Figma, Functional Programming',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
