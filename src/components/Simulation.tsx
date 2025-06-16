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
      svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="carGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:currentColor;stop-opacity:1" />
            <stop offset="100%" style="stop-color:currentColor;stop-opacity:0.8" />
          </linearGradient>
        </defs>
        <path d="M45 125 L75 105 L115 98 L285 98 L325 105 L355 125 L355 155 L325 165 L75 165 L45 155 Z" 
              fill="url(#carGradient)" stroke="#2D3748" stroke-width="2"/>
        <path d="M85 98 L105 78 L295 78 L315 98" fill="url(#carGradient)" stroke="#2D3748" stroke-width="2"/>
        <circle cx="95" cy="155" r="16" fill="#1A202C"/>
        <circle cx="305" cy="155" r="16" fill="#1A202C"/>
        <circle cx="95" cy="155" r="10" fill="#4A5568"/>
        <circle cx="305" cy="155" r="10" fill="#4A5568"/>
        <rect x="125" y="85" width="45" height="13" fill="#E2E8F0" opacity="0.8" rx="2"/>
        <rect x="230" y="85" width="45" height="13" fill="#E2E8F0" opacity="0.8" rx="2"/>
        <path d="M85 98 L95 88 L305 88 L315 98" fill="#4A5568" opacity="0.3"/>
        <ellipse cx="200" cy="140" rx="8" ry="3" fill="#CBD5E0" opacity="0.6"/>
      </svg>`
    },
    { 
      id: 'toyota-camry', 
      name: 'Toyota Camry', 
      category: 'Mid-size Sedan',
      basePrice: 85000,
      svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="toyotaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:currentColor;stop-opacity:1" />
            <stop offset="100%" style="stop-color:currentColor;stop-opacity:0.8" />
          </linearGradient>
        </defs>
        <path d="M50 122 L80 102 L120 97 L280 97 L320 102 L350 122 L350 152 L320 162 L80 162 L50 152 Z" 
              fill="url(#toyotaGradient)" stroke="#2D3748" stroke-width="2"/>
        <path d="M90 97 L110 82 L290 82 L310 97" fill="url(#toyotaGradient)" stroke="#2D3748" stroke-width="2"/>
        <circle cx="100" cy="152" r="15" fill="#1A202C"/>
        <circle cx="300" cy="152" r="15" fill="#1A202C"/>
        <circle cx="100" cy="152" r="9" fill="#4A5568"/>
        <circle cx="300" cy="152" r="9" fill="#4A5568"/>
        <rect x="130" y="87" width="50" height="12" fill="#E2E8F0" opacity="0.8" rx="2"/>
        <rect x="220" y="87" width="50" height="12" fill="#E2E8F0" opacity="0.8" rx="2"/>
        <path d="M90 97 L100 87 L300 87 L310 97" fill="#4A5568" opacity="0.3"/>
        <path d="M160 102 L170 108 L230 108 L240 102" fill="#CBD5E0" opacity="0.5"/>
      </svg>`
    },
    { 
      id: 'audi-a4', 
      name: 'Audi A4', 
      category: 'Luxury Sedan',
      basePrice: 92000,
      svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="audiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:currentColor;stop-opacity:1" />
            <stop offset="100%" style="stop-color:currentColor;stop-opacity:0.8" />
          </linearGradient>
        </defs>
        <path d="M48 124 L78 104 L118 99 L282 99 L322 104 L352 124 L352 154 L322 164 L78 164 L48 154 Z" 
              fill="url(#audiGradient)" stroke="#2D3748" stroke-width="2"/>
        <path d="M88 99 L108 79 L292 79 L312 99" fill="url(#audiGradient)" stroke="#2D3748" stroke-width="2"/>
        <circle cx="98" cy="154" r="16" fill="#1A202C"/>
        <circle cx="302" cy="154" r="16" fill="#1A202C"/>
        <circle cx="98" cy="154" r="10" fill="#4A5568"/>
        <circle cx="302" cy="154" r="10" fill="#4A5568"/>
        <rect x="128" y="86" width="48" height="13" fill="#E2E8F0" opacity="0.8" rx="2"/>
        <rect x="224" y="86" width="48" height="13" fill="#E2E8F0" opacity="0.8" rx="2"/>
        <path d="M88 99 L98 89 L302 89 L312 99" fill="#4A5568" opacity="0.3"/>
        <rect x="180" y="104" width="40" height="8" fill="#CBD5E0" opacity="0.6" rx="4"/>
      </svg>`
    },
    { 
      id: 'mazda-cx5', 
      name: 'Mazda CX-5', 
      category: 'Compact SUV',
      basePrice: 88000,
      svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="mazdaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:currentColor;stop-opacity:1" />
            <stop offset="100%" style="stop-color:currentColor;stop-opacity:0.8" />
          </linearGradient>
        </defs>
        <path d="M50 130 L80 108 L120 102 L280 102 L320 108 L350 130 L350 160 L320 170 L80 170 L50 160 Z" 
              fill="url(#mazdaGradient)" stroke="#2D3748" stroke-width="2"/>
        <path d="M90 102 L110 72 L290 72 L310 102" fill="url(#mazdaGradient)" stroke="#2D3748" stroke-width="2"/>
        <circle cx="100" cy="160" r="18" fill="#1A202C"/>
        <circle cx="300" cy="160" r="18" fill="#1A202C"/>
        <circle cx="100" cy="160" r="11" fill="#4A5568"/>
        <circle cx="300" cy="160" r="11" fill="#4A5568"/>
        <rect x="130" y="82" width="50" height="18" fill="#E2E8F0" opacity="0.8" rx="2"/>
        <rect x="220" y="82" width="50" height="18" fill="#E2E8F0" opacity="0.8" rx="2"/>
        <path d="M90 102 L100 92 L300 92 L310 102" fill="#4A5568" opacity="0.3"/>
        <rect x="170" y="108" width="60" height="12" fill="#CBD5E0" opacity="0.6" rx="6"/>
      </svg>`
    },
    { 
      id: 'bmw-x3', 
      name: 'BMW X3', 
      category: 'Luxury SUV',
      basePrice: 98000,
      svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bmwGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:currentColor;stop-opacity:1" />
            <stop offset="100%" style="stop-color:currentColor;stop-opacity:0.8" />
          </linearGradient>
        </defs>
        <path d="M52 132 L82 110 L122 104 L278 104 L318 110 L348 132 L348 162 L318 172 L82 172 L52 162 Z" 
              fill="url(#bmwGradient)" stroke="#2D3748" stroke-width="2"/>
        <path d="M92 104 L112 74 L288 74 L308 104" fill="url(#bmwGradient)" stroke="#2D3748" stroke-width="2"/>
        <circle cx="102" cy="162" r="18" fill="#1A202C"/>
        <circle cx="298" cy="162" r="18" fill="#1A202C"/>
        <circle cx="102" cy="162" r="11" fill="#4A5568"/>
        <circle cx="298" cy="162" r="11" fill="#4A5568"/>
        <rect x="132" y="84" width="48" height="18" fill="#E2E8F0" opacity="0.8" rx="2"/>
        <rect x="220" y="84" width="48" height="18" fill="#E2E8F0" opacity="0.8" rx="2"/>
        <path d="M92 104 L102 94 L298 94 L308 104" fill="#4A5568" opacity="0.3"/>
        <rect x="175" y="110" width="50" height="10" fill="#CBD5E0" opacity="0.6" rx="5"/>
        <circle cx="200" cy="88" r="6" fill="#E2E8F0" opacity="0.7"/>
      </svg>`
    },
    { 
      id: 'honda-civic', 
      name: 'Honda Civic', 
      category: 'Compact Sedan',
      basePrice: 78000,
      svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="hondaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:currentColor;stop-opacity:1" />
            <stop offset="100%" style="stop-color:currentColor;stop-opacity:0.8" />
          </linearGradient>
        </defs>
        <path d="M55 123 L85 103 L125 98 L275 98 L315 103 L345 123 L345 153 L315 163 L85 163 L55 153 Z" 
              fill="url(#hondaGradient)" stroke="#2D3748" stroke-width="2"/>
        <path d="M95 98 L115 83 L285 83 L305 98" fill="url(#hondaGradient)" stroke="#2D3748" stroke-width="2"/>
        <circle cx="105" cy="153" r="14" fill="#1A202C"/>
        <circle cx="295" cy="153" r="14" fill="#1A202C"/>
        <circle cx="105" cy="153" r="8" fill="#4A5568"/>
        <circle cx="295" cy="153" r="8" fill="#4A5568"/>
        <rect x="135" y="88" width="45" height="12" fill="#E2E8F0" opacity="0.8" rx="2"/>
        <rect x="220" y="88" width="45" height="12" fill="#E2E8F0" opacity="0.8" rx="2"/>
        <path d="M95 98 L105 88 L295 88 L305 98" fill="#4A5568" opacity="0.3"/>
        <path d="M165 103 L175 108 L225 108 L235 103" fill="#CBD5E0" opacity="0.5"/>
      </svg>`
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

  const getFinishStyle = () => {
    const baseStyle = { color: selectedColor };
    
    switch (selectedFinish) {
      case 'matte':
        return { ...baseStyle, filter: 'brightness(0.9) saturate(0.8)' };
      case 'satin':
        return { ...baseStyle, filter: 'brightness(1.1) saturate(1.1)' };
      case 'carbon':
        return { 
          ...baseStyle, 
          filter: 'brightness(0.7) contrast(1.2)',
          background: `linear-gradient(45deg, ${selectedColor} 25%, transparent 25%), 
                      linear-gradient(-45deg, ${selectedColor} 25%, transparent 25%), 
                      linear-gradient(45deg, transparent 75%, ${selectedColor} 75%), 
                      linear-gradient(-45deg, transparent 75%, ${selectedColor} 75%)`,
          backgroundSize: '4px 4px',
          backgroundPosition: '0 0, 0 2px, 2px -2px, -2px 0px'
        };
      default:
        return { ...baseStyle, filter: 'brightness(1.2) saturate(1.2)' };
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

              {/* Car SVG with Color */}
              <div className="flex justify-center items-center h-80 bg-gradient-to-b from-blue-50 to-gray-100 rounded-xl mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-gray-200/50"></div>
                <div 
                  className="w-96 h-48 relative z-10 drop-shadow-lg"
                  style={getFinishStyle()}
                  dangerouslySetInnerHTML={{ 
                    __html: selectedCarData?.svg || '' 
                  }}
                />
                {/* Reflection effect */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-24 opacity-20">
                  <div 
                    className="w-full h-full transform scale-y-[-1] blur-sm"
                    style={{ ...getFinishStyle(), filter: `${getFinishStyle().filter} opacity(0.3)` }}
                    dangerouslySetInnerHTML={{ 
                      __html: selectedCarData?.svg || '' 
                    }}
                  />
                </div>
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
                      <div 
                        className="w-16 h-10 flex items-center justify-center"
                        style={{ color: '#6B7280' }}
                        dangerouslySetInnerHTML={{ __html: car.svg }}
                      />
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

        {/* Car Specifications */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Choose These Models?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="bg-red-100 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Popular Models</h3>
              <p className="text-gray-600 text-sm">We've selected the most popular car models in Kenya for accurate visualization</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-red-100 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Palette className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Realistic Preview</h3>
              <p className="text-gray-600 text-sm">Our simulator shows how wraps will actually look on your specific vehicle model</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-red-100 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Download className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Accurate Pricing</h3>
              <p className="text-gray-600 text-sm">Get real-time pricing based on your vehicle model and selected options</p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            How the Simulator Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-red-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Your Model</h3>
              <p className="text-gray-600">Select from popular Mercedes, Toyota, Audi, Mazda, BMW, and Honda models</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-red-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pick Colors & Finish</h3>
              <p className="text-gray-600">Experiment with 12 premium colors and 4 different finish types</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-red-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">See Real Pricing</h3>
              <p className="text-gray-600">Get accurate pricing based on your vehicle model and customization choices</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-red-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Book Your Service</h3>
              <p className="text-gray-600">Love the result? Book your wrap service with your exact specifications</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulation;