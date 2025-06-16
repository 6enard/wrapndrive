import React, { useState } from 'react';
import { Palette, RotateCcw, Download, Sparkles, Car, Zap } from 'lucide-react';

const Simulation = () => {
  const [selectedCategory, setSelectedCategory] = useState('sedan');
  const [selectedCar, setSelectedCar] = useState('mercedes-c-class');
  const [selectedColor, setSelectedColor] = useState('#DC2626');
  const [selectedFinish, setSelectedFinish] = useState('gloss');

  const categories = [
    { id: 'sedan', name: 'Sedan', icon: '🚗' },
    { id: 'suv', name: 'SUV', icon: '🚙' },
    { id: 'mini-suv', name: 'Mini SUV', icon: '🚐' },
    { id: 'pickup', name: 'Pickup', icon: '🛻' },
    { id: 'coupe', name: 'Coupe', icon: '🏎️' },
    { id: 'hatchback', name: 'Hatchback', icon: '🚗' }
  ];

  const carsByCategory = {
    sedan: [
      { 
        id: 'mercedes-c-class', 
        name: 'Mercedes C-Class', 
        basePrice: 95000,
        image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      { 
        id: 'toyota-camry', 
        name: 'Toyota Camry', 
        basePrice: 85000,
        image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      { 
        id: 'audi-a4', 
        name: 'Audi A4', 
        basePrice: 92000,
        image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      { 
        id: 'honda-civic', 
        name: 'Honda Civic', 
        basePrice: 78000,
        image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      { 
        id: 'bmw-3-series', 
        name: 'BMW 3 Series', 
        basePrice: 98000,
        image: 'https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ],
    suv: [
      { 
        id: 'bmw-x5', 
        name: 'BMW X5', 
        basePrice: 120000,
        image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      { 
        id: 'mercedes-gle', 
        name: 'Mercedes GLE', 
        basePrice: 125000,
        image: 'https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      { 
        id: 'audi-q7', 
        name: 'Audi Q7', 
        basePrice: 115000,
        image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      { 
        id: 'toyota-prado', 
        name: 'Toyota Prado', 
        basePrice: 110000,
        image: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ],
    'mini-suv': [
      { 
        id: 'mazda-cx5', 
        name: 'Mazda CX-5', 
        basePrice: 88000,
        image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      { 
        id: 'honda-crv', 
        name: 'Honda CR-V', 
        basePrice: 85000,
        image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      { 
        id: 'toyota-rav4', 
        name: 'Toyota RAV4', 
        basePrice: 90000,
        image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      { 
        id: 'nissan-xtrail', 
        name: 'Nissan X-Trail', 
        basePrice: 82000,
        image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ],
    pickup: [
      { 
        id: 'toyota-hilux', 
        name: 'Toyota Hilux', 
        basePrice: 95000,
        image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      { 
        id: 'ford-ranger', 
        name: 'Ford Ranger', 
        basePrice: 92000,
        image: 'https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      { 
        id: 'isuzu-dmax', 
        name: 'Isuzu D-Max', 
        basePrice: 88000,
        image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      { 
        id: 'mitsubishi-l200', 
        name: 'Mitsubishi L200', 
        basePrice: 85000,
        image: 'https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ],
    coupe: [
      { 
        id: 'bmw-4-series', 
        name: 'BMW 4 Series', 
        basePrice: 105000,
        image: 'https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      { 
        id: 'mercedes-c-coupe', 
        name: 'Mercedes C-Class Coupe', 
        basePrice: 108000,
        image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      { 
        id: 'audi-a5', 
        name: 'Audi A5', 
        basePrice: 102000,
        image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      { 
        id: 'ford-mustang', 
        name: 'Ford Mustang', 
        basePrice: 110000,
        image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ],
    hatchback: [
      { 
        id: 'volkswagen-golf', 
        name: 'Volkswagen Golf', 
        basePrice: 75000,
        image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      { 
        id: 'honda-fit', 
        name: 'Honda Fit', 
        basePrice: 65000,
        image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      { 
        id: 'toyota-vitz', 
        name: 'Toyota Vitz', 
        basePrice: 62000,
        image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      { 
        id: 'mazda-demio', 
        name: 'Mazda Demio', 
        basePrice: 68000,
        image: 'https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ]
  };

  const colors = [
    { name: 'Racing Red', value: '#DC2626' },
    { name: 'Midnight Black', value: '#111827' },
    { name: 'Pearl White', value: '#F9FAFB' },
    { name: 'Royal Blue', value: '#1D4ED8' },
    { name: 'Emerald Green', value: '#059669' },
    { name: 'Sunset Orange', value: '#EA580C' },
    { name: 'Deep Purple', value: '#7C3AED' },
    { name: 'Silver Chrome', value: '#9CA3AF' },
    { name: 'Gold Metallic', value: '#F59E0B' },
    { name: 'Rose Pink', value: '#EC4899' },
    { name: 'Neon Yellow', value: '#EAB308' },
    { name: 'Teal Blue', value: '#0891B2' }
  ];

  const finishes = [
    { id: 'gloss', name: 'Gloss', description: 'High-shine finish that reflects light', price: 5000 },
    { id: 'matte', name: 'Matte', description: 'Non-reflective, sophisticated finish', price: 10000 },
    { id: 'satin', name: 'Satin', description: 'Semi-gloss finish between matte and gloss', price: 8000 },
    { id: 'carbon', name: 'Carbon Fiber', description: 'Textured carbon fiber pattern', price: 25000 }
  ];

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    // Set the first car of the new category as selected
    const firstCar = carsByCategory[categoryId as keyof typeof carsByCategory][0];
    setSelectedCar(firstCar.id);
  };

  const resetSimulation = () => {
    setSelectedCategory('sedan');
    setSelectedCar('mercedes-c-class');
    setSelectedColor('#DC2626');
    setSelectedFinish('gloss');
  };

  const downloadResult = () => {
    // In a real implementation, this would generate and download an image
    alert('Feature coming soon! Your customization will be saved and sent to your email.');
  };

  const getColorOverlayStyle = () => {
    const opacity = selectedColor === '#F9FAFB' ? 0.3 : 0.6; // Less opacity for white
    
    switch (selectedFinish) {
      case 'matte':
        return {
          backgroundColor: selectedColor,
          opacity: opacity * 0.8,
          mixBlendMode: 'multiply' as const,
          filter: 'saturate(0.8)'
        };
      case 'satin':
        return {
          backgroundColor: selectedColor,
          opacity: opacity * 0.9,
          mixBlendMode: 'multiply' as const,
          filter: 'saturate(1.1) brightness(1.1)'
        };
      case 'carbon':
        return {
          backgroundColor: selectedColor,
          opacity: opacity * 0.7,
          mixBlendMode: 'multiply' as const,
          backgroundImage: `
            linear-gradient(45deg, rgba(0,0,0,0.2) 25%, transparent 25%), 
            linear-gradient(-45deg, rgba(0,0,0,0.2) 25%, transparent 25%), 
            linear-gradient(45deg, transparent 75%, rgba(0,0,0,0.2) 75%), 
            linear-gradient(-45deg, transparent 75%, rgba(0,0,0,0.2) 75%)
          `,
          backgroundSize: '8px 8px',
          backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px'
        };
      default: // gloss
        return {
          backgroundColor: selectedColor,
          opacity: opacity,
          mixBlendMode: 'multiply' as const,
          filter: 'saturate(1.2) brightness(1.1)'
        };
    }
  };

  const currentCars = carsByCategory[selectedCategory as keyof typeof carsByCategory];
  const selectedCarData = currentCars.find(car => car.id === selectedCar);
  const selectedColorData = colors.find(color => color.value === selectedColor);
  const selectedFinishData = finishes.find(finish => finish.id === selectedFinish);
  
  const totalPrice = (selectedCarData?.basePrice || 0) + 15000 + (selectedFinishData?.price || 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Animated Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-red-900 text-white py-16 md:py-24">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-ping delay-2000"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 animate-bounce delay-300">
            <Sparkles className="h-6 w-6 text-red-400 opacity-60" />
          </div>
          <div className="absolute top-32 right-20 animate-bounce delay-700">
            <Zap className="h-8 w-8 text-blue-400 opacity-60" />
          </div>
          <div className="absolute bottom-20 left-20 animate-bounce delay-1000">
            <Car className="h-10 w-10 text-red-500 opacity-60" />
          </div>
          <div className="absolute bottom-32 right-10 animate-bounce delay-500">
            <Palette className="h-7 w-7 text-purple-400 opacity-60" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="inline-block animate-slide-in-left">Car Wrap</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600 animate-slide-in-right delay-300">
                Simulator
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto animate-fade-in-up delay-500">
              Visualize your dream car transformation with our advanced simulation technology. 
              Choose from premium colors and finishes across multiple vehicle categories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-700">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-sm font-medium">
                ✨ Real-time Preview
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-sm font-medium">
                🎨 12 Premium Colors
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-sm font-medium">
                🚗 6 Vehicle Categories
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
          {/* Car Preview - Takes up 2 columns on xl screens */}
          <div className="xl:col-span-2 order-2 xl:order-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-6 md:p-8 h-full">
              <div className="text-center mb-6">
                <div className="inline-flex items-center bg-gradient-to-r from-red-50 to-red-100 px-6 py-2 rounded-full mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-red-800 font-semibold text-sm">LIVE PREVIEW</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {selectedCarData?.name}
                </h2>
                <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                    {categories.find(cat => cat.id === selectedCategory)?.name}
                  </span>
                  <span className="bg-red-100 px-3 py-1 rounded-full text-red-700">
                    {selectedColorData?.name}
                  </span>
                  <span className="bg-blue-100 px-3 py-1 rounded-full text-blue-700">
                    {selectedFinishData?.name}
                  </span>
                </div>
              </div>

              {/* Car Image with Color Overlay */}
              <div className="relative h-64 md:h-80 lg:h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-6 overflow-hidden group">
                {/* Background car image */}
                <img
                  src={selectedCarData?.image}
                  alt={selectedCarData?.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Color overlay */}
                <div 
                  className="absolute inset-0 transition-all duration-500"
                  style={getColorOverlayStyle()}
                />
                
                {/* Finish effect overlay */}
                {selectedFinish === 'gloss' && (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-60" />
                )}
                
                {/* Premium label */}
                <div className="absolute top-4 left-4">
                  <div className="bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
                    <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    {selectedFinishData?.name} {selectedColorData?.name}
                  </div>
                </div>
                
                {/* Reflection effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/20 to-transparent" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm font-semibold text-gray-900">Premium Transformation Preview</p>
                      <p className="text-xs text-gray-600">Hover to see enhanced details</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simulation Info */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">Simulation Accuracy</p>
                    <p className="text-xs text-gray-600">Advanced color blending technology for realistic preview</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">95%</div>
                    <div className="text-xs text-gray-500">Accuracy</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={resetSimulation}
                  className="flex items-center justify-center px-4 py-3 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 group"
                >
                  <RotateCcw className="mr-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                  <span className="text-sm">Reset</span>
                </button>
                <button
                  onClick={downloadResult}
                  className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Download className="mr-2 h-4 w-4" />
                  <span className="text-sm">Save</span>
                </button>
                <button
                  onClick={() => window.location.href = '/book'}
                  className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  <span className="text-sm">Book</span>
                </button>
              </div>
            </div>
          </div>

          {/* Customization Panel */}
          <div className="order-1 xl:order-2 space-y-6">
            {/* Vehicle Category Selection */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <div className="bg-red-100 p-2 rounded-lg mr-3">
                  <Car className="h-5 w-5 text-red-600" />
                </div>
                Vehicle Category
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-center group ${
                      selectedCategory === category.id
                        ? 'border-red-500 bg-gradient-to-br from-red-50 to-red-100 shadow-lg scale-105'
                        : 'border-gray-200 hover:border-red-300 hover:bg-red-50'
                    }`}
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">
                      {category.icon}
                    </div>
                    <div className="font-semibold text-gray-900 text-sm">{category.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Car Model Selection */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Available Models
              </h3>
              <div className="space-y-3 max-h-64 overflow-y-auto custom-scrollbar">
                {currentCars.map((car) => (
                  <button
                    key={car.id}
                    onClick={() => setSelectedCar(car.id)}
                    className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left group ${
                      selectedCar === car.id
                        ? 'border-red-500 bg-gradient-to-r from-red-50 to-red-100 shadow-lg'
                        : 'border-gray-200 hover:border-red-300 hover:bg-red-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 group-hover:text-red-700 transition-colors duration-200">
                          {car.name}
                        </h4>
                        <p className="text-sm text-red-600 font-medium">KSh {car.basePrice.toLocaleString()}</p>
                      </div>
                      <div className="w-16 h-12 rounded-lg overflow-hidden ml-3 group-hover:scale-105 transition-transform duration-200">
                        <img
                          src={car.image}
                          alt={car.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <div className="bg-purple-100 p-2 rounded-lg mr-3">
                  <Palette className="h-5 w-5 text-purple-600" />
                </div>
                Color Selection
              </h3>
              <div className="grid grid-cols-4 gap-3 mb-4">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color.value)}
                    className={`w-12 h-12 rounded-xl border-4 transition-all duration-300 hover:scale-110 ${
                      selectedColor === color.value
                        ? 'border-gray-800 scale-110 shadow-xl ring-4 ring-gray-300/50'
                        : 'border-gray-200 hover:border-gray-400 shadow-md'
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm text-gray-600">
                  Selected: <span className="font-semibold text-gray-900">{selectedColorData?.name}</span>
                </p>
              </div>
            </div>

            {/* Finish Selection */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Finish Type</h3>
              <div className="space-y-3">
                {finishes.map((finish) => (
                  <label
                    key={finish.id}
                    className={`block p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 group ${
                      selectedFinish === finish.id
                        ? 'border-red-500 bg-gradient-to-r from-red-50 to-red-100 shadow-lg'
                        : 'border-gray-200 hover:border-red-300 hover:bg-red-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="finish"
                      value={finish.id}
                      checked={selectedFinish === finish.id}
                      onChange={(e) => setSelectedFinish(e.target.value)}
                      className="sr-only"
                    />
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 group-hover:text-red-700 transition-colors duration-200">
                          {finish.name}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">{finish.description}</p>
                      </div>
                      <div className="text-right ml-4">
                        <span className="text-sm font-bold text-red-600">
                          +KSh {finish.price.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Pricing Info */}
            <div className="bg-gradient-to-br from-black via-gray-900 to-red-900 rounded-3xl text-white p-6 shadow-2xl">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Sparkles className="mr-2 h-5 w-5 text-yellow-400" />
                Estimated Investment
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Base Wrap ({selectedCarData?.name})</span>
                  <span className="font-semibold">KSh {selectedCarData?.basePrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Premium Color ({selectedColorData?.name})</span>
                  <span className="font-semibold">KSh 15,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">{selectedFinishData?.name} Finish</span>
                  <span className="font-semibold">KSh {selectedFinishData?.price.toLocaleString()}</span>
                </div>
                <div className="border-t border-red-400/30 pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">Total Investment</span>
                    <span className="text-2xl font-bold text-yellow-400">KSh {totalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-red-900/30 rounded-xl border border-red-500/30">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-white">Premium Package:</strong> Includes free consultation, professional installation, 
                  5-year warranty, and post-installation care kit.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vehicle Categories Showcase */}
        <div className="mt-16 bg-white/60 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Explore Our Vehicle Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const categoryModels = carsByCategory[category.id as keyof typeof carsByCategory];
              return (
                <div 
                  key={category.id} 
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    {categoryModels.slice(0, 3).map((model, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span>{model.name}</span>
                        <span className="text-red-600 font-medium">KSh {model.basePrice.toLocaleString()}</span>
                      </div>
                    ))}
                    {categoryModels.length > 3 && (
                      <div className="text-center pt-2">
                        <span className="text-red-600 font-medium">+{categoryModels.length - 3} more models</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Steps */}
        <div className="mt-16 bg-gradient-to-br from-gray-900 via-black to-red-900 rounded-3xl text-white p-8 shadow-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Your Journey to the Perfect Wrap
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: 1, title: 'Choose Category', desc: 'Select your vehicle type from 6 categories' },
              { step: 2, title: 'Pick Model', desc: 'Choose from popular models in your category' },
              { step: 3, title: 'Select Color', desc: 'Pick from 12 premium color options' },
              { step: 4, title: 'Choose Finish', desc: 'Select from 4 professional finishes' },
              { step: 5, title: 'Book Service', desc: 'Schedule your transformation' }
            ].map((item, index) => (
              <div key={item.step} className="text-center group">
                <div className="bg-gradient-to-br from-red-500 to-red-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-red-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-700 {
          animation-delay: 700ms;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #dc2626;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #b91c1c;
        }
      `}</style>
    </div>
  );
};

export default Simulation;