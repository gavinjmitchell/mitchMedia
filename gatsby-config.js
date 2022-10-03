/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `mitchMedia - A music, media and technology company`,
    author: {
      name: `Gavin Mitchell`,
    },
    description: `mitchMedia - A music, media and technology company.`,

    /* Choose and arrange the sections to be displayed on the landing page */
    sections: [
      `hero`,
      `features`,
      //      `pricing`,
      //      `call-to-action`,
      //    `screenshots`,
      //      `testimonials`,
      //      `subscribe`
    ],

    /* Configure the navigation menu */
    menuItems: [
      { path: 'features', label: 'About' },
      //      { path: 'pricing', label: 'Pricing' },
      //      { path: 'screenshots', label: 'Screenshots' },
      //      { path: 'testimonials', label: 'Testimonials' },
      //      { path: 'subscribe', label: 'Subscribe' },
    ],

    /* Provide social media accounts. Remove or add new services. (The value 'fa' is the name of FontAwesome icon to display. Choose from here: https://fontawesome.com/cheatsheet/free/brands ) */
    social: [
      {
        service: `Facebook`,
        url: `https://facebook.com/`,
        fa: `facebook`
      },
      {
        service: `Twitter`,
        url: `https://twitter.com/`,
        fa: `twitter`
      },
      {
        service: `Instagram`,
        url: `https://instagram.com/`,
        fa: `instagram`
      },
    ],

    /* Path to favicon and logo (located inside the 'static' folder) */
    favicon: `favicon.png`,
    logo: `/images/logo.png`,

    /* Logo and text to show in footer */
    footer: {
      logo: `/images/footer-logo.png`,
      text: `Music, media & technology.`,
    },

    /* Address and contact info to show in footer */
    address: {
      line1: ``,
      line2: ``,
      line3: ``,
    },
    contacts: [
      { text: ``, url: `` },
      { text: ``, url: `` },
      { text: `Email`, url: `mailto:contact@mitchmedia.co.uk` },
    ],
  },
  plugins: [`gatsby-plugin-anchor-links`, `gatsby-plugin-smoothscroll`, `react-scrollspy`],
}
