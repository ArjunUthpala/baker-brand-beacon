
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Clock, Heart, Award } from 'lucide-react';

const Home = () => {
  const dailySpecials = [
    {
      name: "අද දිනයේ විශේෂ",
      item: "Pol Roti & Fish Curry Combo",
      price: "LKR 250",
      originalPrice: "LKR 320",
      description: "Traditional coconut roti with authentic fish curry"
    },
    {
      name: "Tea Time Special",
      item: "Fish Patties & Ceylon Tea",
      price: "LKR 180",
      originalPrice: "LKR 225",
      description: "Crispy fish patties with premium Ceylon black tea"
    },
    {
      name: "Family Pack",
      item: "Mixed Pastries Bundle",
      price: "LKR 450",
      originalPrice: "LKR 580",
      description: "Perfect assortment for the whole family"
    }
  ];

  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fresh Daily - දිනපතා නැවුම්",
      description: "Baked fresh every morning with traditional methods"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Warm Hospitality - සිතින් සේවය",
      description: "True Sri Lankan warmth and friendly service"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Authentic Flavors - සම්ප්‍රදායික රස",
      description: "Traditional Sri Lankan recipes passed down generations"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Community Favorite - ප්‍රජා ප්‍රියතම",
      description: "Trusted by families across Sri Lanka"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-width section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ආයුබෝවන් - Welcome to <span className="text-orange-100">IMR Bakers</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Your neighborhood's taste of authentic Sri Lanka - serving fresh, traditional baked goods with genuine warmth and hospitality
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link to="/menu">View Our Menu - මෙනුව බලන්න</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/branches">Find Our Locations - අපේ ස්ථාන</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Sample Images Section */}
      <section className="py-16 bg-white">
        <div className="container-width section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Sri Lankan Delights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From traditional pol roti to crispy fish patties, taste the authentic flavors of Sri Lanka
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="card-hover overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop" 
                  alt="Traditional Sri Lankan baked goods display"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Traditional Baked Goods</h3>
                <p className="text-gray-600 text-sm">Fresh pol roti, coconut bread, and traditional pastries</p>
              </CardContent>
            </Card>
            
            <Card className="card-hover overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop" 
                  alt="Cozy bakery interior with Sri Lankan hospitality"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Warm & Welcoming Space</h3>
                <p className="text-gray-600 text-sm">Experience true Sri Lankan hospitality in our cozy bakery</p>
              </CardContent>
            </Card>
            
            <Card className="card-hover overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=300&fit=crop" 
                  alt="Fresh ingredients and traditional preparation"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Fresh Local Ingredients</h3>
                <p className="text-gray-600 text-sm">Using the finest Sri Lankan coconut, spices, and fresh produce</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Daily Specials Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container-width section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Today's Special Deals - අදයේ විශේෂ
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't miss out on our daily specials - authentic Sri Lankan flavors at unbeatable prices!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dailySpecials.map((special, index) => (
              <Card key={index} className="card-hover border-primary/20">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {special.name}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {special.item}
                    </h3>
                    <p className="text-gray-600 mb-4">{special.description}</p>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-2xl font-bold text-primary">{special.price}</span>
                      <span className="text-lg text-gray-400 line-through">{special.originalPrice}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg">
              <Link to="/menu">See Full Menu - සම්පූර්ණ මෙනුව</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container-width section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose IMR Bakers? - ඇයි අපව තෝරගන්නේ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're more than just a bakery - we're your gateway to authentic Sri Lankan flavors, served with genuine warmth and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-width section-padding">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Experience Sri Lankan Hospitality? - ශ්‍රී ලාංකික ආගන්තුක සත්කාරය අත්විඳින්න
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Visit us today and discover why we're the community's favorite for authentic Sri Lankan baked goods. Fresh flavors, warm hospitality, and affordable prices - that's our promise to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/branches">Find Our Locations - අපේ ස්ථාන</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/about">Learn Our Story - අපේ කතාව</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
