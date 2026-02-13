import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Friseursalon Mönchengladbach | Majolie Afroshop</title>
        <meta
          name="description"
          content="Besuche Majolie Afroshop in Mönchengladbach für erstklassige Haarschnitte, professionelles Braiding und individuelle Styles. Dein Spezialist für Afro-Haarpflege. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Friseursalon, Afroshop, Mönchengladbach, Braiding, Haarschnitt, Haarpflege, Herrenfriseur"
        />
        <link rel="canonical" href="https://majolie-afroshop.de" />

        {/* Open Graph */}
        <meta property="og:title" content="Majolie Afroshop | Premium Friseursalon Mönchengladbach" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und spezialisierte Haarpflege im modernen Majolie Afroshop in Mönchengladbach."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://majolie-afroshop.de" />
        <meta property="og:image" content="https://majolie-afroshop.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Majolie Afroshop | Premium Friseursalon Mönchengladbach" />
        <meta
          name="twitter:description"
          content="Erlebe erstklassige Haarschnitte und professionelle Styles bei Majolie Afroshop."
        />
        <meta name="twitter:image" content="https://majolie-afroshop.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HairSalon",
            "name": "Majolie Afroshop",
            "image": "https://majolie-afroshop.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Waldhausener Str. 86",
              "addressLocality": "Mönchengladbach",
              "postalCode": "41061",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "51.1947",
              "longitude": "6.4297"
            },
            "url": "https://majolie-afroshop.de",
            "telephone": "+49 176 24316809",
            "openingHours": "Di-Fr 10:00-18:00, Sa 09:00-17:00",
            "priceRange": "€€",
            "servesCuisine": "Friseursalon Services",
            "sameAs": [
              "https://www.facebook.com/majolieafroshop",
              "https://www.instagram.com/majolieafroshop"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;

