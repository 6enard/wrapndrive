import React, { useState } from 'react';
import { Palette, RotateCcw, Download, Sparkles } from 'lucide-react';

const Simulation = () => {
  const [selectedCar, setSelectedCar] = useState('mercedes-c-class');
  const [selectedColor, setSelectedColor] = useState('#DC2626');
  const [selectedFinish, setSelectedFinish] = useState('gloss');

  const carTypes = [
    { 
      id: 'mercedes-c-class', 
      name: 'Mercedes C-Class', 
      category: 'Luxury Sedan',
      basePrice: 95000,
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      id: 'toyota-camry', 
      name: 'Toyota Camry', 
      category: 'Mid-size Sedan',
      basePrice: 85000,
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      id: 'audi-a4', 
      name: 'Audi A4', 
      category: 'Luxury Sedan',
      basePrice: 92000,
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      id: 'mazda-cx5', 
      name: 'Mazda CX-5', 
      category: 'Compact SUV',
      basePrice: 88000,
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      id: 'bmw-x3', 
      name: 'BMW X3', 
      category: 'Luxury SUV',
      basePrice: 98000,
      image: 'https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      id: 'honda-civic', 
      name: 'Honda Civic', 
      category: 'Compact Sedan',
      basePrice: 78000,
      image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

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

  const resetSimulation = () => {
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

  const selectedCarData = carTypes.find(car => car.id === selectedCar);
  const selectedColorData = colors.find(color => color.value === selectedColor);
  const selectedFinishData = finishes.find(finish => finish.id === selectedFinish);
  
  const totalPrice = (selectedCarData?.basePrice || 0) + 15000 + (selectedFinishData?.price || 0);

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Car Wrap Simulator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visualize how different colors and finishes will look on popular car models before making a decision
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Car Preview */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Preview</h2>
                <p className="text-gray-600">
                  {selectedCarData?.name} • {selectedColorData?.name} • {selectedFinishData?.name}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {selectedCarData?.category}
                </p>
              </div>

              {/* Car Image with Color Overlay */}
              <div className="relative h-80 bg-gradient-to-b from-blue-50 to-gray-100 rounded-xl mb-6 overflow-hidden">
                {/* Background car image */}
                <img
                  src={selectedCarData?.image}
                  alt={selectedCarData?.name}
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Color overlay */}
                <div 
                  className="absolute inset-0"
                  style={getColorOverlayStyle()}
                />
                
                {/* Finish effect overlay */}
                {selectedFinish === 'gloss' && (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-60" />
                )}
                
                {/* Label */}
                <div className="absolute top-4 left-4">
                  <div className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                    {selectedFinishData?.name} {selectedColorData?.name}
                  </div>
                </div>
                
                {/* Reflection effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/10 to-transparent" />
              </div>

              {/* Before/After Toggle Info */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600 text-center">
                  <strong>Simulation Preview:</strong> This shows how your selected color and finish will transform the vehicle. 
                  The actual result will have even better coverage and finish quality.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={resetSimulation}
                  className="flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
                >
                  <RotateCcw className="mr-2 h-5 w-5" />
                  Reset
                </button>
                <button
                  onClick={downloadResult}
                  className="flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Save Design
                </button>
                <button
                  onClick={() => window.location.href = '/book'}
                  className="flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Book This Design
                </button>
              </div>
            </div>
          </div>

          {/* Customization Panel */}
          <div className="space-y-6">
            {/* Car Model Selection */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Select Vehicle Model</h3>
              <div className="space-y-3">
                {carTypes.map((car) => (
                  <button
                    key={car.id}
                    onClick={() => setSelectedCar(car.id)}
                    className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                      selectedCar === car.id
                        ? 'border-red-600 bg-red-50'
                        : 'border-gray-200 hover:border-red-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">{car.name}</h4>
                        <p className="text-sm text-gray-600">{car.category}</p>
                        <p className="text-sm text-red-600 font-medium">Base: KSh {car.basePrice.toLocaleString()}</p>
                      </div>
                      <div className="w-16 h-12 rounded overflow-hidden">
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
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Palette className="mr-2 h-6 w-6 text-red-600" />
                Color Selection
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color.value)}
                    className={`w-12 h-12 rounded-lg border-4 transition-all duration-200 ${
                      selectedColor === color.value
                        ? 'border-gray-800 scale-110 shadow-lg'
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
              <p className="mt-3 text-sm text-gray-600">
                Selected: <span className="font-semibold">{selectedColorData?.name}</span>
              </p>
            </div>

            {/* Finish Selection */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Finish Type</h3>
              <div className="space-y-3">
                {finishes.map((finish) => (
                  <label
                    key={finish.id}
                    className={`block p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                      selectedFinish === finish.id
                        ? 'border-red-600 bg-red-50'
                        : 'border-gray-200 hover:border-red-300'
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
                      <div>
                        <h4 className="font-semibold text-gray-900">{finish.name}</h4>
                        <p className="text-sm text-gray-600">{finish.description}</p>
                      </div>
                      <span className="text-sm font-medium text-red-600">
                        +KSh {finish.price.toLocaleString()}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Pricing Info */}
            <div className="bg-gradient-to-r from-black to-red-900 rounded-2xl text-white p-6">
              <h3 className="text-lg font-bold mb-4">Estimated Cost</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Base Wrap ({selectedCarData?.name})</span>
                  <span>KSh {selectedCarData?.basePrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Premium Color ({selectedColorData?.name})</span>
                  <span>KSh 15,000</span>
                </div>
                <div className="flex justify-between">
                  <span>{selectedFinishData?.name} Finish</span>
                  <span>KSh {selectedFinishData?.price.toLocaleString()}</span>
                </div>
                <hr className="border-red-400" />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Estimate</span>
                  <span>KSh {totalPrice.toLocaleString()}</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-red-800/50 rounded-lg">
                <p className="text-gray-300 text-sm">
                  <strong>Note:</strong> Final price may vary based on vehicle condition, specific requirements, and current promotions. Free consultation included.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Simulation Explanation */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            How Our Simulator Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="bg-red-100 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real Car Photos</h3>
              <p className="text-gray-600 text-sm">We use actual photographs of popular car models for the most realistic preview experience</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-red-100 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Palette className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Color Overlay Technology</h3>
              <p className="text-gray-600 text-sm">Advanced color blending shows how different wrap colors and finishes will look on your vehicle</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-red-100 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Download className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Accurate Pricing</h3>
              <p className="text-gray-600 text-sm">Get real-time pricing based on your specific vehicle model and selected customization options</p>
            </div>
          </div>
        </div>

        {/* Popular Models Info */}
        <div className="mt-12 bg-gradient-to-r from-gray-900 to-red-900 rounded-2xl text-white p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Featured Vehicle Models
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Luxury Sedans</h3>
              <p className="text-gray-300 text-sm">Mercedes C-Class, Audi A4 - Premium wrapping for luxury vehicles</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Popular Sedans</h3>
              <p className="text-gray-300 text-sm">Toyota Camry, Honda Civic - Most requested models in Kenya</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">SUVs</h3>
              <p className="text-gray-300 text-sm">Mazda CX-5, BMW X3 - Perfect for family and adventure vehicles</p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Simple 4-Step Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-red-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Your Model</h3>
              <p className="text-gray-600">Select from Mercedes, Toyota, Audi, Mazda, BMW, and Honda models</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-red-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pick Colors & Finish</h3>
              <p className="text-gray-600">Choose from 12 premium colors and 4 professional finish types</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-red-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">See Real Preview</h3>
              <p className="text-gray-600">View realistic simulation with accurate color and finish representation</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-red-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Book Your Service</h3>
              <p className="text-gray-600">Love the result? Book your wrap service with exact specifications</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulation;