import React from "react";
import { Helmet } from "react-helmet-async";

// Define the shape of a single breadcrumb
interface Breadcrumb {
  name: string;
  url: string;
}

// Define the Props for the SEO component
interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  breadcrumbs?: Breadcrumb[];
  featuredImage?: string; 
  type?: string;
  authorName?: string;
  publishDate?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  keywords,
  breadcrumbs,
}) => {
  // Structured Data (JSON-LD) for Breadcrumbs
  const breadcrumbSchema = breadcrumbs && {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url,
    })),
  };

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Structured Data (Schema.org) */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
