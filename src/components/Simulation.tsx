import React, { useState } from 'react';
import { Palette, RotateCcw, Download, Sparkles, Car, Zap, ChevronRight } from 'lucide-react';

const Simulation = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCar, setSelectedCar] = useState('');
  const [selectedColor, setSelectedColor] = useState('#DC2626');
  const [selectedFinish, setSelectedFinish] = useState('gloss');

  const categories = [
    { 
      id: 'sedan', 
      name: 'Sedan', 
      icon: '🚗',
      description: 'Classic four-door vehicles',
      count: 5
    },
    { 
      id: 'suv', 
      name: 'SUV', 
      icon: '🚙',
      description: 'Sport utility vehicles',
      count: 4
    },
    { 
      id: 'mini-suv', 
      name: 'Mini SUV', 
      icon: '🚐',
      description: 'Compact crossovers',
      count: 4
    },
    { 
      id: 'pickup', 
      name: 'Pickup', 
      icon: '🛻',
      description: 'Pickup trucks',
      count: 4
    },
    { 
      id: 'coupe', 
      name: 'Coupe', 
      icon: '🏎️',
      description: 'Two-door sports cars',
      count: 4
    },
    { 
      id: 'hatchback', 
      name: 'Hatchback', 
      icon: '🚗',
      description: 'Compact cars',
      count: 4
    }
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
    { name: 'Racing Red', value: '#DC2626', category: 'Bold' },
    { name: 'Midnight Black', value: '#111827', category: 'Classic' },
    { name: 'Pearl White', value: '#F9FAFB', category: 'Classic' },
    { name: 'Royal Blue', value: '#1D4ED8', category: 'Bold' },
    { name: 'Emerald Green', value: '#059669', category: 'Bold' },
    { name: 'Sunset Orange', value: '#EA580C', category: 'Bold' },
    { name: 'Deep Purple', value: '#7C3AED', category: 'Premium' },
    { name: 'Silver Chrome', value: '#9CA3AF', category: 'Classic' },
    { name: 'Gold Metallic', value: '#F59E0B', category: 'Premium' },
    { name: 'Rose Pink', value: '#EC4899', category: 'Premium' },
    { name: 'Neon Yellow', value: '#EAB308', category: 'Bold' },
    { name: 'Teal Blue', value: '#0891B2', category: 'Bold' }
  ];

  const finishes = [
    { id: 'gloss', name: 'Gloss', description: 'High-shine finish that reflects light', price: 5000 },
    { id: 'matte', name: 'Matte', description: 'Non-reflective, sophisticated finish', price: 10000 },
    { id: 'satin', name: 'Satin', description: 'Semi-gloss finish between matte and gloss', price: 8000 },
    { id: 'carbon', name: 'Carbon Fiber', description: 'Textured carbon fiber pattern', price: 25000 }
  ];

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentStep(2);
    // Reset car selection when category changes
    setSelectedCar('');
  };

  const handleCarSelect = (carId: string) => {
    setSelectedCar(carId);
    setCurrentStep(3);
  };

  const handleColorSelect = (colorValue: string) => {
    setSelectedColor(colorValue);
    if (currentStep < 4) {
      setCurrentStep(4);
    }
  };

  const resetSimulation = () => {
    setCurrentStep(1);
    setSelectedCategory('');
    setSelectedCar('');
    setSelectedColor('#DC2626');
    setSelectedFinish('gloss');
  };

  const downloadResult = () => {
    alert('Feature coming soon! Your customization will be saved and sent to your email.');
  };

  const getColorOverlayStyle = () => {
    const opacity = selectedColor === '#F9FAFB' ? 0.4 : 0.7;
    
    const baseStyle = {
      backgroundColor: selectedColor,
      opacity: opacity,
      mixBlendMode: 'multiply' as const,
    };

    switch (selectedFinish) {
      case 'matte':
        return {
          ...baseStyle,
          opacity: opacity * 0.8,
          filter: 'saturate(0.8) brightness(0.9)'
        };
      case 'satin':
        return {
          ...baseStyle,
          opacity: opacity * 0.9,
          filter: 'saturate(1.1) brightness(1.05)'
        };
      case 'carbon':
        return {
          ...baseStyle,
          opacity: opacity * 0.7,
          backgroundImage: `
            linear-gradient(45deg, rgba(0,0,0,0.3) 25%, transparent 25%), 
            linear-gradient(-45deg, rgba(0,0,0,0.3) 25%, transparent 25%), 
            linear-gradient(45deg, transparent 75%, rgba(0,0,0,0.3) 75%), 
            linear-gradient(-45deg, transparent 75%, rgba(0,0,0,0.3) 75%)
          `,
          backgroundSize: '12px 12px',
          backgroundPosition: '0 0, 0 6px, 6px -6px, -6px 0px'
        };
      default: // gloss
        return {
          ...baseStyle,
          filter: 'saturate(1.3) brightness(1.1)'
        };
    }
  };

  const currentCars = selectedCategory ? carsByCategory[selectedCategory as keyof typeof carsByCategory] : [];
  const selectedCarData = currentCars.find(car => car.id === selectedCar);
  const selectedColorData = colors.find(color => color.value === selectedColor);
  const selectedFinishData = finishes.find(finish => finish.id === selectedFinish);
  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);
  
  const totalPrice = (selectedCarData?.basePrice || 0) + 15000 + (selectedFinishData?.price || 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Enhanced Hero Section */}
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
            
            {/* Progress Indicator */}
            <div className="flex justify-center mb-8 animate-fade-in-up delay-700">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full">
                <span className="text-sm font-medium">Step {currentStep} of 4</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        {/* Step 1: Category Selection */}
        {currentStep === 1 && (
          <div className="animate-fade-in-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Choose Your Vehicle Category
              </h2>
              <p className="text-xl text-gray-600">
                Select the category that matches your vehicle type
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => handleCategorySelect(category.id)}
                  className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium inline-block">
                      {category.count} Models Available
                    </div>
                    <div className="mt-4 flex items-center justify-center text-red-600 group-hover:translate-x-2 transition-transform duration-300">
                      <span className="mr-2">Select</span>
                      <ChevronRight className="h-5 w-5" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Car Model Selection */}
        {currentStep === 2 && selectedCategory && (
          <div className="animate-fade-in-up">
            <div className="text-center mb-12">
              <button
                onClick={() => setCurrentStep(1)}
                className="text-red-600 hover:text-red-700 mb-4 inline-flex items-center"
              >
                ← Back to Categories
              </button>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Choose Your {selectedCategoryData?.name}
              </h2>
              <p className="text-xl text-gray-600">
                Select the specific model you want to customize
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {currentCars.map((car, index) => (
                <button
                  key={car.id}
                  onClick={() => handleCarSelect(car.id)}
                  className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                      {car.name}
                    </h3>
                    <p className="text-red-600 font-bold text-lg mb-4">
                      From KSh {car.basePrice.toLocaleString()}
                    </p>
                    <div className="flex items-center justify-center text-red-600 group-hover:translate-x-2 transition-transform duration-300">
                      <span className="mr-2">Select Model</span>
                      <ChevronRight className="h-5 w-5" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Color Selection */}
        {currentStep === 3 && selectedCar && (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 animate-fade-in-up">
            {/* Car Preview */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8">
              <div className="text-center mb-6">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="text-red-600 hover:text-red-700 mb-4 inline-flex items-center"
                >
                  ← Back to Models
                </button>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedCarData?.name}
                </h3>
                <div className="inline-flex items-center bg-gradient-to-r from-red-50 to-red-100 px-4 py-2 rounded-full">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-red-800 font-semibold text-sm">LIVE PREVIEW</span>
                </div>
              </div>

              {/* Car Image with Color Overlay */}
              <div className="relative h-64 md:h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-6 overflow-hidden group">
                <img
                  src={selectedCarData?.image}
                  alt={selectedCarData?.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Dynamic Color Overlay */}
                <div 
                  className="absolute inset-0 transition-all duration-500"
                  style={getColorOverlayStyle()}
                />
                
                {/* Finish Effects */}
                {selectedFinish === 'gloss' && (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-60" />
                )}
                
                {/* Color Label */}
                <div className="absolute top-4 left-4">
                  <div className="bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
                    <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ backgroundColor: selectedColor }}></span>
                    {selectedColorData?.name}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={resetSimulation}
                  className="flex items-center justify-center px-4 py-3 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
                >
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Reset
                </button>
                <button
                  onClick={() => setCurrentStep(4)}
                  className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-200"
                >
                  Next Step
                  <ChevronRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Color Selection Panel */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Palette className="mr-3 h-8 w-8 text-red-600" />
                Choose Your Color
              </h3>

              {/* Color Categories */}
              {['Classic', 'Bold', 'Premium'].map((category) => (
                <div key={category} className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">{category} Colors</h4>
                  <div className="grid grid-cols-4 gap-4">
                    {colors.filter(color => color.category === category).map((color) => (
                      <button
                        key={color.value}
                        onClick={() => handleColorSelect(color.value)}
                        className={`group relative w-16 h-16 rounded-2xl border-4 transition-all duration-300 hover:scale-110 ${
                          selectedColor === color.value
                            ? 'border-gray-800 scale-110 shadow-xl ring-4 ring-gray-300/50'
                            : 'border-gray-200 hover:border-gray-400 shadow-md'
                        }`}
                        style={{ backgroundColor: color.value }}
                        title={color.name}
                      >
                        {selectedColor === color.value && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                              <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                            </div>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-600">
                  Selected: <span className="font-semibold text-gray-900">{selectedColorData?.name}</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Category: {selectedColorData?.category}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Finish Selection & Final Preview */}
        {currentStep === 4 && (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 animate-fade-in-up">
            {/* Final Preview */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Final Preview
                </h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>{selectedCarData?.name}</strong></p>
                  <p>{selectedColorData?.name} • {selectedFinishData?.name}</p>
                </div>
              </div>

              {/* Final Car Preview */}
              <div className="relative h-64 md:h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-6 overflow-hidden group">
                <img
                  src={selectedCarData?.image}
                  alt={selectedCarData?.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                
                <div 
                  className="absolute inset-0 transition-all duration-500"
                  style={getColorOverlayStyle()}
                />
                
                {selectedFinish === 'gloss' && (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-60" />
                )}
              </div>

              {/* Pricing */}
              <div className="bg-gradient-to-br from-black via-gray-900 to-red-900 rounded-2xl text-white p-6 mb-6">
                <h4 className="text-lg font-bold mb-4">Investment Breakdown</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Base Wrap</span>
                    <span>KSh {selectedCarData?.basePrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Premium Color</span>
                    <span>KSh 15,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{selectedFinishData?.name} Finish</span>
                    <span>KSh {selectedFinishData?.price.toLocaleString()}</span>
                  </div>
                  <div className="border-t border-red-400/30 pt-2 mt-2">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-yellow-400">KSh {totalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => setCurrentStep(3)}
                  className="flex items-center justify-center px-4 py-3 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
                >
                  ← Back
                </button>
                <button
                  onClick={downloadResult}
                  className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Save
                </button>
                <button
                  onClick={() => window.location.href = '/book'}
                  className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-200"
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  Book
                </button>
              </div>
            </div>

            {/* Finish Selection */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Choose Finish Type</h3>
              <div className="space-y-4">
                {finishes.map((finish) => (
                  <label
                    key={finish.id}
                    className={`block p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
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
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          {finish.name}
                        </h4>
                        <p className="text-gray-600 text-sm mb-2">{finish.description}</p>
                        <div className="text-red-600 font-bold">
                          +KSh {finish.price.toLocaleString()}
                        </div>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        selectedFinish === finish.id
                          ? 'border-red-500 bg-red-500'
                          : 'border-gray-300'
                      }`}>
                        {selectedFinish === finish.id && (
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        )}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out forwards; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out 0.3s forwards; opacity: 0; }
        .animate-slide-up { animation: slide-up 0.6s ease-out forwards; opacity: 0; }
        .delay-300 { animation-delay: 300ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-700 { animation-delay: 700ms; }
      `}</style>
    </div>
  );
};

export default Simulation;