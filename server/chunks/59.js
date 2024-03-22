"use strict";
exports.id = 59;
exports.ids = [59];
exports.modules = {

/***/ 7059:
/***/ ((module) => {


const siteMetadata = {
    title: 'Project SEKAI',
    author: 'Project SEKAI',
    headerTitle: 'Project SEKAI',
    description: 'Website of Project SEKAI, yet another CTF team.',
    language: 'en-us',
    theme: 'dark',
    siteUrl: 'https://sekai.team',
    siteRepo: 'https://github.com/blueset/sekai.team',
    siteLogo: '/static/images/fullLogo.svg',
    image: '/static/images/avatar.png',
    socialBanner: '/static/images/twitter-card.png?v=2',
    email: 'project.sekai@sekai.team',
    github: 'https://github.com/project-sekai-ctf',
    twitter: 'https://twitter.com/ProjectSEKAIctf',
    facebook: '',
    youtube: '',
    linkedin: 'https://www.linkedin.com/company/project-sekai-ctf/',
    ctftime: 'https://ctftime.org/team/169557',
    discord: '',
    locale: 'en-US',
    dateLocale: 'en-GB',
    analytics: {
        // supports plausible, simpleAnalytics or googleAnalytics
        plausibleDataDomain: '',
        simpleAnalytics: false,
        googleAnalyticsId: '',
        cloudflareAnalytics: 'a743232028f24754b6bbe0b63373fc97'
    },
    newsletter: {
        // supports mailchimp, buttondown, convertkit, klaviyo
        // Please add your .env file and modify it according to your selection
        provider: ''
    },
    comment: {
        // Select a provider and use the environment variables associated to it
        // https://vercel.com/docs/environment-variables
        provider: 'giscus',
        giscusConfig: {
            // Visit the link below, and follow the steps in the 'configuration' section
            // https://giscus.app/
            repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
            repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
            category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
            categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
            mapping: 'pathname',
            reactions: '1',
            // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
            metadata: '0',
            // theme example: light, dark, dark_dimmed, dark_high_contrast
            // transparent_dark, preferred_color_scheme, custom
            theme: 'light',
            // theme when dark mode
            darkTheme: 'transparent_dark',
            // If the theme option above is set to 'custom`
            // please provide a link below to your custom theme css file.
            // example: https://giscus.app/themes/custom_example.css
            themeURL: ''
        },
        utterancesConfig: {
            // Visit the link below, and follow the steps in the 'configuration' section
            // https://utteranc.es/
            repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
            issueTerm: '',
            label: '',
            // theme example: github-light, github-dark, preferred-color-scheme
            // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
            theme: '',
            // theme when dark mode
            darkTheme: ''
        },
        disqusConfig: {
            // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
            shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME
        }
    }
};
module.exports = siteMetadata;


/***/ })

};
;