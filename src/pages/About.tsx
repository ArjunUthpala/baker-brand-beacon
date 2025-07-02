
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Award, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Community First",
      description: "We believe in serving our neighbors with genuine care and building lasting relationships in our community."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Always",
      description: "Every item is crafted with premium ingredients and traditional baking techniques passed down through generations."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Friendly Service",
      description: "Our welcoming staff treats every customer like family, ensuring your visit is always pleasant and memorable."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fresh Daily",
      description: "We bake fresh every morning, so you always get the best quality and taste in every bite."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              At IMR Bakers, we're more than just a bakery - we're a cornerstone of our community, 
              dedicated to bringing families together over fresh, affordable, and delicious baked goods.
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
                A Family Tradition of Excellence
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  IMR Bakers began with a simple dream: to create a warm, welcoming space where everyone 
                  could enjoy high-quality baked goods without breaking the bank. What started as a small 
                  family operation has grown into a beloved community institution.
                </p>
                <p>
                  Our founders believed that great food should be accessible to everyone. That's why we've 
                  always maintained our commitment to affordable pricing without compromising on quality. 
                  Every loaf of bread, every pastry, and every sweet treat is made with the same care and 
                  attention to detail that built our reputation.
                </p>
                <p>
                  Today, we're proud to serve multiple locations while maintaining the personal touch and 
                  friendly service that makes IMR Bakers special. When you visit us, you're not just a 
                  customer - you're part of our extended family.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-400">Family Photo / Bakery Interior Image</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-width section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our values guide everything we do, from the way we bake our bread to how we greet our customers.
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
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Behind every delicious baked good is a dedicated team of passionate bakers and friendly staff 
              who take pride in serving our community.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Commitment to You
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Every member of our team shares the same passion for quality and service that founded IMR Bakers. 
                From our skilled bakers who arrive before dawn to ensure fresh products, to our friendly counter 
                staff who greet you with genuine smiles, we're all committed to making your experience exceptional.
              </p>
              <p className="text-gray-600">
                We believe that our success comes from treating every customer like a valued member of our community. 
                That's the IMR Bakers difference, and it's what keeps families coming back generation after generation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
