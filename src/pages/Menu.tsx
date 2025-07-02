
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('breads');

  const categories = [
    { id: 'breads', name: 'Traditional Breads', icon: '🍞' },
    { id: 'pastries', name: 'Sweet Treats', icon: '🥐' },
    { id: 'cakes', name: 'Celebration Cakes', icon: '🎂' },
    { id: 'beverages', name: 'Ceylon Beverages', icon: '☕' },
    { id: 'specials', name: 'Daily Specials', icon: '⭐' }
  ];

  const menuItems = {
    breads: [
      {
        name: "Pol Roti",
        description: "Traditional coconut flatbread, crispy outside and soft inside",
        price: "LKR 25",
        popular: true
      },
      {
        name: "Coconut Bread Loaf",
        description: "Soft white bread enriched with fresh coconut milk",
        price: "LKR 180"
      },
      {
        name: "Seeni Sambol Buns",
        description: "Sweet onion sambol filled soft buns, perfect for tea time",
        price: "LKR 35"
      },
      {
        name: "Whole Wheat Paan",
        description: "Nutritious whole wheat bread, baked fresh daily",
        price: "LKR 200"
      },
      {
        name: "Milk Bread Rolls (6 pack)",
        description: "Soft, fluffy milk buns perfect with curry",
        price: "LKR 150"
      }
    ],
    pastries: [
      {
        name: "Fish Patties",
        description: "Flaky pastry filled with spiced fish and potato curry",
        price: "LKR 45",
        popular: true
      },
      {
        name: "Chicken Patties",
        description: "Golden pastry with aromatic chicken curry filling",
        price: "LKR 50"
      },
      {
        name: "Vegetable Rolls",
        description: "Crispy rolls filled with spiced mixed vegetables",
        price: "LKR 40"
      },
      {
        name: "Chinese Rolls",
        description: "Popular Sri Lankan-Chinese fusion spring rolls",
        price: "LKR 35"
      },
      {
        name: "Isso Vade",
        description: "Traditional prawn fritters, crispy and flavorful",
        price: "LKR 60"
      }
    ],
    cakes: [
      {
        name: "Rich Fruit Cake",
        description: "Traditional Sri Lankan cake with dried fruits and cashews",
        price: "LKR 2,500",
        note: "Whole cake - serves 8-10"
      },
      {
        name: "Love Cake",
        description: "Iconic Sri Lankan semolina cake with cashews and spices",
        price: "LKR 1,800",
        note: "Whole cake - serves 8-10"
      },
      {
        name: "Bibikkan Slice",
        description: "Traditional coconut cake with jaggery and cashews",
        price: "LKR 85",
        popular: true
      },
      {
        name: "Watalappan",
        description: "Creamy coconut custard with jaggery and spices",
        price: "LKR 1,200",
        note: "Whole portion - serves 6-8"
      },
      {
        name: "Butter Cake",
        description: "Light and fluffy vanilla sponge cake",
        price: "LKR 1,500",
        note: "Whole cake - serves 8-10"
      }
    ],
    beverages: [
      {
        name: "Ceylon Black Tea",
        description: "Premium Sri Lankan tea, served hot with milk",
        price: "LKR 80"
      },
      {
        name: "Plain Tea",
        description: "Traditional black tea without milk, pure and strong",
        price: "LKR 60"
      },
      {
        name: "Ginger Tea",
        description: "Warming tea with fresh ginger and spices",
        price: "LKR 90"
      },
      {
        name: "Fresh King Coconut",
        description: "Natural king coconut water, refreshing and healthy",
        price: "LKR 120"
      },
      {
        name: "Coffee",
        description: "Local coffee blend, rich and aromatic",
        price: "LKR 100"
      }
    ],
    specials: [
      {
        name: "Morning Special",
        description: "Pol roti + fish curry + tea combo",
        price: "LKR 250",
        originalPrice: "LKR 320",
        popular: true
      },
      {
        name: "Tea Time Pack",
        description: "4 patties + 2 rolls + Ceylon tea",
        price: "LKR 400",
        originalPrice: "LKR 480"
      },
      {
        name: "Family Pack",
        description: "Coconut bread + 6 buns + dozen rolls",
        price: "LKR 450",
        originalPrice: "LKR 580",
        note: "Perfect for family meals"
      }
    ]
  };

  return (
    <div>
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container-width section-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              අපේ ආහාර - Our Menu
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Authentic Sri Lankan baked goods and traditional treats, made fresh daily with love and the finest local ingredients
            </p>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-4 bg-white sticky top-16 z-40 border-b">
        <div className="container-width section-padding">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span>{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                    {item.popular && (
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                        ජනප්‍රිය
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-primary">{item.price}</span>
                      {item.originalPrice && (
                        <span className="ml-2 text-sm text-gray-400 line-through">
                          {item.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {item.note && (
                    <p className="text-xs text-gray-500 mt-2">{item.note}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Order Notice */}
      <section className="py-12 bg-primary/5">
        <div className="container-width section-padding">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              ඔබේ ඇණවුම සූදානම්ද? - Ready to Order?
            </h2>
            <p className="text-gray-600 mb-6">
              Visit any of our locations to enjoy fresh Sri Lankan baked goods. Call ahead for special traditional orders!
            </p>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
              <p className="text-primary font-medium">
                🏺 Traditional Tip: Try our fish patties with a cup of Ceylon tea for the authentic Sri Lankan experience!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
