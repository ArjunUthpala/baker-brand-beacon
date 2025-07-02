
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Clock, Heart, Award } from 'lucide-react';

const Home = () => {
  const dailySpecials = [
    {
      name: "Tuesday Special",
      item: "Fresh Croissants & Coffee Combo",
      price: "$8.99",
      originalPrice: "$12.99",
      description: "Buttery croissants with your choice of coffee"
    },
    {
      name: "Baker's Choice",
      item: "Artisan Sourdough Bread",
      price: "$4.99",
      originalPrice: "$6.99",
      description: "Freshly baked this morning"
    },
    {
      name: "Sweet Deal",
      item: "Dozen Assorted Muffins",
      price: "$18.99",
      originalPrice: "$24.99",
      description: "Perfect for sharing with family"
    }
  ];

  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Service",
      description: "Fresh baked goods ready when you are"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Friendly Staff",
      description: "Welcoming smiles with every visit"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Ingredients",
      description: "Only the finest ingredients in every bite"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Local Favorite",
      description: "Trusted by the community since day one"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-orange-100">IMR Bakers</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Your friendly neighborhood bakery serving fresh, affordable, and delicious baked goods with a smile
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link to="/menu">View Our Menu</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/branches">Find Our Locations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Specials Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container-width section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Today's Special Deals
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't miss out on our daily specials - fresh baked goods at unbeatable prices!
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
              <Link to="/menu">See Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container-width section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose IMR Bakers?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're more than just a bakery - we're your neighborhood's go-to place for quality, affordability, and genuine hospitality.
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
              Ready to Experience the IMR Difference?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Visit us today and discover why we're the community's favorite bakery. Fresh baked goods, friendly service, and affordable prices - that's the IMR promise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/branches">Find Our Locations</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/about">Learn Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
