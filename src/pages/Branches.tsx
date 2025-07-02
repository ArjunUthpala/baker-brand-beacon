
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const Branches = () => {
  const branches = [
    {
      name: "Downtown Location",
      address: "123 Baker Street, Downtown, City 12345",
      phone: "+1 (555) 123-4567",
      hours: {
        weekdays: "7:00 AM - 8:00 PM",
        saturday: "8:00 AM - 9:00 PM",
        sunday: "8:00 AM - 7:00 PM"
      },
      features: ["Dine-in seating", "Wi-Fi available", "Wheelchair accessible"],
      isMain: true
    },
    {
      name: "Suburban Branch",
      address: "456 Oak Avenue, Suburbia, City 12346",
      phone: "+1 (555) 987-6543",
      hours: {
        weekdays: "7:30 AM - 7:30 PM",
        saturday: "8:00 AM - 8:00 PM",
        sunday: "8:30 AM - 6:30 PM"
      },
      features: ["Drive-through", "Family parking", "Kids play area"],
      isMain: false
    },
    {
      name: "Market Square",
      address: "789 Market Square, Eastside, City 12347",
      phone: "+1 (555) 456-7890",
      hours: {
        weekdays: "7:00 AM - 7:00 PM",
        saturday: "8:00 AM - 8:00 PM",
        sunday: "9:00 AM - 6:00 PM"
      },
      features: ["Outdoor seating", "Express counter", "Catering pickup"],
      isMain: false
    }
  ];

  return (
    <div>
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container-width section-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Locations
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find the IMR Bakers location nearest you. We're proud to serve multiple communities with the same quality and care.
            </p>
          </div>
        </div>
      </section>

      {/* Branches List */}
      <section className="py-12">
        <div className="container-width section-padding">
          <div className="space-y-8">
            {branches.map((branch, index) => (
              <Card key={index} className={`card-hover ${branch.isMain ? 'border-primary/50 bg-primary/5' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-gray-900">
                      {branch.name}
                      {branch.isMain && (
                        <span className="ml-2 inline-block bg-primary text-white text-sm px-2 py-1 rounded-full">
                          Main Location
                        </span>
                      )}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Location Details */}
                    <div className="space-y-6">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Address</h4>
                          <p className="text-gray-600">{branch.address}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Phone</h4>
                          <a href={`tel:${branch.phone}`} className="text-primary hover:underline">
                            {branch.phone}
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Opening Hours</h4>
                          <div className="space-y-1 text-sm text-gray-600">
                            <div className="flex justify-between">
                              <span>Monday - Friday:</span>
                              <span>{branch.hours.weekdays}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Saturday:</span>
                              <span>{branch.hours.saturday}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Sunday:</span>
                              <span>{branch.hours.sunday}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Features</h4>
                        <div className="flex flex-wrap gap-2">
                          {branch.features.map((feature, featureIndex) => (
                            <span 
                              key={featureIndex}
                              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <Button className="w-full sm:w-auto">
                        <Navigation className="w-4 h-4 mr-2" />
                        Get Directions
                      </Button>
                    </div>
                    
                    {/* Map Placeholder */}
                    <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                      <div className="text-center text-gray-400">
                        <MapPin className="w-12 h-12 mx-auto mb-2" />
                        <p>Interactive Map</p>
                        <p className="text-sm">Google Maps Integration</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container-width section-padding">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our friendly staff is always happy to help. Give us a call or visit any location 
              for personalized assistance with your bakery needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Phone className="w-4 h-4 mr-2" />
                Call Main Location
              </Button>
              <Button size="lg" variant="outline">
                View Menu
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Branches;
