
import React from 'react';
import { Card } from '@/components/ui/card';

const Gallery = () => {
  const galleryCategories = [
    {
      title: "Traditional Sri Lankan Baked Goods",
      description: "Our daily selection of authentic pol roti, patties, and traditional treats",
      images: [
        { 
          id: 1, 
          alt: "Fresh pol roti and coconut bread display",
          src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop"
        },
        { 
          id: 2, 
          alt: "Golden fish patties and pastries",
          src: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=400&fit=crop" 
        },
        { 
          id: 3, 
          alt: "Assorted Sri Lankan sweet treats",
          src: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=400&h=400&fit=crop"
        },
        { 
          id: 4, 
          alt: "Daily bread selection with coconut varieties",
          src: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=400&h=400&fit=crop"
        }
      ]
    },
    {
      title: "Our Warm Sri Lankan Welcome",
      description: "Experience genuine Sri Lankan hospitality in our cozy, culturally-rich bakery",
      images: [
        { 
          id: 5, 
          alt: "Traditional Sri Lankan bakery interior",
          src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop"
        },
        { 
          id: 6, 
          alt: "Comfortable seating area with cultural touches",
          src: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=400&fit=crop"
        },
        { 
          id: 7, 
          alt: "Display counter showcasing Sri Lankan specialties",
          src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop"
        },
        { 
          id: 8, 
          alt: "Welcoming entrance with cultural decorations",
          src: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=400&fit=crop"
        }
      ]
    },
    {
      title: "Traditional Preparation & Our Team",
      description: "Meet our family and see authentic Sri Lankan baking methods in action",
      images: [
        { 
          id: 9, 
          alt: "Bakers preparing traditional pol roti",
          src: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=400&h=400&fit=crop"
        },
        { 
          id: 10, 
          alt: "Traditional dough preparation techniques",
          src: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=400&h=400&fit=crop"
        },
        { 
          id: 11, 
          alt: "Fresh from the oven - traditional breads",
          src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop"
        },
        { 
          id: 12, 
          alt: "Our happy Sri Lankan bakery family",
          src: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=400&fit=crop"
        }
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
              Gallery - ගැලරිය
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take a peek inside IMR Bakers and experience the authentic Sri Lankan hospitality, 
              traditional baking methods, and warm atmosphere that makes us special
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
                  <div className="aspect-square bg-gray-200 overflow-hidden">
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
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
              Experience Sri Lankan Hospitality - ශ්‍රී ලාංකික ආගන්තුක සත්කාරය
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Pictures can only tell part of our story. Visit us today to experience the authentic flavors, 
              warm hospitality, and cultural richness that makes IMR Bakers a true taste of Sri Lanka.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/branches"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                Find Our Locations - අපේ ස්ථාන
              </a>
              <a
                href="/menu"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-primary transition-colors"
              >
                View Our Menu - මෙනුව බලන්න
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
