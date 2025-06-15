import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

// https://www.gatsbyjs.com/docs/add-seo-component/

const Head = ({ title, description, image }) => {
  const { pathname } = useLocation();

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            siteUrl
            defaultImage: image
            twitterUsername
          }
        }
      }
    `,
  );

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  // Enhanced title formatting
  const pageTitle = title ? `${title} | Muhammad Sarim` : defaultTitle;

  return (
    <Helmet title={pageTitle} defaultTitle={defaultTitle}>
      <html lang="en" />

      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="keywords" content="Muhammad Sarim, AI Engineer, Machine Learning, Full Stack Developer, Software Engineer, React, Python, Data Science, Portfolio" />
      <meta name="author" content="Muhammad Sarim" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Enhanced Open Graph tags */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Muhammad Sarim Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Enhanced Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:site" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content="Muhammad Sarim - AI/ML Engineer & Full-Stack Developer" />

      {/* Additional meta tags for better indexing */}
      <meta name="theme-color" content="#64ffda" />
      <meta name="msapplication-TileColor" content="#0a192f" />
      <meta name="application-name" content="Muhammad Sarim Portfolio" />

      {/* Favicon links */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico?v=5" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=5" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=5" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=5" />
      <link rel="manifest" href="/site.webmanifest?v=5" />

      <meta name="google-site-verification" content="DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk" />

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Muhammad Sarim",
          "jobTitle": "AI/ML Engineer & Full-Stack Developer",
          "description": "Software Engineering student specializing in AI, Machine Learning, and Full-Stack Development",
          "url": siteUrl,
          "image": seo.image,
          "sameAs": [
            "https://github.com/M-Sarim",
            "https://www.linkedin.com/in/imuhammadsarim/",
            "https://medium.com/@Muhammad.Sarim"
          ],
          "knowsAbout": [
            "Artificial Intelligence",
            "Machine Learning",
            "Full-Stack Development",
            "React.js",
            "Python",
            "Data Science",
            "Software Engineering"
          ],
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "FAST NUCES"
          }
        })}
      </script>
    </Helmet>
  );
};

export default Head;

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Head.defaultProps = {
  title: null,
  description: null,
  image: null,
};
