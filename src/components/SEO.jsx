// SEO.js
import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  featuredImage,
  type = "website",
  authorName,
  publishDate,
  breadcrumbs, // ✅ new prop for breadcrumb items
}) => {
  // Site-wide defaults
  const defaultTitle = "Kaulbhaskar | Tantra, Astrology & Spiritual Guidance";
  const defaultDescription =
    "Discover authentic Tantric teachings, Astrology insights, and spiritual guidance with Sri Kaulbhaskar Guru Ji.";
  const defaultKeywords =
    "Tantra, Astrology, Spiritual Guidance, Kaulbhaskar, Maha Siddhas";
  const defaultImage = "https://www.tantrasadhana.org/img/default-share.webp";
  const defaultCanonical = "https://www.tantrasadhana.org";

  const seoTitle = title || defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || defaultKeywords;
  const seoImage = featuredImage || defaultImage;
  const seoCanonical = canonical || defaultCanonical;

  // Article schema (only for blog posts)
  const articleJsonLd =
    type === "article"
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: seoTitle,
          description: seoDescription,
          image: [seoImage],
          author: {
            "@type": "Person",
            name: authorName || "Sri Kaulbhaskar Guru Ji",
          },
          publisher: {
            "@type": "Organization",
            name: "Tantra Sadhana",
            logo: {
              "@type": "ImageObject",
              url: "https://www.tantrasadhana.org/img/logo.webp",
            },
          },
          datePublished: publishDate || new Date().toISOString(),
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": seoCanonical,
          },
        }
      : null;

  // Organization schema (always included)
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tantra Sadhana",
    url: "https://www.tantrasadhana.org",
    logo: "https://www.tantrasadhana.org/img/logo.png",
    sameAs: [
      "https://www.facebook.com/tantrasadhana",
      "https://www.instagram.com/tantrasadhana",
      "https://www.youtube.com/@tantrasadhana",
    ],
  };

  // BreadcrumbList schema (optional, for any page)
  const breadcrumbJsonLd =
    breadcrumbs && breadcrumbs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: crumb.name,
            item: crumb.url,
          })),
        }
      : null;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <link rel="canonical" href={seoCanonical} />

      {/* Open Graph */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:url" content={seoCanonical} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={seoImage} />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content={seoImage ? "summary_large_image" : "summary"}
      />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
      {articleJsonLd && (
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
      )}
      {breadcrumbJsonLd && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
