import React from 'react';
import { Palette, Shield, Sparkles, Award, Check } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Palette className="h-12 w-12" />,
      title: 'Vinyl Wraps',
      description: 'Complete vehicle transformation with premium vinyl materials',
      features: [
        'Color change wraps',
        'Carbon fiber textures',
        'Matte and gloss finishes',
        'Custom graphics and designs',
        'Commercial vehicle branding'
      ],
      price: 'Starting from KSh 80,000'
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: 'PPF & Ceramic Coating',
      description: 'Ultimate protection for your vehicle\'s paint and surfaces',
      features: [
        'Paint Protection Film (PPF)',
        'Ceramic coating application',
        'Scratch and stone chip protection',
        'UV ray protection',
        'Hydrophobic properties'
      ],
      price: 'Starting from KSh 60,000'
    },
    {
      icon: <Sparkles className="h-12 w-12" />,
      title: 'Detailing',
      description: 'Professional cleaning and restoration services',
      features: [
        'Interior deep cleaning',
        'Exterior paint correction',
        'Engine bay cleaning',
        'Leather conditioning',
        'Glass treatment'
      ],
      price: 'Starting from KSh 15,000'
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: 'Tint & Face-lift',
      description: 'Enhance style and comfort with professional upgrades',
      features: [
        'Window tinting (all shades)',
        'Headlight restoration',
        'Chrome delete services',
        'Trim customization',
        'Badge modifications'
      ],
      price: 'Starting from KSh 25,000'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional automotive styling and protection services delivered with precision and care
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="text-red-600 mr-4">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-red-600 font-semibold">{service.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Consultation</h4>
              <p className="text-gray-600">Free consultation to discuss your needs and preferences</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Design</h4>
              <p className="text-gray-600">Custom design creation and material selection</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Installation</h4>
              <p className="text-gray-600">Professional installation by certified technicians</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">4</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Quality Check</h4>
              <p className="text-gray-600">Final inspection and warranty documentation</p>
            </div>
          </div>
        </div>

        {/* Warranty Section */}
        <div className="bg-gradient-to-r from-black to-red-900 rounded-2xl text-white p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Warranty & Guarantee</h2>
          <p className="text-xl text-gray-300 mb-6">
            All our services come with comprehensive warranty coverage
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-2xl font-bold">5 Years</div>
              <div className="text-gray-300">Vinyl Wrap Warranty</div>
            </div>
            <div>
              <div className="text-2xl font-bold">10 Years</div>
              <div className="text-gray-300">PPF Protection</div>
            </div>
            <div>
              <div className="text-2xl font-bold">2 Years</div>
              <div className="text-gray-300">Ceramic Coating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;