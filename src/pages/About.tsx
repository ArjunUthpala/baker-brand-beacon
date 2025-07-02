
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Award, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Sri Lankan Hospitality - ආගන්තුක සත්කාරය",
      description: "We embrace the true spirit of Sri Lankan hospitality, treating every guest like family with genuine warmth and care."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Authentic Traditions - සම්ප්‍රදායික රස",
      description: "Every recipe is rooted in Sri Lankan tradition, using time-honored techniques and the finest local ingredients."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Unity - ප්‍රජා සාමුහිකත්වය",
      description: "We bring people together, celebrating Sri Lankan culture and creating connections over shared meals and traditions."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Heritage & Quality - උරුමය හා ගුණත්වය",
      description: "Preserving Sri Lankan culinary heritage while maintaining the highest standards of freshness and quality."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              අපේ කතාව - Our Story
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              At IMR Bakers, we're more than just a bakery - we're keepers of Sri Lankan culinary tradition, 
              bringing authentic flavors and warm hospitality to our community every single day.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-16">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                A Sri Lankan Family Tradition
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  IMR Bakers was born from a deep love for Sri Lankan culinary traditions and a desire to share 
                  the authentic taste of our homeland with our community. Our story begins with traditional 
                  recipes passed down through generations, each carrying the essence of Sri Lankan hospitality.
                </p>
                <p>
                  From the early morning preparation of fresh pol roti to the careful crafting of our signature 
                  fish patties, every item in our bakery tells a story of Sri Lankan heritage. We believe that 
                  food is not just nourishment - it's a bridge that connects hearts, cultures, and communities.
                </p>
                <p>
                  Today, we proudly serve as a cultural ambassador, introducing Sri Lankan flavors to new friends 
                  while providing a taste of home for those who share our heritage. Our commitment remains unchanged: 
                  authentic recipes, genuine hospitality, and affordable prices for everyone.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg h-96 flex items-center justify-center overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=500&h=400&fit=crop" 
                alt="Sri Lankan cultural heritage and community"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Heritage Section */}
      <section className="py-16 bg-primary/5">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg h-96 flex items-center justify-center overflow-hidden lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=500&h=400&fit=crop" 
                alt="Traditional Sri Lankan ingredients and spices"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Rooted in Sri Lankan Culture
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Our recipes are treasures from Sri Lankan kitchens, where coconut, spices, and traditional 
                  techniques create flavors that warm the soul. From the fragrant pol roti made with fresh 
                  coconut to our signature love cake enriched with cashews and aromatic spices.
                </p>
                <p>
                  We source our ingredients with care - the finest coconut from local suppliers, traditional 
                  jaggery for our sweet treats, and spices that capture the essence of Sri Lankan cuisine. 
                  Every bite connects you to the beautiful island of Sri Lanka.
                </p>
                <p>
                  "සර්වං අන්නමයං ජගත් - The whole world is food" - this ancient wisdom guides our approach, 
                  treating food as a sacred offering to our community, prepared with love and served with joy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-width section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values - අපේ වටිනාකම්
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These values, deeply rooted in Sri Lankan culture, guide everything we do - from how we prepare our food to how we welcome our guests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 text-primary">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container-width section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Family - අපේ පවුල
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Behind every delicious creation is our dedicated family of bakers and staff who bring 
              Sri Lankan warmth and expertise to everything they do.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Promise to You - අපේ පොරොන්දුව
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Every member of our team carries the spirit of Sri Lankan hospitality in their heart. 
                From our skilled bakers who wake before dawn to prepare fresh pol roti, to our friendly 
                staff who greet you with genuine "ආයුබෝවන්" (Ayubowan), we're all united by one mission.
              </p>
              <p className="text-gray-600">
                We believe in "දාන" (Dana) - the joy of giving. That's why we give our best to every 
                customer, sharing not just food, but also the warmth, culture, and traditions of beautiful Sri Lanka.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
