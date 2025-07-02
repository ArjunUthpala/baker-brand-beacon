
import React from 'react';
import { Card } from '@/components/ui/card';

const Gallery = () => {
  const galleryCategories = [
    {
      title: "Fresh Baked Goods",
      description: "Our daily selection of breads, pastries, and treats",
      images: [
        { id: 1, alt: "Artisan bread display" },
        { id: 2, alt: "Fresh croissants" },
        { id: 3, alt: "Assorted pastries" },
        { id: 4, alt: "Daily bread selection" }
      ]
    },
    {
      title: "Our Welcoming Space",
      description: "Step inside our cozy, community-focused bakery",
      images: [
        { id: 5, alt: "Bakery interior" },
        { id: 6, alt: "Customer seating area" },
        { id: 7, alt: "Display counter" },
        { id: 8, alt: "Entrance and storefront" }
      ]
    },
    {
      title: "Behind the Scenes",
      description: "Meet our team and see our baking process",
      images: [
        { id: 9, alt: "Bakers at work" },
        { id: 10, alt: "Kneading dough" },
        { id: 11, alt: "Oven fresh bread" },
        { id: 12, alt: "Team photo" }
      ]
    }
  ];

  return (
    <div>
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container-width section-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take a peek inside IMR Bakers and see what makes us special - from our fresh baked goods to our welcoming atmosphere
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Sections */}
      {galleryCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-12 ${categoryIndex % 2 === 1 ? 'bg-gray-50' : ''}`}>
          <div className="container-width section-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {category.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.images.map((image, imageIndex) => (
                <Card key={imageIndex} className="card-hover overflow-hidden">
                  <div className="aspect-square bg-gray-200 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <div className="text-4xl mb-2">📸</div>
                      <p className="text-sm">{image.alt}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Visit Us CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container-width section-padding">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience IMR Bakers Yourself
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Pictures can only tell part of our story. Visit us today to experience the warmth, 
              aroma, and community spirit that makes IMR Bakers truly special.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/branches"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                Find Our Locations
              </a>
              <a
                href="/menu"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-primary transition-colors"
              >
                View Our Menu
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
