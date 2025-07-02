
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('breads');

  const categories = [
    { id: 'breads', name: 'Fresh Breads', icon: '🍞' },
    { id: 'pastries', name: 'Pastries', icon: '🥐' },
    { id: 'cakes', name: 'Cakes & Desserts', icon: '🎂' },
    { id: 'beverages', name: 'Beverages', icon: '☕' },
    { id: 'specials', name: 'Daily Specials', icon: '⭐' }
  ];

  const menuItems = {
    breads: [
      {
        name: "Artisan Sourdough",
        description: "Traditional sourdough with crispy crust and soft interior",
        price: "$6.99",
        popular: true
      },
      {
        name: "Whole Wheat Loaf",
        description: "Nutritious whole wheat bread perfect for daily meals",
        price: "$5.49"
      },
      {
        name: "French Baguette",
        description: "Classic French baguette with authentic texture",
        price: "$4.99"
      },
      {
        name: "Multigrain Bread",
        description: "Hearty bread packed with seeds and grains",
        price: "$6.49"
      },
      {
        name: "Dinner Rolls (6 pack)",
        description: "Soft, fluffy rolls perfect for any meal",
        price: "$3.99"
      }
    ],
    pastries: [
      {
        name: "Butter Croissant",
        description: "Flaky, buttery croissant made fresh daily",
        price: "$2.99",
        popular: true
      },
      {
        name: "Pain au Chocolat",
        description: "Croissant filled with rich dark chocolate",
        price: "$3.49"
      },
      {
        name: "Almond Danish",
        description: "Sweet pastry topped with sliced almonds",
        price: "$3.99"
      },
      {
        name: "Blueberry Muffin",
        description: "Moist muffin bursting with fresh blueberries",
        price: "$2.49"
      },
      {
        name: "Cinnamon Roll",
        description: "Warm, gooey cinnamon roll with cream cheese glaze",
        price: "$3.79"
      }
    ],
    cakes: [
      {
        name: "Chocolate Layer Cake",
        description: "Rich chocolate cake with creamy chocolate frosting",
        price: "$24.99",
        note: "Whole cake - serves 8-10"
      },
      {
        name: "Vanilla Birthday Cake",
        description: "Classic vanilla sponge with buttercream frosting",
        price: "$22.99",
        note: "Whole cake - serves 8-10"
      },
      {
        name: "Cheesecake Slice",
        description: "Creamy New York style cheesecake",
        price: "$4.99",
        popular: true
      },
      {
        name: "Apple Pie",
        description: "Traditional apple pie with flaky crust",
        price: "$18.99",
        note: "Whole pie - serves 6-8"
      },
      {
        name: "Chocolate Chip Cookies (dozen)",
        description: "Soft and chewy chocolate chip cookies",
        price: "$12.99"
      }
    ],
    beverages: [
      {
        name: "Freshly Brewed Coffee",
        description: "Premium blend coffee, served hot or iced",
        price: "$2.49"
      },
      {
        name: "Cappuccino",
        description: "Espresso with steamed milk and foam",
        price: "$3.99"
      },
      {
        name: "Hot Chocolate",
        description: "Rich, creamy hot chocolate topped with whipped cream",
        price: "$3.49"
      },
      {
        name: "Fresh Orange Juice",
        description: "Freshly squeezed orange juice",
        price: "$3.99"
      },
      {
        name: "Herbal Tea",
        description: "Selection of premium herbal teas",
        price: "$2.99"
      }
    ],
    specials: [
      {
        name: "Tuesday Special",
        description: "Fresh croissants & coffee combo",
        price: "$8.99",
        originalPrice: "$12.99",
        popular: true
      },
      {
        name: "Family Pack",
        description: "2 loaves of bread + dozen muffins",
        price: "$19.99",
        originalPrice: "$25.99"
      },
      {
        name: "Baker's Dozen",
        description: "Any 13 pastries for the price of 12",
        price: "Mix & Match",
        note: "Save on bulk orders"
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
              Our Menu
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our full range of freshly baked goods, made daily with love and the finest ingredients
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
                        Popular
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
              Ready to Order?
            </h2>
            <p className="text-gray-600 mb-6">
              Visit any of our locations to enjoy fresh baked goods. Online ordering coming soon!
            </p>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
              <p className="text-primary font-medium">
                💡 Pro Tip: Call ahead for large orders or special requests. We're happy to accommodate!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
